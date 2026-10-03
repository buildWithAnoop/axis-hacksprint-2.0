import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Moon } from './Moon.jsx';
import { Castle } from './Castle.jsx';
import { Rabbit } from './Rabbit.jsx';
import { FloatingCards } from './FloatingCards.jsx';
import { FloatingClock } from './FloatingClock.jsx';
import { Mushrooms } from './Mushrooms.jsx';
import { Lanterns } from './Lanterns.jsx';
import { Particles } from './Particles.jsx';
import { useIsMobile, useIsTablet } from '../hooks/useMediaQuery.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';

function CameraRig({ isReducedMotion }) {
  useFrame((state) => {
    if (!isReducedMotion) {
      // Subtle camera parallax from mouse
      const targetX = (state.pointer.x * 0.5);
      const targetY = (state.pointer.y * 0.3) + 0.5;
      state.camera.position.x += (targetX - state.camera.position.x) * 0.05;
      state.camera.position.y += (targetY - state.camera.position.y) * 0.05;
      state.camera.lookAt(0, 0, 0);
    }
  });
  return null;
}

export function WonderlandScene({ className = "" }) {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isReducedMotion = useReducedMotion();

  const particleCount = isMobile ? 60 : isTablet ? 150 : 350;
  const cardsCount = isMobile ? 4 : isTablet ? 6 : 8;

  return (
    <div className={`relative w-full h-full pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0.5, 6.5], fov: isMobile ? 55 : 45 }}
        dpr={isMobile ? [1, 1] : [1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <CameraRig isReducedMotion={isReducedMotion} />
          
          {/* Ambient & Directional Lighting */}
          <ambientLight intensity={0.4} color="#1A0B10" />
          <directionalLight position={[5, 8, 5]} intensity={1.2} color="#FAF3E8" />
          <directionalLight position={[-5, 3, -2]} intensity={0.8} color="#C51F3A" />
          
          {/* 3D Visual Elements */}
          <Moon position={[0, isMobile ? 3.5 : 4, -9]} size={isMobile ? 2.5 : 3.2} />
          <Castle position={[0, isMobile ? -2.2 : -1.8, -8]} scale={isMobile ? 0.75 : 1} />
          <Rabbit position={[isMobile ? 1.2 : 2.4, isMobile ? -1.8 : -1.2, 0.5]} scale={isMobile ? 0.65 : 0.85} />
          <FloatingClock position={[isMobile ? -1.8 : -3.2, isMobile ? 1.5 : 1.2, -1]} scale={isMobile ? 0.65 : 0.9} />
          <FloatingCards count={cardsCount} />
          <Mushrooms position={[-2.4, -2, 1]} scale={isMobile ? 0.55 : 0.8} />
          <Lanterns position={[3.2, 2, -2]} scale={isMobile ? 0.55 : 0.75} />
          <Particles count={particleCount} />
        </Suspense>
      </Canvas>
    </div>
  );
}
