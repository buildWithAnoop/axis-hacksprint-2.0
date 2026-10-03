import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function Castle({ position = [0, -1.8, -10], scale = 1 }) {
  const castleGroup = useRef();

  useFrame((state) => {
    if (castleGroup.current) {
      castleGroup.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
    }
  });

  return (
    <group ref={castleGroup} position={position} scale={scale}>
      {/* Central Keep */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[3, 4, 2]} />
        <meshStandardMaterial color="#120A0D" roughness={0.9} metalness={0.2} />
      </mesh>

      {/* Main Spire */}
      <mesh position={[0, 5, 0]}>
        <coneGeometry args={[1.2, 3, 6]} />
        <meshStandardMaterial color="#1A0B10" roughness={0.7} metalness={0.3} />
      </mesh>

      {/* Left Tower */}
      <mesh position={[-2.2, 1.8, 0.2]}>
        <cylinderGeometry args={[0.7, 0.9, 3.8, 8]} />
        <meshStandardMaterial color="#140B0F" roughness={0.8} />
      </mesh>
      <mesh position={[-2.2, 4.4, 0.2]}>
        <coneGeometry args={[0.9, 2, 6]} />
        <meshStandardMaterial color="#240E17" roughness={0.7} />
      </mesh>

      {/* Right Tower */}
      <mesh position={[2.2, 1.8, 0.2]}>
        <cylinderGeometry args={[0.7, 0.9, 3.8, 8]} />
        <meshStandardMaterial color="#140B0F" roughness={0.8} />
      </mesh>
      <mesh position={[2.2, 4.4, 0.2]}>
        <coneGeometry args={[0.9, 2, 6]} />
        <meshStandardMaterial color="#240E17" roughness={0.7} />
      </mesh>

      {/* Glowing Arched Windows */}
      <mesh position={[0, 2.5, 1.05]}>
        <planeGeometry args={[0.6, 1.2]} />
        <meshBasicMaterial color="#E5BE6E" />
      </mesh>
      <mesh position={[-0.8, 1.5, 1.05]}>
        <planeGeometry args={[0.4, 0.8]} />
        <meshBasicMaterial color="#C51F3A" />
      </mesh>
      <mesh position={[0.8, 1.5, 1.05]}>
        <planeGeometry args={[0.4, 0.8]} />
        <meshBasicMaterial color="#C51F3A" />
      </mesh>
    </group>
  );
}
