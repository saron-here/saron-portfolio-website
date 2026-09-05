import React, { useState } from 'react';
import { Database, LineChart, Cpu, Sparkles } from 'lucide-react';

interface PhilosophyProps {
  onMouseEnterItem?: () => void;
  onMouseLeaveItem?: () => void;
}

export const Philosophy: React.FC<PhilosophyProps> = ({
  onMouseEnterItem,
  onMouseLeaveItem,
}) => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: "01",
      icon: Database,
      title: "Data Structuring & Star-Schema Precision",
      tag: "FOUNDATION",
      description:
        "High-performance business intelligence begins with immaculate data architecture. Transforming raw operational records into optimized models eliminates redundant manual reporting and establishes a single source of truth.",
    },
    {
      id: "02",
      icon: LineChart,
      title: "Financial Rigor & Quantitative Direction",
      tag: "STRATEGY",
      description:
        "Numbers only matter when they clarify capital allocation and risk. By pairing fundamental equity ratios, variance tracking, and margin analysis, raw variance turns into strategic growth levers.",
    },
    {
      id: "03",
      icon: Cpu,
      title: "Automated Intelligence & Human Leverage",
      tag: "AUTOMATION",
      description:
        "From natural language applicant parsing to predictive modeling and real-time vision logging, intelligent automation frees teams from repetitive friction to focus on strategic execution.",
    },
  ];

  return (
    <section
      id="philosophy"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/5 overflow-hidden"
    >
      {/* Background Subtle Red Atmospheric Orb */}
      <div
        data-glow-reactive="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#FF3B30]/10 via-[#FF5638]/5 to-transparent blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Tag */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#FF3B30]" />
          <span className="font-mono-code text-xs font-semibold tracking-widest text-[#FF5638] uppercase">
            THE THINKING BEHIND THE WORK
          </span>
        </div>

        {/* Heroic Central Editorial Statement */}
        <div className="max-w-5xl mb-20">
          <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-[#F5F5F5]">
            &ldquo;Analytics becomes meaningful when it turns{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B30] via-[#FF5638] to-[#FF8A00]">
              information
            </span>{' '}
            into clear, actionable{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5638] to-white">
              direction
            </span>
            .&rdquo;
          </h2>
          <p className="mt-6 text-base sm:text-lg text-neutral-400 font-light max-w-3xl leading-relaxed">
            Bridging financial acumen, enterprise data architectures, and automated algorithms to solve operational complexities with measurable efficiency.
          </p>
        </div>

        {/* 3 Core Analytical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === idx;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => {
                  setActivePillar(idx);
                  onMouseEnterItem?.();
                }}
                onMouseLeave={onMouseLeaveItem}
                className={`relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                  isActive
                    ? 'bg-white/[0.04] border-[#FF3B30]/40 shadow-[0_10px_30px_rgba(255,59,48,0.15)] -translate-y-1'
                    : 'bg-white/[0.015] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono-code text-sm font-bold text-[#FF5638]">
                    {pillar.id}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono-code text-neutral-300">
                    {pillar.tag}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#FF3B30] transition-colors">
                  <Icon className="w-6 h-6 text-[#FF3B30]" />
                </div>

                <h3 className="font-heading font-extrabold text-xl text-white mb-3 tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {pillar.description}
                </p>

                {isActive && (
                  <div className="mt-6 pt-4 border-t border-[#FF3B30]/20 flex items-center space-x-2 text-xs font-mono-code text-[#FF5638]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>APPLIED ACROSS ALL PROJECTS</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
