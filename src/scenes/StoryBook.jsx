import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function StoryBook({ position = [0, 0, 0], scale = 1, openAngle = 0.4 }) {
  const group = useRef();
  const leftCover = useRef();
  const rightCover = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
    }
  });

  return (
    <group ref={group} position={position} scale={scale} rotation={[0.3, 0, 0]}>
      {/* Book Spine */}
      <mesh position={[0, 0, -0.05]}>
        <cylinderGeometry args={[0.2, 0.2, 2.2, 16, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#A71930" roughness={0.5} />
      </mesh>

      {/* Left Cover & Pages */}
      <group ref={leftCover} position={[-0.8, 0, 0]} rotation={[0, openAngle, 0]}>
        <mesh position={[0.4, 0, 0]}>
          <boxGeometry args={[1.5, 2.1, 0.08]} />
          <meshStandardMaterial color="#120A0D" roughness={0.7} />
        </mesh>
        {/* Parchment Pages */}
        <mesh position={[0.38, 0, 0.05]}>
          <boxGeometry args={[1.4, 1.95, 0.05]} />
          <meshStandardMaterial color="#F4E6CE" roughness={0.6} />
        </mesh>
      </group>

      {/* Right Cover & Pages */}
      <group ref={rightCover} position={[0.8, 0, 0]} rotation={[0, -openAngle, 0]}>
        <mesh position={[-0.4, 0, 0]}>
          <boxGeometry args={[1.5, 2.1, 0.08]} />
          <meshStandardMaterial color="#120A0D" roughness={0.7} />
        </mesh>
        {/* Parchment Pages */}
        <mesh position={[-0.38, 0, 0.05]}>
          <boxGeometry args={[1.4, 1.95, 0.05]} />
          <meshStandardMaterial color="#F4E6CE" roughness={0.6} />
        </mesh>
      </group>

      {/* Golden Book Aura */}
      <pointLight position={[0, 0.5, 0.5]} color="#E5BE6E" intensity={1.5} distance={3} />
    </group>
  );
}
