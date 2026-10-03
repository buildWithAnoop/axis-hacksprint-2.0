import React, { useRef } from 'react';
import { Calendar, MapPin, Building, Users, Code, Ticket, GraduationCap, Sparkles } from 'lucide-react';
import { interactionController } from '../../controllers/interactionController.js';

const ICON_MAP = {
  Calendar,
  MapPin,
  Building,
  Users,
  Code,
  Ticket,
  GraduationCap,
  Sparkles
};

export function InfoCard({ label, value, icon = "Sparkles", highlight = false, className = "" }) {
  const cardRef = useRef(null);
  const IconComponent = ICON_MAP[icon] || Sparkles;

  const handleMouseMove = (e) => {
    const tilt = interactionController.get3DTiltStyle(e, cardRef.current, 8);
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
      className={`relative p-6 rounded-2xl transition-all duration-300 glass-panel ${
        highlight
          ? 'border-[#C51F3A]/60 bg-gradient-to-br from-[#1A0B10] to-[#240E17] shadow-crimson-sm'
          : 'border-white/10 hover:border-[#E5BE6E]/40'
      } ${className}`}
    >
      {/* Decorative Corner Trim */}
      <div className="absolute top-2 right-2 text-[10px] text-[#E5BE6E]/40 font-mono">✦</div>
      
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-xl ${highlight ? 'bg-[#C51F3A]/20 text-[#E63956]' : 'bg-white/5 text-[#E5BE6E]'}`}>
          <IconComponent className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs font-mono tracking-widest text-[#E8D5B5]/60 uppercase block">
            {label}
          </span>
          <p className="text-lg sm:text-xl font-display font-bold text-[#FAF3E8] mt-1">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
