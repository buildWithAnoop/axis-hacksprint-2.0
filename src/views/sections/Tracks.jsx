import React from 'react';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { TrackCard } from '../components/TrackCard.jsx';
import { trackModel } from '../../models/trackModel.js';

export function Tracks() {
  const tracks = trackModel.getTracks();

  return (
    <section id="tracks" className="relative py-24 sm:py-32 bg-[#080608] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C51F3A]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#E5BE6E]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="PORTALS OF CODE"
          title="CHOOSE YOUR PATH"
          subtitle="Explore the 6 official problem domains designed to challenge technical mastery, algorithmic agility, and creative problem solving."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
}
