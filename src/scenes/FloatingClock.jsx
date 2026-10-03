import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function FloatingClock({ position = [-2.8, 1.2, -1], scale = 0.9 }) {
  const clockGroup = useRef();
  const hourHand = useRef();
  const minuteHand = useRef();

  useFrame((state, delta) => {
    if (clockGroup.current) {
      clockGroup.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
      clockGroup.current.rotation.y += delta * 0.2;
      clockGroup.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (hourHand.current) {
      hourHand.current.rotation.z -= delta * 0.2;
    }
    if (minuteHand.current) {
      minuteHand.current.rotation.z -= delta * 1.2;
    }
  });

  return (
    <group ref={clockGroup} position={position} scale={scale}>
      {/* Outer Golden Ring */}
      <mesh>
        <torusGeometry args={[0.9, 0.08, 16, 32]} />
        <meshStandardMaterial color="#E5BE6E" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Top Ring Loop */}
      <mesh position={[0, 1.05, 0]}>
        <torusGeometry args={[0.18, 0.04, 12, 24]} />
        <meshStandardMaterial color="#E5BE6E" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Clock Face */}
      <mesh position={[0, 0, -0.02]}>
        <cylinderGeometry args={[0.85, 0.85, 0.06, 32]} />
        <meshStandardMaterial color="#F4E6CE" roughness={0.5} />
      </mesh>

      {/* Hour Hand */}
      <group ref={hourHand} position={[0, 0, 0.03]}>
        <mesh position={[0, 0.25, 0]}>
          <boxGeometry args={[0.04, 0.5, 0.01]} />
          <meshBasicMaterial color="#120A0D" />
        </mesh>
      </group>

      {/* Minute Hand */}
      <group ref={minuteHand} position={[0, 0, 0.04]}>
        <mesh position={[0, 0.35, 0]}>
          <boxGeometry args={[0.025, 0.7, 0.01]} />
          <meshBasicMaterial color="#C51F3A" />
        </mesh>
      </group>

      {/* Center Pin */}
      <mesh position={[0, 0, 0.05]}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial color="#E5BE6E" metalness={0.9} />
      </mesh>
    </group>
  );
}
