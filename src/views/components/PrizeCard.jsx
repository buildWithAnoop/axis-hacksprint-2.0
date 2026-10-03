import React, { useRef } from 'react';
import { Trophy, CheckCircle2 } from 'lucide-react';
import { interactionController } from '../../controllers/interactionController.js';

export function PrizeCard({ prize }) {
  const cardRef = useRef(null);
  const isWinner = prize.rank === "1ST";

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
      className={`relative p-8 rounded-3xl glass-panel transition-all duration-300 flex flex-col justify-between ${
        isWinner
          ? 'border-2 border-[#E5BE6E] bg-gradient-to-b from-[#240E17] via-[#1A0B10] to-[#080608] shadow-gold-lg md:-translate-y-4'
          : 'border border-white/10 hover:border-[#C51F3A]/60 bg-[#120A0D]/90'
      }`}
    >
      {/* Top Floating Badge */}
      <div className="flex items-center justify-between mb-6">
        <span className={`px-3 py-1 rounded-full text-xs font-mono font-black tracking-widest uppercase border ${prize.badgeColor}`}>
          {prize.rank} PLACE
        </span>
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
            isWinner ? 'bg-[#E5BE6E]/20 text-[#E5BE6E]' : 'bg-white/5 text-[#FAF3E8]'
          }`}
        >
          <Trophy className="w-6 h-6" />
        </div>
      </div>

      {/* Prize Amount & Title */}
      <div className="mb-6">
        <h4 className="text-sm font-mono tracking-widest text-[#E8D5B5]/70 uppercase">
          {prize.place}
        </h4>
        <div className={`text-4xl sm:text-5xl font-display font-black tracking-tight my-2 ${
          isWinner ? 'text-gold-gradient' : 'text-[#FAF3E8]'
        }`}>
          {prize.amount}
        </div>
        <p className="text-xs text-[#E8D5B5]/80 font-serif leading-relaxed">
          {prize.description}
        </p>
      </div>

      {/* Perks List */}
      <div className="pt-6 border-t border-white/10 space-y-2.5">
        <span className="text-[11px] font-mono tracking-wider text-[#E5BE6E] uppercase block mb-2">
          Reward Entitlements:
        </span>
        {prize.perks.map((perk, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-[#FAF3E8]/90">
            <CheckCircle2 className={`w-3.5 h-3.5 ${isWinner ? 'text-[#E5BE6E]' : 'text-[#C51F3A]'}`} />
            <span>{perk}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
