import { useEffect, useRef } from "react";
import * as THREE from "three";

// True 3D stingray(s): lit, shaded body mesh (real depth via lighting, not a
// flat gradient) with a wireframe overlay for defined structural lines,
// plus a tapered 3D tail that flaps with the same wave as the wings.
// Two independent rays, each wandering its own randomized path.
//
// Requires: npm install three
// Usage: wrap in a position:relative container and put your content in a
// zIndex:1 layer above it.

const ACCENT = 0x6f93f2; // body / wireframe color — shift toward #3d5fcc for more blue
const RIM = 0x9fb8ff; // rim-light color

function buildRayGeometry(segsU = 18, segsV = 12) {
  const positions = [];
  const indices = [];
  const maxWidth = 1.35;
  const bodyLength = 2.6;

  const widthAt = (v) => Math.pow(Math.sin(Math.PI * v), 1.7);

  for (let j = 0; j <= segsV; j++) {
    const v = j / segsV;
    for (let i = 0; i <= segsU; i++) {
      const u = (i / segsU) * 2 - 1; // -1..1 across the wingspan
      const x = u * maxWidth * widthAt(v);
      const z = v * bodyLength;
      const dome = 0.4 * Math.cos((u * Math.PI) / 2) * (0.5 + 0.5 * Math.sin(Math.PI * v));
      positions.push(x, dome, z);
    }
  }

  const rowLen = segsU + 1;
  for (let j = 0; j < segsV; j++) {
    for (let i = 0; i < segsU; i++) {
      const a = j * rowLen + i;
      const b = a + 1;
      const c = a + rowLen;
      const d = c + 1;
      indices.push(a, c, b, b, c, d);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.userData = {
    segsU,
    segsV,
    maxWidth,
    bodyLength,
    widthAt,
    basePositions: positions.slice(),
    backTipY: 0.4 * 0.5, // dome height at u=0, v=1: 0.4*cos(0)*(0.5+0.5*sin(pi))
  };
  return geometry;
}

function flapGeometry(geometry, t) {
  const { segsU, segsV, basePositions } = geometry.userData;
  const pos = geometry.attributes.position;
  const rowLen = segsU + 1;

  for (let j = 0; j <= segsV; j++) {
    const v = j / segsV;
    for (let i = 0; i <= segsU; i++) {
      const idx = j * rowLen + i;
      const u = (i / segsU) * 2 - 1;
      const base = basePositions[idx * 3 + 1];
      const flap = 0.34 * Math.pow(Math.abs(u), 1.4) * Math.sin(2 * Math.PI * (v * 1.15 - t * 0.7));
      pos.setY(idx, base + flap);
    }
  }
  pos.needsUpdate = true;
  geometry.computeVertexNormals();
}

function tailPoints(t, bodyLength, anchorY) {
  const pts = [];
  const segments = 6;
  for (let i = 0; i <= segments; i++) {
    const s = i / segments;
    const z = bodyLength + s * 1.7;
    const vTail = 1 + s * 0.65; // continue the body's v coordinate past the tail base
    const amp = 0.3 * (0.25 + 0.75 * s); // amplitude grows toward the tip, like the wingtips
    // same traveling-wave formula as the wing flap (v*1.15 - t*0.7), so the tail
    // reads as a continuation of the body's motion rather than its own animation
    const yFlap = amp * Math.sin(2 * Math.PI * (vTail * 1.15 - t * 0.7));
    pts.push(new THREE.Vector3(0, anchorY + yFlap, z));
  }
  return pts;
}

// Builds one ray: its own geometry, meshes, and per-frame update/dispose.
// `path` controls its randomized wander — independent frequencies/phases
// per ray so two instances never move in lockstep.
function createRay(scene, { scale = 1, path, timeOffset = 0 }) {
  const group = new THREE.Group();
  group.scale.setScalar(scale);
  scene.add(group);

  const geometry = buildRayGeometry();

  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: ACCENT,
    roughness: 0.35,
    metalness: 0.1,
    transparent: true,
    opacity: 0.55,
    side: THREE.DoubleSide,
    emissive: 0x1a2a6a,
    emissiveIntensity: 0.3,
  });
  const bodyMesh = new THREE.Mesh(geometry, bodyMaterial);
  group.add(bodyMesh);

  const wireMaterial = new THREE.MeshBasicMaterial({
    color: RIM,
    wireframe: true,
    transparent: true,
    opacity: 0.16,
  });
  const wireMesh = new THREE.Mesh(geometry, wireMaterial);
  group.add(wireMesh);

  const tailMaterial = new THREE.MeshStandardMaterial({
    color: ACCENT,
    transparent: true,
    opacity: 0.7,
    roughness: 0.4,
  });
  let tailMesh = null;
  let heading = 0;

  function update(t) {
    const tt = t + timeOffset;
    
    flapGeometry(geometry, tt);

    if (tailMesh) {
      group.remove(tailMesh);
      tailMesh.geometry.dispose();
    }
    const curve = new THREE.CatmullRomCurve3(
      tailPoints(tt, geometry.userData.bodyLength, geometry.userData.backTipY)
    );
    const tailGeo = new THREE.TubeGeometry(curve, 16, 0.02, 6, false);
    tailMesh = new THREE.Mesh(tailGeo, tailMaterial);
    group.add(tailMesh);

    const x = path.x(tt);
    const z = path.z(tt);
    const y = path.y(tt);

    // Look farther ahead so the ray anticipates turns instead of reacting instantly.
    const lookAhead = 0.45;

    const tx = path.x(tt + lookAhead);
    const tz = path.z(tt + lookAhead);

    const desiredHeading = Math.atan2(tx - x, tz - z) + Math.PI;

    // Smallest angle difference (-PI ... PI)
    let delta = desiredHeading - heading;
    delta = Math.atan2(Math.sin(delta), Math.cos(delta));

    // Limit turning speed.
    // Lower = wider, more graceful turns.
    // Try values between 0.02 and 0.06.
    const turnSpeed = 0.035;

    heading += delta * turnSpeed;

    group.position.set(x, y, z);
    group.rotation.y = heading;

    // Bank into turns.
    const bank = THREE.MathUtils.clamp(delta * 2.4, -0.3, 0.3);
    group.rotation.z = bank;

    group.rotation.x = -0.15;
  }

  function dispose() {
    scene.remove(group);
    geometry.dispose();
    bodyMaterial.dispose();
    wireMaterial.dispose();
    tailMaterial.dispose();
    if (tailMesh) tailMesh.geometry.dispose();
  }

  return { update, dispose };
}

export default function StingrayBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
    camera.position.set(0, 15, 10.5);
    camera.lookAt(0, 0, 1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(2, 4, 3);
    scene.add(key);

    const rim = new THREE.PointLight(RIM, 1.4, 16);
    rim.position.set(-2, 1.5, -2);
    scene.add(rim);

    scene.add(new THREE.AmbientLight(0x3a4a7a, 0.6));

    // ray 1: original size, its own randomized wander
    const ray1 = createRay(scene, {
      scale: 1,
      timeOffset: 0,
      path: {
        seed: 0,
        x: (t) => 6.8 * Math.sin(t * 0.11) + 2.9 * Math.sin(t * 0.27 + 1.3),
        z: (t) => 4.8 * Math.sin(t * 0.08 + 0.5) + 2.2 * Math.sin(t * 0.19 + 2.1) - 0.4,
        y: (t) => 0.55 * Math.sin(t * 0.15) + 0.25 * Math.sin(t * 0.34 + 1),
      },
    });

    // ray 2: larger, different frequencies/phases/offset so it never mirrors ray 1
    const ray2 = createRay(scene, {
      scale: 1.6,
      timeOffset: 38,
      path: {
        seed: 2.4,
        x: (t) => 5.5 * Math.sin(t * 0.075 + 2.0) + 2.4 * Math.sin(t * 0.21 + 0.4) - 1.5,
        z: (t) => 3.6 * Math.sin(t * 0.13 + 1.1) + 1.9 * Math.sin(t * 0.05 + 3.0) + 1.2,
        y: (t) => 0.4 * Math.sin(t * 0.1 + 1.8) + 0.2 * Math.sin(t * 0.24 + 0.6),
      },
    });

    let raf;
    let t = 0;
    const clock = new THREE.Clock();

    function resize() {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    function animate() {
      raf = requestAnimationFrame(animate);
      const dt = clock.getDelta();
      t += dt;

      ray1.update(t);
      ray2.update(t);

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      ray1.dispose();
      ray2.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}