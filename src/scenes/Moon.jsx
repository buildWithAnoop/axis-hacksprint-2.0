import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function Moon({ position = [0, 4.5, -8], size = 3.2 }) {
  const moonRef = useRef();
  const glowRef = useRef();

  useFrame((state, delta) => {
    if (moonRef.current) {
      moonRef.current.rotation.y += delta * 0.05;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.03);
    }
  });

  return (
    <group position={position}>
      {/* Core Moon Sphere */}
      <mesh ref={moonRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color="#FAF3E8"
          emissive="#C51F3A"
          emissiveIntensity={0.35}
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* Atmospheric Glow Ring */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[size * 1.15, 24, 24]} />
        <meshBasicMaterial
          color="#C51F3A"
          transparent
          opacity={0.18}
          wireframe={false}
        />
      </mesh>

      {/* Point Light from Moon */}
      <pointLight color="#FAF0DE" intensity={2.5} distance={25} decay={2} />
      <pointLight color="#C51F3A" intensity={3.5} distance={18} decay={2} />
    </group>
  );
}
