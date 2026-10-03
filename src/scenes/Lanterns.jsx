import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function Lanterns({ position = [2.8, 1.8, -2], scale = 0.7 }) {
  const lanternRef = useRef();

  useFrame((state) => {
    if (lanternRef.current) {
      lanternRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.2) * 0.08;
      lanternRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.9) * 0.1;
    }
  });

  return (
    <group ref={lanternRef} position={position} scale={scale}>
      {/* Lantern Cap */}
      <mesh position={[0, 0.7, 0]}>
        <coneGeometry args={[0.35, 0.25, 6]} />
        <meshStandardMaterial color="#E5BE6E" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Glass Body */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.22, 0.28, 0.6, 6]} />
        <meshStandardMaterial
          color="#FAF3E8"
          emissive="#E5BE6E"
          emissiveIntensity={1.2}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Lantern Base */}
      <mesh position={[0, -0.05, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.1, 6]} />
        <meshStandardMaterial color="#E5BE6E" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Point Light from Lantern */}
      <pointLight position={[0, 0.3, 0]} color="#E5BE6E" intensity={2} distance={4} />
    </group>
  );
}
