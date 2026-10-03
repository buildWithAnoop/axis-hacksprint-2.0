import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

export function FloatingCards({ count = 8 }) {
  const cardsRef = useRef([]);

  const cardsData = useMemo(() => {
    const suites = ['♠', '♥', '♦', '♣', 'A', 'K', 'Q', 'J'];
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 6 + 1,
        (Math.random() - 0.5) * 6 - 2
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ],
      speed: 0.2 + Math.random() * 0.4,
      rotSpeed: 0.1 + Math.random() * 0.3,
      suite: suites[i % suites.length],
      isRed: i % 2 === 0
    }));
  }, [count]);

  useFrame((state, delta) => {
    cardsRef.current.forEach((card, i) => {
      if (card) {
        const data = cardsData[i];
        card.rotation.x += delta * data.rotSpeed * 0.5;
        card.rotation.y += delta * data.rotSpeed;
        card.position.y += Math.sin(state.clock.elapsedTime * data.speed + i) * 0.005;
      }
    });
  });

  return (
    <group>
      {cardsData.map((data, i) => (
        <group
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          position={data.position}
          rotation={data.rotation}
          scale={[0.7, 1, 0.02]}
        >
          {/* Card Base */}
          <mesh>
            <boxGeometry args={[1, 1.4, 0.04]} />
            <meshStandardMaterial
              color="#F4E6CE"
              roughness={0.4}
              metalness={0.1}
            />
          </mesh>

          {/* Border Accent */}
          <mesh position={[0, 0, 0.025]}>
            <planeGeometry args={[0.9, 1.3]} />
            <meshBasicMaterial color={data.isRed ? "#C51F3A" : "#120A0D"} />
          </mesh>

          {/* Inner Face */}
          <mesh position={[0, 0, 0.03]}>
            <planeGeometry args={[0.8, 1.2]} />
            <meshBasicMaterial color="#FAF3E8" />
          </mesh>
        </group>
      ))}
    </group>
  );
}
