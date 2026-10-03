import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Loader({ onLoaded }) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    if (onLoaded) onLoaded();
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080608] text-[#FAF3E8] px-6 transition-opacity duration-700">
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,31,58,0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* Decorative Card Suites */}
      <div className="absolute top-8 left-8 text-sm font-serif text-[#E5BE6E]/40">♠ ♦</div>
      <div className="absolute bottom-8 right-8 text-sm font-serif text-[#E5BE6E]/40">♣ ♥</div>

      {/* Central Sequence */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* White Rabbit Hop / Clock Spinner */}
        <div className="relative w-20 h-20 mb-8">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#E5BE6E]/30 animate-spin-very-slow" />
          <div className="absolute inset-2 rounded-full border border-[#C51F3A]/40 animate-pulse" />
          <div className="w-full h-full flex items-center justify-center text-2xl font-serif text-[#E5BE6E] animate-rabbit-hop">
            🐇
          </div>
        </div>

        {/* Storytelling Prompt */}
        <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#E5BE6E] mb-3">
          FOLLOW THE WHITE RABBIT
        </span>

        <h1 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-gold-gradient mb-4">
          AXIS HACKSPRINT 2.0
        </h1>

        <p className="text-xs font-mono uppercase tracking-widest text-[#E8D5B5]/60 mb-8">
          ITERATE · ACCELERATE · ELEVATE
        </p>

        {/* Progress Bar or Enter Button */}
        {!isReady ? (
          <div className="w-64 flex flex-col items-center gap-2">
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full bg-gradient-to-r from-[#C51F3A] to-[#E5BE6E] transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-mono text-[#E8D5B5]/60">
              SUMMONING REALM... {progress}%
            </span>
          </div>
        ) : (
          <button
            onClick={handleEnter}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#C51F3A] to-[#A71930] text-[#FAF3E8] border border-[#E63956]/50 shadow-crimson-lg hover:brightness-110 font-display font-bold text-sm tracking-widest uppercase transition-all duration-300 flex items-center gap-3 cursor-pointer group animate-pulse"
          >
            <span>ENTER WONDERLAND</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
}
