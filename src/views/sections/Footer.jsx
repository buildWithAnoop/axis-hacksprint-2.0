import React from 'react';
import { MapPin, ArrowUpRight, Heart } from 'lucide-react';
import { eventConfig } from '../../config/eventConfig.js';
import { linksConfig } from '../../config/linksConfig.js';
import { siteConfig } from '../../config/siteConfig.js';
import { navigationController } from '../../controllers/navigationController.js';

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, id) => {
    e.preventDefault();
    navigationController.scrollToSection(id);
  };

  return (
    <footer className="relative bg-[#080608] text-[#F4E6CE] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background Top Crimson Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C51F3A] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt={eventConfig.eventName}
                className="w-12 h-12 object-contain shrink-0 drop-shadow-[0_0_12px_rgba(197,31,58,0.5)]"
              />
              <div>
                <h3 className="font-display font-black text-xl text-[#FAF3E8]">
                  {eventConfig.eventName}
                </h3>
                <p className="text-[10px] font-mono tracking-widest text-[#E5BE6E] uppercase">
                  {eventConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#E8D5B5]/75 font-serif leading-relaxed max-w-sm">
              Organized by {eventConfig.organizer}, {eventConfig.city}, {eventConfig.state}. The ultimate 12-hour offline coding proving ground for collegiate innovators.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={linksConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#C51F3A] hover:bg-[#C51F3A]/20 flex items-center justify-center text-[#FAF3E8] hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={linksConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-[#C51F3A] hover:bg-[#C51F3A]/20 flex items-center justify-center text-[#FAF3E8] hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold tracking-[0.25em] text-[#E5BE6E] uppercase mb-4">
              EXPEDITION LINKS
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-[#E8D5B5]/75 hover:text-[#FAF3E8] hover:translate-x-1 transition-all duration-200 font-sans flex items-center gap-1.5"
                >
                  <span className="text-[10px] text-[#C51F3A]">✦</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Official Portals & Registration (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-[0.25em] text-[#E5BE6E] uppercase mb-4">
              OFFICIAL REGISTRATION
            </h4>
            <a
              href={linksConfig.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl glass-panel border border-[#C51F3A]/40 hover:border-[#C51F3A] flex items-center justify-between group transition-all"
            >
              <div>
                <span className="text-xs font-mono text-[#E5BE6E] uppercase block">Unstop Portal</span>
                <span className="text-sm font-display font-bold text-[#FAF3E8]">Apply for HackSprint</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#E63956] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-[#E8D5B5]/60 font-mono flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#E5BE6E] shrink-0" />
              <span>AITM Campus, Kanpur, UP</span>
            </div>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#E8D5B5]/60">
          <div>
            © {currentYear} {eventConfig.eventName} · {eventConfig.organizer}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Crafted for curious minds down the rabbit hole</span>
            <span className="text-[#C51F3A]">♠ ♦ ♣ ♥</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
