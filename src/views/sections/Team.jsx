import React from 'react';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { TeamCard } from '../components/TeamCard.jsx';
import { teamModel } from '../../models/teamModel.js';

export function Team() {
  const faculty = teamModel.getFacultyCoordinators();
  const students = teamModel.getStudentCommittee();

  return (
    <section id="team" className="relative py-24 sm:py-32 bg-[#080608] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#E5BE6E]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="THE ARCHITECTS"
          title="THE PEOPLE BEHIND WONDERLAND"
          subtitle="Distinguished faculty coordinators and the dedicated student organizing committee driving Axis HackSprint 2.0."
        />

        {/* Section 1: Faculty Coordinators */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-[1px] w-8 bg-[#C51F3A]" />
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#E5BE6E] uppercase tracking-wider text-center">
              FACULTY COORDINATORS
            </h3>
            <span className="h-[1px] w-8 bg-[#C51F3A]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((member, i) => (
              <TeamCard key={i} member={member} />
            ))}
          </div>
        </div>

        {/* Section 2: Student Organizing Committee */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-[1px] w-8 bg-[#C51F3A]" />
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#FAF3E8] uppercase tracking-wider text-center">
              STUDENT ORGANIZING COMMITTEE
            </h3>
            <span className="h-[1px] w-8 bg-[#C51F3A]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {students.map((member, i) => (
              <TeamCard key={i} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
