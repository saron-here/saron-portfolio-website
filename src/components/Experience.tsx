import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, CheckCircle2, MapPin } from 'lucide-react';

interface ExperienceProps {
  onMouseEnterItem?: () => void;
  onMouseLeaveItem?: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({
  onMouseEnterItem,
  onMouseLeaveItem,
}) => {
  return (
    <section
      id="experience"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/5 overflow-hidden"
    >
      {/* Background Red Ambient Glow */}
      <div
        data-glow-reactive="true"
        className="absolute top-1/2 right-[-5%] w-[600px] h-[600px] bg-radial from-[#FF3B30]/10 via-[#FF5638]/5 to-transparent blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#FF3B30]" />
              <span className="font-mono-code text-xs font-semibold tracking-widest text-[#FF5638] uppercase">
                EXPERIENCE
              </span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#F5F5F5] tracking-tight uppercase">
              WHERE I&apos;VE BEEN
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Hands-on internships delivering financial education research and operational workflow optimization.
          </p>
        </div>

        {/* Large Typography Editorial Experience Timeline */}
        <div className="space-y-12 sm:space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              onMouseEnter={onMouseEnterItem}
              onMouseLeave={onMouseLeaveItem}
              className="relative p-8 sm:p-12 rounded-3xl bg-white/[0.015] hover:bg-white/[0.035] border border-white/10 hover:border-[#FF3B30]/40 transition-all duration-500"
            >
              {/* Header Row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-white/5">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-mono-code text-xs text-[#FF5638] font-bold">
                      0{idx + 1}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono-code text-neutral-300">
                      {exp.badge}
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                    {exp.company}
                  </h3>
                  <div className="text-lg text-[#FF5638] font-medium mt-1">
                    {exp.role}
                  </div>
                </div>

                <div className="flex flex-col lg:items-end text-xs font-mono-code text-neutral-400 space-y-1">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-3.5 h-3.5 text-[#FF3B30]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Verified Impact Points */}
              <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {exp.points.map((point, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 flex items-start space-x-3.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF3B30] shrink-0 mt-0.5" />
                    <p className="text-sm text-neutral-300 font-light leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
