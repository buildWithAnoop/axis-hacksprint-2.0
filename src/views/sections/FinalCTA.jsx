import React from 'react';
import { Sparkles, Calendar, MapPin } from 'lucide-react';
import { Button } from '../components/Button.jsx';
import { eventConfig } from '../../config/eventConfig.js';

export function FinalCTA() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#080608] overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B10] via-[#120A0D] to-[#080608]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C51F3A]/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Decorative Card Suites in Corners */}
      <div className="absolute top-12 left-12 text-2xl font-serif text-[#E5BE6E]/20">♠ ♦</div>
      <div className="absolute bottom-12 right-12 text-2xl font-serif text-[#E5BE6E]/20">♣ ♥</div>

      {/* Floating White Rabbit Silhouette / Emoticon */}
      <div className="absolute top-16 right-1/4 text-4xl text-[#FAF3E8]/30 animate-gentle-float">
        🐇
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A0B10] border border-[#C51F3A]/50 text-[#E5BE6E] text-xs font-mono uppercase tracking-[0.3em] mb-6 shadow-crimson-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C51F3A]" />
          <span>THE FINAL SUMMONS</span>
          <Sparkles className="w-3.5 h-3.5 text-[#C51F3A]" />
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-[#FAF3E8] uppercase leading-tight mb-4">
          READY TO ENTER <span className="text-gold-gradient">WONDERLAND?</span>
        </h2>

        <p className="text-xl sm:text-2xl font-serif text-[#E8D5B5]/90 italic max-w-2xl mx-auto mb-6">
          {eventConfig.tagline}
        </p>

        <p className="text-sm sm:text-base text-[#E8D5B5]/75 font-sans max-w-xl mx-auto mb-8">
          Form your coven of 2–4 developers, synthesize groundbreaking software, and claim your place among the sovereign innovators of Axis HackSprint 2.0.
        </p>

        {/* Date & Location Pill */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-3 rounded-2xl glass-panel border border-white/10 text-xs font-mono text-[#FAF3E8] mb-10">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#E5BE6E]" />
            {eventConfig.eventDateFormatted}
          </span>
          <span className="text-[#C51F3A]">✦</span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C51F3A]" />
            {eventConfig.locationString}
          </span>
        </div>

        {/* Big Registration Button */}
        <div>
          <Button isRegistration variant="primary" size="lg" showArrow className="text-base px-10 py-5 shadow-crimson-lg">
            REGISTER FOR AXIS HACKSPRINT 2.0
          </Button>
        </div>
      </div>
    </section>
  );
}
