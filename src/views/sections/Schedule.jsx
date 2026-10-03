import React from 'react';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { eventModel } from '../../models/eventModel.js';
import { CalendarClock, Flame } from 'lucide-react';

export function Schedule() {
  const data = eventModel.getScheduleData();

  return (
    <section className="relative py-20 bg-[#080608] border-b border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <SectionHeading
          badge="SPRINT TIMELINE"
          title={data.title}
          subtitle={data.subtitle}
        />

        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-[#E5BE6E]/30 bg-[#1A0B10]/80 shadow-gold-sm">
          <div className="w-16 h-16 rounded-2xl bg-[#E5BE6E]/20 border border-[#E5BE6E]/40 text-[#E5BE6E] flex items-center justify-center mx-auto mb-4">
            <CalendarClock className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-display font-bold text-[#FAF3E8] mb-2">
            {data.statusText}
          </h3>
          <p className="text-sm text-[#E8D5B5]/80 font-serif max-w-lg mx-auto leading-relaxed">
            {data.description}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#E63956]">
            <Flame className="w-3.5 h-3.5" />
            <span>12-Hour Continuous Live Coding Tournament</span>
          </div>
        </div>
      </div>
    </section>
  );
}
