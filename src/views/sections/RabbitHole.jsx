import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function RabbitHole() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const floatingItems = [
    { icon: '🕰️', label: 'TIME RUNS OUT', x: '15%', speed: 1.5, size: 'text-3xl' },
    { icon: '🂡', label: 'ACE OF SPADES', x: '80%', speed: 2.2, size: 'text-4xl' },
    { icon: '🗝️', label: 'KEY TO INNOVATION', x: '25%', speed: 1.8, size: 'text-2xl' },
    { icon: '🍄', label: 'MAGIC ALGORITHMS', x: '70%', speed: 1.2, size: 'text-3xl' },
    { icon: '♟️', label: 'STRATEGIC MOVES', x: '45%', speed: 2.5, size: 'text-4xl' },
    { icon: '📜', label: 'SPELLBOOK CODE', x: '85%', speed: 1.6, size: 'text-2xl' },
    { icon: '☕', label: 'MAD TEA HACK', x: '10%', speed: 2.0, size: 'text-3xl' },
    { icon: '🂮', label: 'KING OF HEARTS', x: '60%', speed: 1.9, size: 'text-4xl' },
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      const speed = floatingItems[i]?.speed || 1.5;

      gsap.to(item, {
        y: -180 * speed,
        rotation: (i % 2 === 0 ? 1 : -1) * 45,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-[#080608] via-[#1A0B10] to-[#080608] border-y border-[#C51F3A]/20"
    >
      {/* Background Rabbit Hole Portal Graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[500px] h-[500px] rounded-full border-2 border-dashed border-[#C51F3A] animate-spin-slow" />
        <div className="absolute w-[350px] h-[350px] rounded-full border border-[#E5BE6E]/40" />
        <div className="absolute w-32 h-32 rounded-full bg-[#C51F3A]/30 blur-2xl animate-pulse" />
      </div>

      {/* Floating Descent Relics */}
      <div className="relative max-w-5xl mx-auto px-4 text-center z-10">
        <span className="text-xs font-mono font-bold uppercase tracking-[0.35em] text-[#E5BE6E] block mb-2">
          THE DESCENT BEGINS
        </span>
        <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-[#FAF3E8]">
          "DOWN THE RABBIT HOLE"
        </h3>
        <p className="mt-3 text-sm sm:text-base text-[#E8D5B5]/75 font-serif max-w-xl mx-auto italic">
          Leaving convention above. Stepping into a realm where imagination takes executable form.
        </p>

        {/* Scattered Animated Relics Container */}
        <div className="relative h-48 sm:h-56 mt-8">
          {floatingItems.map((item, i) => (
            <div
              key={i}
              ref={(node) => (itemsRef.current[i] = node)}
              className="absolute flex flex-col items-center gap-1 select-none pointer-events-none"
              style={{ left: item.x, top: `${(i * 12) + 10}%` }}
            >
              <span className={`${item.size} drop-shadow-[0_0_12px_rgba(229,190,110,0.5)]`}>
                {item.icon}
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#E5BE6E]/60 uppercase whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
