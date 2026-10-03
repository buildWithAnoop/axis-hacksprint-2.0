import React from 'react';
import { CheckCircle2, AlertTriangle, Calendar, FileCode, Users } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading.jsx';
import { Button } from '../components/Button.jsx';
import { eventModel } from '../../models/eventModel.js';

export function RoundOne() {
  const data = eventModel.getRoundOneData();

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#080608] via-[#1A0B10] to-[#080608] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ROUND 1 BLUEPRINT"
          title={data.title}
          subtitle={data.subtitle}
        />

        {/* Milestone highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          <div className="p-6 rounded-2xl glass-panel border border-[#C51F3A]/40 bg-[#1A0B10]/90 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#C51F3A]/20 text-[#E63956]">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8D5B5]/60">Submission Deadline</span>
              <p className="text-base sm:text-lg font-display font-bold text-[#FAF3E8]">{data.deadline}</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-[#E5BE6E]/40 bg-[#1A0B10]/90 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#E5BE6E]/20 text-[#E5BE6E]">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8D5B5]/60">Shortlist Pool</span>
              <p className="text-base sm:text-lg font-display font-bold text-[#FAF3E8]">{data.shortlisting}</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-white/20 bg-[#1A0B10]/90 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white/10 text-[#FAF3E8]">
              <FileCode className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8D5B5]/60">Result Announcement</span>
              <p className="text-base sm:text-lg font-display font-bold text-[#FAF3E8]">{data.resultsAnnouncement}</p>
            </div>
          </div>
        </div>

        {/* Requirements & Avoid Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Requirements (8 cols) */}
          <div className="lg:col-span-7 p-8 rounded-3xl glass-panel border border-emerald-500/30 bg-emerald-950/10">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#FAF3E8]">
                What Your Idea Presentation Should Cover:
              </h3>
            </div>

            <div className="space-y-3.5">
              {data.requirements.map((req, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-[#E8D5B5]/90 font-sans">
                  <span className="text-emerald-400 font-mono font-bold mt-0.5">✦</span>
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Avoid Guidelines (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl glass-panel border border-[#C51F3A]/40 bg-[#1A0B10]/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2 rounded-lg bg-[#C51F3A]/20 text-[#E63956]">
                  <AlertTriangle className="w-5 h-5" />
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#FAF3E8]">
                  Critical Traps to Avoid:
                </h3>
              </div>

              <div className="space-y-4">
                {data.avoidList.map((avoid, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-[#FAF3E8]/85 font-sans">
                    <span className="text-[#C51F3A] font-bold">✕</span>
                    <span>{avoid}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Button isRegistration variant="primary" size="md" showArrow className="w-full">
                SUBMIT PROPOSAL ON UNSTOP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
