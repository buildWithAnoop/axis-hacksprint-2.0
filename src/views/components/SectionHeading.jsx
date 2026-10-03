import React from 'react';

export function SectionHeading({
  title,
  subtitle,
  badge = null,
  alignment = 'center', // 'center', 'left'
  className = ''
}) {
  const isCenter = alignment === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A0B10]/80 border border-[#C51F3A]/40 text-[#E5BE6E] text-xs font-mono tracking-widest uppercase mb-4 shadow-crimson-sm ${isCenter ? 'mx-auto' : ''}`}>
          <span className="text-[#C51F3A]">✦</span>
          <span>{badge}</span>
          <span className="text-[#C51F3A]">✦</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight text-[#FAF3E8]">
        <span className="text-gold-gradient">{title}</span>
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#E8D5B5]/80 font-serif leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Decorative Wonderland Accent Line */}
      <div className={`flex items-center gap-3 mt-6 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C51F3A]" />
        <span className="text-xs text-[#E5BE6E] font-serif">♠ ♦ ♣ ♥</span>
        <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C51F3A]" />
      </div>
    </div>
  );
}
