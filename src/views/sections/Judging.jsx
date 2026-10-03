import React from 'react';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { eventModel } from '../../models/eventModel.js';
import { Scale, Clock } from 'lucide-react';

export function Judging() {
  const data = eventModel.getJudgingData();

  return (
    <section className="relative py-20 bg-[#080608] border-b border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <SectionHeading
          badge="EVALUATION RUBRIC"
          title={data.title}
          subtitle={data.subtitle}
        />

        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 bg-[#120A0D]/70">
          <div className="w-16 h-16 rounded-2xl bg-[#C51F3A]/20 border border-[#C51F3A]/40 text-[#E63956] flex items-center justify-center mx-auto mb-4">
            <Scale className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-display font-bold text-[#FAF3E8] mb-2">
            {data.statusText}
          </h3>
          <p className="text-sm text-[#E8D5B5]/80 font-serif max-w-lg mx-auto leading-relaxed">
            {data.description}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#E5BE6E]">
            <Clock className="w-3.5 h-3.5" />
            <span>Rubrics will be published prior to Round 2 kickoff.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
