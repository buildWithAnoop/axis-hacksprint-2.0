import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

export function ChessBoard({ position = [0, -1.5, 0], scale = 1 }) {
  const boardRef = useRef();

  useFrame((state) => {
    if (boardRef.current) {
      boardRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.05;
    }
  });

  const tiles = useMemo(() => {
    const list = [];
    for (let x = -3.5; x <= 3.5; x++) {
      for (let z = -3.5; z <= 3.5; z++) {
        const isBlack = (Math.abs(x) + Math.abs(z)) % 2 === 0;
        list.push({ x, z, isBlack });
      }
    }
    return list;
  }, []);

  return (
    <group ref={boardRef} position={position} scale={scale} rotation={[-0.35, 0.2, 0]}>
      {/* Board Base Frame */}
      <mesh position={[0, -0.15, 0]}>
        <boxGeometry args={[8.6, 0.25, 8.6]} />
        <meshStandardMaterial color="#120A0D" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Gold Border Trim */}
      <mesh position={[0, -0.01, 0]}>
        <boxGeometry args={[8.2, 0.05, 8.2]} />
        <meshStandardMaterial color="#E5BE6E" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Tiles */}
      {tiles.map((tile, i) => (
        <mesh key={i} position={[tile.x, 0.02, tile.z]}>
          <boxGeometry args={[0.95, 0.04, 0.95]} />
          <meshStandardMaterial
            color={tile.isBlack ? "#080608" : "#A71930"}
            metalness={0.7}
            roughness={0.25}
            emissive={tile.isBlack ? "#000000" : "#C51F3A"}
            emissiveIntensity={tile.isBlack ? 0 : 0.15}
          />
        </mesh>
      ))}

      {/* Chess Piece: King (Gold) */}
      <group position={[0.5, 0.6, 0.5]} scale={0.75}>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 0.4, 16]} />
          <meshStandardMaterial color="#E5BE6E" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.8, 0]}>
          <cylinderGeometry args={[0.2, 0.28, 0.8, 16]} />
          <meshStandardMaterial color="#E5BE6E" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0, 1.35, 0]}>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshStandardMaterial color="#E5BE6E" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Cross on top */}
        <mesh position={[0, 1.65, 0]}>
          <boxGeometry args={[0.08, 0.25, 0.08]} />
          <meshStandardMaterial color="#E5BE6E" metalness={0.9} />
        </mesh>
        <mesh position={[0, 1.68, 0]}>
          <boxGeometry args={[0.22, 0.08, 0.08]} />
          <meshStandardMaterial color="#E5BE6E" metalness={0.9} />
        </mesh>
      </group>

      {/* Chess Piece: Queen (Ruby Glow) */}
      <group position={[-0.5, 0.6, -0.5]} scale={0.7}>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 0.4, 16]} />
          <meshStandardMaterial color="#C51F3A" emissive="#C51F3A" emissiveIntensity={0.6} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.8, 0]}>
          <cylinderGeometry args={[0.18, 0.26, 0.8, 16]} />
          <meshStandardMaterial color="#C51F3A" emissive="#C51F3A" emissiveIntensity={0.6} roughness={0.3} />
        </mesh>
        <mesh position={[0, 1.3, 0]}>
          <coneGeometry args={[0.26, 0.4, 8]} />
          <meshStandardMaterial color="#C51F3A" emissive="#C51F3A" emissiveIntensity={0.8} />
        </mesh>
        <pointLight position={[0, 1.4, 0]} color="#E63956" intensity={1.5} distance={2.5} />
      </group>

      {/* Chess Piece: Knight (Obsidian) */}
      <group position={[1.5, 0.5, -1.5]} scale={0.65}>
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.25, 0.35, 0.3, 16]} />
          <meshStandardMaterial color="#120A0D" roughness={0.4} metalness={0.8} />
        </mesh>
        <mesh position={[0, 0.65, 0]}>
          <boxGeometry args={[0.3, 0.6, 0.4]} />
          <meshStandardMaterial color="#120A0D" roughness={0.4} metalness={0.8} />
        </mesh>
      </group>
    </group>
  );
}
