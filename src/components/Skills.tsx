import React from 'react';
import { SKILLS } from '../data/portfolioData';
import { Sparkles, Terminal, BarChart2, TrendingUp, Cpu } from 'lucide-react';

interface SkillsProps {
  onMouseEnterItem?: () => void;
  onMouseLeaveItem?: () => void;
}

export const Skills: React.FC<SkillsProps> = ({
  onMouseEnterItem,
  onMouseLeaveItem,
}) => {
  const marqueeKeywords = [
    "BUSINESS ANALYTICS",
    "•",
    "POWER BI",
    "•",
    "FINANCIAL ANALYSIS",
    "•",
    "EQUITY RESEARCH",
    "•",
    "PYTHON",
    "•",
    "TABLEAU",
    "•",
    "KPI REPORTING",
    "•",
    "EXCEL ADVANCED",
    "•",
    "STOCK MARKET ANALYSIS",
    "•",
    "DASHBOARDING",
    "•",
    "DAX",
    "•",
    "BUSINESS INTELLIGENCE",
  ];

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return BarChart2;
      case 1:
        return TrendingUp;
      case 2:
        return Terminal;
      default:
        return Cpu;
    }
  };

  return (
    <section
      id="skills"
      className="relative py-28 sm:py-36 border-t border-white/5 overflow-hidden"
    >
      {/* Background Red Atmospheric Glow */}
      <div
        data-glow-reactive="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#FF3B30]/10 via-[#FF5638]/5 to-transparent blur-[160px] pointer-events-none"
      />

      {/* Kinetic Infinite Scrolling Marquee */}
      <div className="w-full overflow-hidden border-y border-white/5 py-5 bg-white/[0.01] mb-20">
        <div className="flex w-max animate-marquee space-x-8 text-neutral-400 font-heading font-black text-xl sm:text-2xl tracking-wider uppercase select-none">
          {[...marqueeKeywords, ...marqueeKeywords].map((word, idx) => (
            <span
              key={idx}
              className={word === "•" ? "text-[#FF3B30]" : "hover:text-white transition-colors"}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#FF3B30]" />
              <span className="font-mono-code text-xs font-semibold tracking-widest text-[#FF5638] uppercase">
                CORE CAPABILITIES
              </span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#F5F5F5] tracking-tight uppercase">
              SKILLS &amp; TOOLSET
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Analytical tools, financial models, and computational frameworks deployed across projects.
          </p>
        </div>

        {/* Structured Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((group, idx) => {
            const Icon = getCategoryIcon(idx);
            return (
              <div
                key={idx}
                onMouseEnter={onMouseEnterItem}
                onMouseLeave={onMouseLeaveItem}
                className="p-8 sm:p-10 rounded-3xl bg-white/[0.015] hover:bg-white/[0.035] border border-white/10 hover:border-[#FF3B30]/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#FF3B30]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-xl text-white tracking-tight">
                        {group.category}
                      </h3>
                      <span className="font-mono-code text-[10px] text-[#FF5638]">
                        DOMAIN {idx + 1}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                    {group.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/5">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-4 py-2 rounded-xl bg-white/5 hover:bg-[#FF3B30]/15 border border-white/10 hover:border-[#FF3B30] text-xs font-mono-code text-neutral-200 hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
