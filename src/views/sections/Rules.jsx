import React from 'react';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { eventModel } from '../../models/eventModel.js';
import { Scroll, ShieldAlert } from 'lucide-react';

export function Rules() {
  const rules = eventModel.getRules();

  return (
    <section id="rules" className="relative py-24 sm:py-32 bg-[#080608] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#C51F3A]/10 blur-[130px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ROYAL EDICTS"
          title="RULES OF WONDERLAND"
          subtitle="The binding covenants governing all code, conduct, and competition across the 12-hour offline sprint."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((item) => (
            <div
              key={item.id}
              className="group relative p-7 rounded-3xl glass-panel border border-white/10 hover:border-[#C51F3A]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg"
            >
              {/* Decorative Wax Seal Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-[#C51F3A]/20 text-[#E5BE6E] border border-[#C51F3A]/40">
                  {item.seal}
                </span>
                <span className="font-serif text-sm text-[#E5BE6E]/40 group-hover:text-[#E5BE6E] transition-colors">
                  RULE #0{item.id}
                </span>
              </div>

              <div>
                <h4 className="text-lg font-display font-bold text-[#FAF3E8] group-hover:text-white transition-colors mb-2">
                  {item.rule}
                </h4>
                <p className="text-xs sm:text-sm text-[#E8D5B5]/75 font-sans leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#E8D5B5]/40">
                <span>STRICTLY ENFORCED</span>
                <span className="text-[#C51F3A]">♠</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
