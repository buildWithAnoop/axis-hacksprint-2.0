import React, { useRef } from 'react';
import { Brain, ShieldAlert, Blocks, Sprout, Activity, Gamepad2, Sparkles } from 'lucide-react';
import { interactionController } from '../../controllers/interactionController.js';

const TRACK_ICONS = {
  Brain,
  ShieldAlert,
  Blocks,
  Sprout,
  Activity,
  Gamepad2,
  Sparkles
};

export function TrackCard({ track }) {
  const cardRef = useRef(null);
  const IconComponent = TRACK_ICONS[track.icon] || Sparkles;

  const handleMouseMove = (e) => {
    const tilt = interactionController.get3DTiltStyle(e, cardRef.current, 10);
    Object.assign(cardRef.current.style, tilt);
  };

  const handleMouseLeave = () => {
    const reset = interactionController.resetTiltStyle();
    Object.assign(cardRef.current.style, reset);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative p-8 rounded-2xl glass-panel border border-white/10 hover:border-[#C51F3A]/70 transition-all duration-300 flex flex-col justify-between overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 80% 20%, rgba(26, 11, 16, 0.85) 0%, rgba(8, 6, 8, 0.95) 100%)'
      }}
    >
      {/* Background Ambient Glow */}
      <div
        className="absolute -right-12 -top-12 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: track.color || '#C51F3A' }}
      />

      {/* Top Bar with Icon & Suite */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/15 group-hover:scale-110 transition-transform duration-300 shadow-md"
          style={{ backgroundColor: `${track.color}20`, color: track.color }}
        >
          <IconComponent className="w-7 h-7" />
        </div>
        <span className="font-display text-2xl text-[#FAF3E8]/30 group-hover:text-[#E5BE6E] transition-colors duration-300">
          {track.suite}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <span className="text-[11px] font-mono tracking-widest uppercase text-[#E5BE6E] block mb-1">
          {track.tagline}
        </span>
        <h3 className="text-xl sm:text-2xl font-display font-bold text-[#FAF3E8] group-hover:text-white transition-colors duration-200 mb-3">
          {track.title}
        </h3>
        <p className="text-sm text-[#E8D5B5]/75 leading-relaxed font-sans">
          {track.description}
        </p>
      </div>

      {/* Bottom Border Glow Line */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#E8D5B5]/50 group-hover:text-[#FAF3E8] transition-colors">
        <span>TRACK {track.id.toUpperCase()}</span>
        <span className="text-[#C51F3A] group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  );
}
