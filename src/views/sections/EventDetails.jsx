import React from 'react';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { InfoCard } from '../components/InfoCard.jsx';
import { eventModel } from '../../models/eventModel.js';

export function EventDetails() {
  const details = eventModel.getEventDetails();

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#080608] via-[#120A0D] to-[#080608] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="EVENT SPECIFICATIONS"
          title="THE REALM PARAMETERS"
          subtitle="Essential tournament mechanics and verified eligibility criteria for all participating covens."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {details.map((detail, index) => (
            <InfoCard
              key={index}
              label={detail.label}
              value={detail.value}
              icon={detail.icon}
              highlight={detail.highlight}
              className={index === details.length - 1 ? 'sm:col-span-2 lg:col-span-3 xl:col-span-2' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
