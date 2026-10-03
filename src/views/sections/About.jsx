import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Lightbulb, Hammer, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { StoryBook } from '../../scenes/StoryBook.jsx';
import { eventModel } from '../../models/eventModel.js';
import { useIsMobile } from '../../hooks/useMediaQuery.js';

export function About() {
  const data = eventModel.getAboutData();
  const isMobile = useIsMobile();

  const iconMap = {
    Lightbulb: Lightbulb,
    Hammer: Hammer,
    Sparkles: Sparkles
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#080608] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C51F3A]/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#E5BE6E]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="THE ENCHANTED CHRONICLE"
          title={data.title}
          subtitle={data.subtitle}
        />

        {/* 3D StoryBook Canvas + Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left / Top: Interactive 3D StoryBook */}
          <div className="lg:col-span-5 h-72 sm:h-96 relative rounded-3xl overflow-hidden glass-panel border border-[#E5BE6E]/30 shadow-gold-sm flex items-center justify-center">
            <Canvas
              camera={{ position: [0, 0, 4.5], fov: 45 }}
              dpr={isMobile ? [1, 1] : [1, 2]}
              gl={{ alpha: true, antialias: true }}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[3, 4, 3]} intensity={1.5} color="#FAF3E8" />
                <directionalLight position={[-3, -2, -2]} intensity={0.8} color="#C51F3A" />
                <StoryBook position={[0, -0.2, 0]} scale={isMobile ? 0.85 : 1} openAngle={0.45} />
              </Suspense>
            </Canvas>
            <div className="absolute bottom-3 text-[10px] font-mono tracking-widest text-[#E5BE6E]/70 uppercase">
              ✦ CHRONICLE OF INNOVATION ✦
            </div>
          </div>

          {/* Right: Narrative Description */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#FAF3E8] mb-4">
              Where Bold Ideas Meet Relentless Builders
            </h3>
            <p className="text-base sm:text-lg text-[#E8D5B5]/90 font-serif leading-relaxed mb-6">
              {data.eventDescription}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono text-[#FAF3E8]">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#E5BE6E] block mb-1">MODE</span>
                <span className="font-bold">100% Offline</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#C51F3A] block mb-1">CATEGORY</span>
                <span className="font-bold">Software Only</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-[#E5BE6E] block mb-1">AUDIENCE</span>
                <span className="font-bold">Pan-India Students</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Innovation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {data.pillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon] || Sparkles;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl glass-panel border border-white/10 hover:border-[#C51F3A]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#C51F3A]/20 border border-[#C51F3A]/40 text-[#E63956] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <span className="font-display text-2xl text-[#E5BE6E]/40 group-hover:text-[#E5BE6E] transition-colors">
                    {pillar.cardSuite}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#E5BE6E] uppercase block mb-1">
                    PILLAR 0{index + 1}
                  </span>
                  <h4 className="text-2xl font-display font-black text-[#FAF3E8] mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[#E8D5B5]/80 font-sans leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#E8D5B5]/50 group-hover:text-[#FAF3E8]">
                  <span>AXIS HACKSPRINT 2.0</span>
                  <span className="text-[#C51F3A]">♠</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
