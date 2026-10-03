import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig.js';
import { eventConfig } from '../../config/eventConfig.js';
import { navigationController } from '../../controllers/navigationController.js';
import { Button } from '../components/Button.jsx';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sectionIds = siteConfig.navLinks.map(l => l.id);
      setActiveSection(navigationController.getActiveSection(sectionIds));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    navigationController.scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-[#080608]/85 backdrop-blur-xl border-b border-[#F4E6CE]/10 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-3 group select-none"
        >
          <img
            src="/logo.png"
            alt={eventConfig.eventName}
            className="w-10 h-10 object-contain shrink-0 drop-shadow-[0_0_10px_rgba(197,31,58,0.5)] group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-display font-black text-base sm:text-lg tracking-wider text-[#FAF3E8] group-hover:text-gold-gradient transition-colors">
              {eventConfig.eventName}
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#E5BE6E] uppercase opacity-80">
              {eventConfig.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {siteConfig.navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-display tracking-wider uppercase transition-all duration-200 relative ${
                  isActive
                    ? 'text-[#FAF3E8] font-bold bg-[#C51F3A]/20 border border-[#C51F3A]/40'
                    : 'text-[#E8D5B5]/75 hover:text-[#FAF3E8] hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Primary Unstop Registration CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Button isRegistration variant="primary" size="sm" showArrow>
            REGISTER NOW
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-[#FAF3E8] hover:bg-[#C51F3A]/20 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#080608]/98 backdrop-blur-2xl border-b border-[#F4E6CE]/15 animate-fadeIn">
          <div className="flex flex-col gap-2 pt-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-display tracking-wider uppercase flex items-center justify-between ${
                    isActive
                      ? 'text-[#FAF3E8] font-bold bg-[#C51F3A]/30 border border-[#C51F3A]/60'
                      : 'text-[#E8D5B5]/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#E5BE6E]">♠</span>
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-white/10">
              <Button isRegistration variant="primary" size="md" showArrow className="w-full">
                REGISTER NOW
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
