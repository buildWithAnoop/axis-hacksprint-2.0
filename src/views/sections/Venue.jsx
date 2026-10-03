import React from 'react';
import { MapPin, Navigation, ExternalLink, Building } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { Button } from '../components/Button.jsx';
import { eventConfig } from '../../config/eventConfig.js';
import { mapService } from '../../services/mapService.js';

export function Venue() {
  const mapUrl = mapService.getMapUrl();
  const directionsUrl = mapService.getDirectionsUrl();
  const embedUrl = mapService.getEmbedMapUrl();

  return (
    <section id="venue" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#080608] via-[#120A0D] to-[#080608] border-y border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#C51F3A]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="THE DESTINATION"
          title="FIND YOUR WAY TO WONDERLAND"
          subtitle="Join us on-campus for the 12-hour offline coding marathon in Kanpur, Uttar Pradesh."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Venue Details & Buttons (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between h-full shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#C51F3A]/20 border border-[#C51F3A]/40 text-[#E63956] flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono uppercase tracking-widest text-[#E5BE6E] block mb-1">
                OFFICIAL VENUE
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-[#FAF3E8] mb-3">
                {eventConfig.organizer}
              </h3>

              <div className="space-y-2 text-sm sm:text-base text-[#E8D5B5]/85 font-serif leading-relaxed mb-6">
                <p className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#E5BE6E]" />
                  <span>{eventConfig.campus}</span>
                </p>
                <p>{eventConfig.city}, {eventConfig.state}, {eventConfig.country}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#E8D5B5]/70 space-y-1 mb-6">
                <div className="flex justify-between">
                  <span>EVENT MODE:</span>
                  <span className="text-white font-bold">{eventConfig.eventMode}</span>
                </div>
                <div className="flex justify-between">
                  <span>GRAND FINALE DATE:</span>
                  <span className="text-[#E5BE6E] font-bold">{eventConfig.eventDateFormatted}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <Button
                variant="gold"
                size="md"
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Navigation className="w-4 h-4" />}
                className="flex-1"
              >
                GET DIRECTIONS
              </Button>
              <Button
                variant="outline"
                size="md"
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ExternalLink className="w-4 h-4" />}
                className="flex-1"
              >
                VIEW MAP
              </Button>
            </div>
          </div>

          {/* Interactive Google Map Embed (7 cols) */}
          <div className="lg:col-span-7 h-80 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl relative">
            <iframe
              title="Axis Institute of Technology & Management Map"
              src={embedUrl}
              className="w-full h-full border-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
