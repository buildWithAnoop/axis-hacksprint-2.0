import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { ChessBoard } from '../../scenes/ChessBoard.jsx';
import { useIsMobile } from '../../hooks/useMediaQuery.js';

export function ChessSection() {
  const isMobile = useIsMobile();

  const strategies = [
    { title: "Strategic Positioning", desc: "Formulate resilient software architecture before committing the first line of code.", icon: "♞" },
    { title: "Tactical Execution", desc: "Move swiftly through sprint checkpoints with clean commits and iterative testing.", icon: "♜" },
    { title: "Checkmate Finale", desc: "Deliver an undeniable live demonstration that captures the jury's imagination.", icon: "♚" }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#080608] via-[#120A0D] to-[#080608] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="STRATEGIC METAPHOR"
          title="MAKE YOUR MOVE"
          subtitle="Like grandmasters on the checkered board, every architectural decision, commit, and optimization defines your ascension in the sprint arena."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* 3D Chessboard Canvas */}
          <div className="lg:col-span-6 h-80 sm:h-[420px] rounded-3xl overflow-hidden glass-panel border border-[#C51F3A]/30 shadow-crimson-sm flex items-center justify-center relative">
            <Canvas
              camera={{ position: [0, 4, 7], fov: 45 }}
              dpr={isMobile ? [1, 1] : [1, 2]}
              gl={{ alpha: true, antialias: true }}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[4, 8, 4]} intensity={1.8} color="#FAF3E8" />
                <directionalLight position={[-4, 2, -3]} intensity={1.2} color="#C51F3A" />
                <ChessBoard position={[0, -0.6, 0]} scale={isMobile ? 0.75 : 0.95} />
              </Suspense>
            </Canvas>
            <div className="absolute bottom-3 text-[10px] font-mono tracking-widest text-[#E5BE6E]/60 uppercase">
              ✦ 3D INTERACTIVE CHESS ARENA ✦
            </div>
          </div>

          {/* Strategic Metaphors */}
          <div className="lg:col-span-6 space-y-6">
            {strategies.map((strat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-[#E5BE6E]/50 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-[#E5BE6E] text-2xl flex items-center justify-center shrink-0">
                  {strat.icon}
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-[#FAF3E8]">
                    {strat.title}
                  </h4>
                  <p className="text-sm text-[#E8D5B5]/80 font-sans mt-1 leading-relaxed">
                    {strat.desc}
                  </p>
                </div>
              </div>
            ))}
            <div className="p-4 rounded-xl bg-[#1A0B10]/80 border border-white/5 text-xs text-[#E8D5B5]/60 font-mono">
              Note: Chess principles illustrate our engineering philosophy and tournament spirit.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
