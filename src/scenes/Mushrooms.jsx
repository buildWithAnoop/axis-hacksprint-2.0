import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function Mushrooms({ position = [-2.2, -1.8, 1], scale = 0.8 }) {
  const group = useRef();

  useFrame((state) => {
    if (group.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.04;
      group.current.scale.set(scale * pulse, scale, scale * pulse);
    }
  });

  return (
    <group ref={group} position={position} scale={scale}>
      {/* Big Mushroom */}
      <group position={[0, 0, 0]}>
        {/* Stem */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.08, 0.14, 0.8, 12]} />
          <meshStandardMaterial color="#FAF3E8" roughness={0.7} />
        </mesh>
        {/* Cap */}
        <mesh position={[0, 0.85, 0]}>
          <sphereGeometry args={[0.4, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial
            color="#C51F3A"
            emissive="#A71930"
            emissiveIntensity={0.8}
            roughness={0.3}
          />
        </mesh>
        {/* Glow Light */}
        <pointLight position={[0, 0.9, 0]} color="#E63956" intensity={1} distance={2.5} />
      </group>

      {/* Small Baby Mushroom */}
      <group position={[0.4, 0, 0.2]} scale={0.55} rotation={[0, 0, 0.2]}>
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.06, 0.1, 0.6, 12]} />
          <meshStandardMaterial color="#FAF3E8" />
        </mesh>
        <mesh position={[0, 0.65, 0]}>
          <sphereGeometry args={[0.3, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial
            color="#E5BE6E"
            emissive="#C9A45C"
            emissiveIntensity={0.6}
          />
        </mesh>
      </group>
    </group>
  );
}
