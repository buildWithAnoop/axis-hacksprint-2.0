import React, { useRef } from 'react';
import { interactionController } from '../../controllers/interactionController.js';

export function TeamCard({ member }) {
  const cardRef = useRef(null);

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
      className="group relative rounded-2xl glass-panel border border-white/10 hover:border-[#C51F3A]/60 transition-all duration-300 overflow-hidden flex flex-col items-center text-center p-5 shadow-lg"
    >
      {/* Corner Suite Indicator */}
      <div className="absolute top-3 right-3 text-sm font-display text-[#E5BE6E]/60 group-hover:text-[#E5BE6E] transition-colors">
        {member.suite || '♠'}
      </div>

      {/* Image Container with Elegant Mask */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-br from-[#E5BE6E]/40 to-[#C51F3A]/40 mb-4 group-hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full rounded-full overflow-hidden bg-[#1A0B10]">
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* Details */}
      <h4 className="text-lg font-display font-bold text-[#FAF3E8] group-hover:text-white transition-colors">
        {member.name}
      </h4>
      <p className="text-xs font-mono uppercase tracking-wider text-[#E5BE6E] mt-1">
        {member.designation}
      </p>
    </div>
  );
}
