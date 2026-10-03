import React from 'react';
import { FileText, Filter, Megaphone, Flame, Trophy, Clock } from 'lucide-react';

const TIMELINE_ICONS = {
  FileText,
  Filter,
  Megaphone,
  Flame,
  Trophy,
  Clock
};

export function TimelineItem({ item, index, isLast = false }) {
  const IconComponent = TIMELINE_ICONS[item.icon] || Clock;

  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-stretch gap-6 md:gap-12 group">
      {/* Date & Time Column (Left on desktop) */}
      <div className="w-full md:w-1/3 md:text-right flex flex-col justify-center">
        <span className="text-xs font-mono font-bold text-[#E5BE6E] uppercase tracking-widest block">
          {item.phase}
        </span>
        <h4 className="text-xl sm:text-2xl font-display font-black text-[#FAF3E8] mt-1">
          {item.date}
        </h4>
        <span className="text-xs font-mono text-[#E8D5B5]/60 mt-0.5">
          {item.time}
        </span>
      </div>

      {/* Central Illuminated Node & Rabbit Marker */}
      <div className="relative flex flex-col items-center">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 z-10 ${
          item.highlight
            ? 'bg-[#C51F3A] border-[#E5BE6E] text-white shadow-crimson-sm scale-110'
            : 'bg-[#1A0B10] border-white/20 text-[#E5BE6E]'
        }`}>
          <IconComponent className="w-5 h-5" />
        </div>

        {/* Connecting Vertical Line */}
        {!isLast && (
          <div className="w-[2px] flex-grow bg-gradient-to-b from-[#C51F3A] via-[#E5BE6E]/40 to-white/10 my-2 min-h-[60px]" />
        )}
      </div>

      {/* Content Card (Right on desktop) */}
      <div className="w-full md:w-2/3 pb-12">
        <div className="p-6 rounded-2xl glass-panel border border-white/10 group-hover:border-[#C51F3A]/60 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#C51F3A]/20 border border-[#C51F3A]/40 text-[#FAF3E8]">
              STEP {item.step}
            </span>
            <span className="text-[11px] font-mono text-[#E5BE6E] uppercase tracking-widest font-bold">
              {item.badge}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-display font-bold text-[#FAF3E8] mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-[#E8D5B5]/80 font-sans leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
