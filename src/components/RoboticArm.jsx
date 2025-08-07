import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Edges } from '@react-three/drei';
import { useEffect, useState } from 'react';

export default function RoboticArm({ scrollContainerRef }) {
  const shoulderRef = useRef()
  const elbowRef = useRef()
  const wristRef = useRef()
  const armRef = useRef()
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrollTop(container.scrollTop);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [scrollContainerRef]);

  useFrame(() => {
    if (armRef.current) {
      armRef.current.rotation.y = scrollTop * 0.002;
    }
  });

  return (
    <group ref={armRef} position={[0, -0.5, 0]}>
      {/* Base */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.4, 32]} />
        <meshStandardMaterial color="black"/>
        <Edges scale={1.01} threshold={15} color="white" />
      </mesh>

      {/* Objects (cubes) */}
      <group position={[0, -0.5, 0]}>
        <mesh position={[1, 0, 0]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="skyblue" />
          <Edges scale={1.01} threshold={15} color="black" />
        </mesh>
        <mesh position={[0.8, 0, -1]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="tomato" />
          <Edges scale={1.01} threshold={15} color="black" />
        </mesh>
        <mesh position={[0.85, 0.3, -1]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="wheat" />
          <Edges scale={1.01} threshold={15} color="black" />
        </mesh>
      </group>

      {/* Shoulder-Base connector */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.5, 32]} />
        <meshStandardMaterial color="white" />
        <Edges scale={1.01} threshold={15} color="black" />
      </mesh>

      {/* Shoulder + Upper Arm */}
      <group ref={shoulderRef} position={[0, 0.1, 0]} rotation={[Math.PI / 5, 0, 0]}>
        {/*Shoulder Joint */}
        <mesh position={[0, 0.1, 0]}>
            <sphereGeometry args={[0.3, 16, 16]}/>
            <meshStandardMaterial color="black" />
            <Edges scale={1.01} threshold={15} color="black" />
        </mesh>

        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[0.2, 1.5, 0.3]} />
          <meshStandardMaterial color="white" />
          <Edges scale={1.01} threshold={15} color="black" />
        </mesh>

        {/*Elbow Joint */}
        <mesh position={[0, 1.2, 0]}>
            <sphereGeometry args={[0.23, 16, 16]}/>
            <meshStandardMaterial color="black" />
            <Edges scale={1.01} threshold={15} color="black" />
        </mesh>

        {/* Elbow + Forearm */}
        <group ref={elbowRef} position={[0, 1.2, 0]} rotation={[Math.PI / -2, 0, 19]}>
          <mesh position={[0, 0.6, 0]}>
            <boxGeometry args={[0.25, 1, 0.25]} />
            <meshStandardMaterial color="white" />
            <Edges scale={1.01} threshold={15} color="black" />
          </mesh>

          {/*Wrist Joint */}
            <mesh position={[0, 1.15, 0]}>
                <sphereGeometry args={[0.15, 16, 16]}/>
                <meshStandardMaterial color="black" />
                <Edges scale={1.01} threshold={15} color="black" />
            </mesh>

          {/* Wrist */}
          <group ref={wristRef} position={[0, 1.2, 0]} rotation={[Math.PI / -3, 0, 19]}>
            <mesh position={[0, 0.2, 0]}>
              <boxGeometry args={[0.2, 0.4, 0.2]} />
              <meshStandardMaterial color="white" />
              <Edges scale={1.01} threshold={15} color="black" />
            </mesh>

            {/* Gripper (2 fingers) */}
            <mesh position={[0.12, 0.5, 0]}>
              <boxGeometry args={[0.05, 0.3, 0.05]} />
              <meshStandardMaterial color="black" />
              <Edges scale={1.01} threshold={15} color="white" />
            </mesh>
            <mesh position={[-0.12, 0.5, 0]}>
              <boxGeometry args={[0.05, 0.3, 0.05]} />
              <meshStandardMaterial color="black" />
              <Edges scale={1.01} threshold={15} color="white" />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}
