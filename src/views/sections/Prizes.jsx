import React from 'react';
import { Award, FileCheck, Coffee, Gift } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { PrizeCard } from '../components/PrizeCard.jsx';
import { prizeModel } from '../../models/prizeModel.js';

const PERK_ICONS = {
  Award,
  FileCheck,
  Coffee,
  Gift
};

export function Prizes() {
  const pool = prizeModel.getPrizePool();
  const prizes = prizeModel.getPrizes();
  const perks = prizeModel.getAdditionalPerks();

  // Sort: 1st Runner Up (Left), Winner (Center/Prominent), 2nd Runner Up (Right)
  const orderedPrizes = [
    prizes.find(p => p.rank === "2ND"),
    prizes.find(p => p.rank === "1ST"),
    prizes.find(p => p.rank === "3RD"),
  ].filter(Boolean);

  return (
    <section id="prizes" className="relative py-24 sm:py-32 bg-[#080608] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E5BE6E]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ROYAL BOUNTY"
          title="THE ROYAL TREASURE"
          subtitle={pool.subtitle}
        />

        {/* Big Grand Prize Pool Banner */}
        <div className="text-center mb-16">
          <div className="inline-block p-8 sm:p-10 rounded-3xl glass-panel border-2 border-[#E5BE6E]/50 shadow-gold-lg bg-gradient-to-b from-[#240E17] to-[#080608] max-w-2xl w-full">
            <span className="text-xs sm:text-sm font-mono tracking-[0.3em] text-[#E5BE6E] uppercase font-bold block mb-2">
              {pool.totalLabel}
            </span>
            <div className="text-5xl sm:text-7xl md:text-8xl font-display font-black text-gold-gradient tracking-tight">
              {pool.total}
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#E8D5B5]/60 mt-3">
              CASH PRIZES · TROPHIES · MERIT CITATIONS
            </p>
          </div>
        </div>

        {/* Podium Prize Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center mb-16">
          {orderedPrizes.map((prize) => (
            <PrizeCard key={prize.rank} prize={prize} />
          ))}
        </div>

        {/* Additional Perks */}
        <div className="p-8 rounded-3xl glass-panel border border-white/10 bg-[#120A0D]/60">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-[#FAF3E8] text-center mb-8">
            Exclusive Finalist Perks & Entitlements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => {
              const IconComponent = PERK_ICONS[perk.icon] || Award;
              return (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-[#C51F3A]/20 text-[#E63956] shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-[#FAF3E8]">{perk.title}</h4>
                    <p className="text-xs text-[#E8D5B5]/70 mt-1">{perk.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
