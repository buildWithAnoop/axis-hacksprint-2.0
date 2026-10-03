import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function Rabbit({ position = [2.2, -1.2, 0], scale = 0.85, mouseReactive = true }) {
  const group = useRef();
  const headRef = useRef();
  const watchRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      // Gentle breathing / hopping motion
      group.current.position.y = position[1] + Math.sin(t * 3) * 0.08;
      
      if (mouseReactive) {
        // Subtle tilt towards mouse
        const targetRotY = (state.pointer.x * 0.3) - 0.2;
        group.current.rotation.y += (targetRotY - group.current.rotation.y) * 0.08;
      }
    }

    if (watchRef.current) {
      watchRef.current.rotation.z += delta * 1.5;
    }
  });

  return (
    <group ref={group} position={position} scale={scale}>
      {/* Body */}
      <mesh position={[0, 0.6, 0]}>
        <capsuleGeometry args={[0.45, 0.7, 16, 16]} />
        <meshStandardMaterial color="#FAF3E8" roughness={0.6} metalness={0.05} />
      </mesh>

      {/* Head */}
      <group ref={headRef} position={[0, 1.4, 0.1]}>
        <mesh>
          <sphereGeometry args={[0.38, 16, 16]} />
          <meshStandardMaterial color="#FAF3E8" roughness={0.5} />
        </mesh>

        {/* Ears */}
        <mesh position={[-0.18, 0.6, -0.05]} rotation={[0.1, 0, -0.15]}>
          <capsuleGeometry args={[0.08, 0.6, 8, 8]} />
          <meshStandardMaterial color="#FAF3E8" roughness={0.6} />
        </mesh>
        <mesh position={[-0.18, 0.6, -0.02]} rotation={[0.1, 0, -0.15]} scale={[0.6, 0.8, 0.5]}>
          <capsuleGeometry args={[0.08, 0.6, 8, 8]} />
          <meshStandardMaterial color="#E63956" roughness={0.8} />
        </mesh>

        <mesh position={[0.18, 0.6, -0.05]} rotation={[0.1, 0, 0.15]}>
          <capsuleGeometry args={[0.08, 0.6, 8, 8]} />
          <meshStandardMaterial color="#FAF3E8" roughness={0.6} />
        </mesh>
        <mesh position={[0.18, 0.6, -0.02]} rotation={[0.1, 0, 0.15]} scale={[0.6, 0.8, 0.5]}>
          <capsuleGeometry args={[0.08, 0.6, 8, 8]} />
          <meshStandardMaterial color="#E63956" roughness={0.8} />
        </mesh>

        {/* Eyes (Glowing Ruby) */}
        <mesh position={[-0.16, 0.08, 0.32]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#C51F3A" emissive="#C51F3A" emissiveIntensity={1} />
        </mesh>
        <mesh position={[0.16, 0.08, 0.32]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#C51F3A" emissive="#C51F3A" emissiveIntensity={1} />
        </mesh>

        {/* Nose */}
        <mesh position={[0, 0, 0.38]}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial color="#E63956" />
        </mesh>
      </group>

      {/* Royal Waistcoat */}
      <mesh position={[0, 0.62, 0.05]}>
        <capsuleGeometry args={[0.47, 0.5, 12, 12]} />
        <meshStandardMaterial color="#A71930" roughness={0.4} />
      </mesh>

      {/* Pocket Watch */}
      <group position={[0.45, 0.5, 0.25]} ref={watchRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.16, 0.16, 0.05, 16]} />
          <meshStandardMaterial color="#E5BE6E" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.03]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.02, 16]} />
          <meshBasicMaterial color="#FAF3E8" />
        </mesh>
      </group>

      {/* Subtle Glow Light */}
      <pointLight position={[0, 1.2, 0.5]} color="#FAF3E8" intensity={0.8} distance={3} />
    </group>
  );
}
