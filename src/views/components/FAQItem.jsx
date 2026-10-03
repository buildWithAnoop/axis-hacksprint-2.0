import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQItem({ faq, isOpenDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="rounded-2xl glass-panel border border-white/10 hover:border-[#C51F3A]/40 transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
      >
        <span className="text-base sm:text-lg font-display font-semibold text-[#FAF3E8]">
          {faq.question}
        </span>
        <div className={`p-2 rounded-xl bg-white/5 border border-white/10 text-[#E5BE6E] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#C51F3A]/20 text-white' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t border-white/5 text-sm sm:text-base text-[#E8D5B5]/85 font-serif leading-relaxed animate-fadeIn">
          {faq.answer}
        </div>
      )}
    </div>
  );
}
