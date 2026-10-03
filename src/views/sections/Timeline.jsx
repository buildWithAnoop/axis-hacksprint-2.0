import React from 'react';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { TimelineItem } from '../components/TimelineItem.jsx';
import { timelineModel } from '../../models/timelineModel.js';

export function Timeline() {
  const steps = timelineModel.getSteps();

  return (
    <section id="timeline" className="relative py-24 sm:py-32 bg-[#080608] overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#C51F3A]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="THE EXPEDITION"
          title="DOWN THE RABBIT HOLE"
          subtitle="Follow the glowing milestones marking your journey from online conceptual submission to the 12-hour offline podium showdown."
        />

        <div className="relative mt-12">
          {steps.map((item, index) => (
            <TimelineItem
              key={item.step}
              item={item}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
