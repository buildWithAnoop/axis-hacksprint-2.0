import React from 'react';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { FAQItem } from '../components/FAQItem.jsx';
import { faqModel } from '../../models/faqModel.js';

export function FAQ() {
  const faqs = faqModel.getFAQs();

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#080608] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#C51F3A]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="INQUIRIES"
          title="QUESTIONS FROM WONDERLAND"
          subtitle="Everything you need to know about registration, eligibility, submission protocols, and offline sprint logistics."
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.id} faq={faq} isOpenDefault={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
