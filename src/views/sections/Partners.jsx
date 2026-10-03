import React from 'react';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { eventModel } from '../../models/eventModel.js';
import { Sparkles, Building2 } from 'lucide-react';

export function Partners() {
  const partnersData = eventModel.getPartnersData();

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#080608] via-[#120A0D] to-[#080608] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="COLLABORATION"
          title={partnersData.title}
          subtitle={partnersData.subtitle}
        />

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partnersData.organizations.map((org, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl glass-panel border border-white/10 hover:border-[#E5BE6E]/50 text-center flex flex-col items-center justify-between transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E5BE6E] mb-4">
                <Building2 className="w-7 h-7" />
              </div>
              <h4 className="text-lg font-display font-bold text-[#FAF3E8] mb-1">
                {org.name}
              </h4>
              <span className="text-xs font-mono uppercase tracking-widest text-[#E5BE6E]/80">
                {org.role}
              </span>
            </div>
          ))}
        </div>

        {/* Official Sponsors Status Banner */}
        <div className="max-w-2xl mx-auto p-6 rounded-2xl glass-panel border border-dashed border-[#E5BE6E]/40 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E5BE6E] mb-1">
            <Sparkles className="w-4 h-4 text-[#C51F3A]" />
            <span>PARTNERS & SPONSORS</span>
            <Sparkles className="w-4 h-4 text-[#C51F3A]" />
          </div>
          <p className="text-xl font-display font-bold text-[#FAF3E8]">
            {partnersData.statusText}
          </p>
          <p className="text-xs text-[#E8D5B5]/60 mt-1">
            Official industry sponsorships and track partners will be unveiled shortly.
          </p>
        </div>
      </div>
    </section>
  );
}
