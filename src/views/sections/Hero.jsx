import React, { useRef, useEffect } from 'react';
import { Calendar, MapPin, Users, Trophy, Sparkles } from 'lucide-react';
import { WonderlandScene } from '../../scenes/WonderlandScene.jsx';
import { eventModel } from '../../models/eventModel.js';
import { useCountdown } from '../../hooks/useCountdown.js';
import { Button } from '../components/Button.jsx';
import { navigationController } from '../../controllers/navigationController.js';
import { heroAnimations } from '../../animations/heroAnimations.js';

export function Hero() {
  const data = eventModel.getHeroData();
  const countdown = useCountdown();

  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const statementRef = useRef(null);
  const badgesRef = useRef(null);
  const ctaRef = useRef(null);
  const countdownRef = useRef(null);

  useEffect(() => {
    heroAnimations.animateHeroEntrance({
      title: titleRef.current,
      tagline: taglineRef.current,
      statement: statementRef.current,
      badges: badgesRef.current?.children,
      cta: ctaRef.current,
      countdown: countdownRef.current,
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-wonderland-gradient">
      {/* 3D WebGL Background Layer */}
      <div className="absolute inset-0 z-0">
        <WonderlandScene />
      </div>

      {/* Atmospheric Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080608] via-transparent to-[#080608]/60 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#080608_90%)] pointer-events-none z-[1]" />

      {/* Main Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Tagline / Series Identifier */}
        <div ref={taglineRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A0B10]/90 border border-[#C51F3A]/50 text-[#E5BE6E] text-xs font-mono uppercase tracking-[0.25em] mb-4 shadow-crimson-sm backdrop-blur-md">
          <span className="text-[#C51F3A]">♠</span>
          <span>{data.tagline}</span>
          <span className="text-[#C51F3A]">♠</span>
        </div>

        {/* Main Event Title */}
        <h1 ref={titleRef} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tight text-[#FAF3E8] uppercase drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
          <span className="text-gold-gradient">{data.title}</span>
        </h1>

        {/* Thematic Statement & Subtext */}
        <div ref={statementRef} className="mt-4 max-w-2xl">
          <p className="text-lg sm:text-2xl font-serif text-[#FAF3E8] tracking-wide font-medium italic">
            "{data.mainStatement}"
          </p>
          <p className="text-sm sm:text-base text-[#E8D5B5]/75 font-sans mt-2">
            {data.supportingText}
          </p>
        </div>

        {/* Live Dynamic Countdown Banner */}
        <div ref={countdownRef} className="mt-8 mb-8 p-4 sm:p-5 rounded-2xl glass-panel border border-[#E5BE6E]/30 shadow-gold-sm max-w-xl w-full">
          <div className="text-[10px] font-mono tracking-widest text-[#E5BE6E] uppercase mb-3 flex items-center justify-center gap-2">
            <span>⏳</span>
            <span>OFFICIAL SPRINT COUNTDOWN</span>
            <span>⏳</span>
          </div>

          {countdown.hasStarted ? (
            <div className="text-2xl sm:text-3xl font-display font-bold text-[#E63956] animate-pulse">
              {countdown.message}
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              <div className="flex flex-col p-2 sm:p-3 rounded-xl bg-black/40 border border-white/5">
                <span className="text-2xl sm:text-4xl font-display font-black text-[#FAF3E8]">
                  {String(countdown.days).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-[#E8D5B5]/60 mt-1">Days</span>
              </div>
              <div className="flex flex-col p-2 sm:p-3 rounded-xl bg-black/40 border border-white/5">
                <span className="text-2xl sm:text-4xl font-display font-black text-[#FAF3E8]">
                  {String(countdown.hours).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-[#E8D5B5]/60 mt-1">Hours</span>
              </div>
              <div className="flex flex-col p-2 sm:p-3 rounded-xl bg-black/40 border border-white/5">
                <span className="text-2xl sm:text-4xl font-display font-black text-[#FAF3E8]">
                  {String(countdown.minutes).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-[#E8D5B5]/60 mt-1">Mins</span>
              </div>
              <div className="flex flex-col p-2 sm:p-3 rounded-xl bg-black/40 border border-white/5">
                <span className="text-2xl sm:text-4xl font-display font-black text-[#C51F3A]">
                  {String(countdown.seconds).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-[#E8D5B5]/60 mt-1">Secs</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Highlights Row */}
        <div ref={badgesRef} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl w-full mb-8 text-xs font-mono">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-[#FAF3E8]">
            <Calendar className="w-4 h-4 text-[#E5BE6E]" />
            <span>{data.date}</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-[#FAF3E8]">
            <MapPin className="w-4 h-4 text-[#C51F3A]" />
            <span>{data.mode} · {data.location}</span>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2 text-[#FAF3E8]">
            <Users className="w-4 h-4 text-[#E5BE6E]" />
            <span>Team: {data.teamSize}</span>
          </div>
          <div className="p-3 rounded-xl bg-[#C51F3A]/20 border border-[#C51F3A]/40 flex items-center justify-center gap-2 text-[#FAF3E8] font-bold shadow-crimson-sm">
            <Trophy className="w-4 h-4 text-[#E5BE6E]" />
            <span>Pool: {data.prizeHighlight}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
          <Button isRegistration variant="primary" size="lg" showArrow>
            REGISTER NOW
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigationController.scrollToSection('about')}
          >
            ENTER WONDERLAND ↓
          </Button>
        </div>
      </div>
    </section>
  );
}
