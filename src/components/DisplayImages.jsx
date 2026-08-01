import { useState, useRef, useCallback } from 'react';
import Hero from '../components/Hero';
import Bird from '../assets/bird.png';
import Chess from '../assets/chess.png';
import Flower from '../assets/flower.png';
import Space from '../assets/space.png';
import Pickle from '../assets/pickle.png';

const images = [Bird, Chess, Flower, Space, Pickle];

let nextId = 0;

function DisplayImages(){
  const [spawns, setSpawns] = useState([]);
  const containerRef = useRef(null);
  const lastSpawnTime = useRef(0);

  const handleMouseMove = useCallback((e) => {
    const now = Date.now();
    // Throttle: only spawn a new image every ~150ms, not on every pixel of movement
    if (now - lastSpawnTime.current < 300) return;
    lastSpawnTime.current = now;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = nextId++;
    const src = images[Math.floor(Math.random() * images.length)];
    const startSize = 4 + Math.random() * 4;   // vh, e.g. 4-8vh
    const endSize = 16 + Math.random() * 14;   // vh, e.g. 16-30vh
    const duration = 1500 + Math.random() * 600; // ms, varies per spawn

    setSpawns((prev) => [...prev, { id, src, x, y, startSize, endSize, duration }]);

    // Remove this spawn after its animation finishes
    setTimeout(() => {
      setSpawns((prev) => prev.filter((s) => s.id !== id));
    }, duration);
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-hover-container"
      style={{ position: 'relative'}}
      onMouseMove={handleMouseMove}
    >
      <Hero />
      {spawns.map((s) => (
        <img
          key={s.id}
          src={s.src}
          alt=""
          style={{
            position: 'absolute',
            top: s.y,
            left: s.x,
            width: `${s.endSize}vh`,
            height: `${s.endSize * 1.4}vh`,
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            animation: `spawnGrow ${s.duration}ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards`,
            '--start-size': `${s.startSize}vh`,
          }}
        />
      ))}
    </div>
  );
}

export default DisplayImages