import React from 'react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import { GraduationCap, Languages, Award, Compass } from 'lucide-react';

interface AboutProps {
  onMouseEnterItem?: () => void;
  onMouseLeaveItem?: () => void;
}

export const About: React.FC<AboutProps> = ({
  onMouseEnterItem,
  onMouseLeaveItem,
}) => {
  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/5 overflow-hidden"
    >
      {/* Background Red Ambient Glow */}
      <div
        data-glow-reactive="true"
        className="absolute bottom-10 left-[-10%] w-[600px] h-[600px] bg-radial from-[#FF3B30]/10 to-transparent blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Tag */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#FF3B30]" />
          <span className="font-mono-code text-xs font-semibold tracking-widest text-[#FF5638] uppercase">
            ABOUT &amp; ACADEMIC FOUNDATION
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-8">
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase">
              BRIDGING STRATEGY, DATA INTELLIGENCE &amp; FINANCIAL CLARITY
            </h2>
            <p className="mt-8 text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-3xl">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono-code text-[#FF5638] uppercase">
                <Compass className="w-4 h-4" />
                <span>CORE VALUE PROPOSITION</span>
              </div>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Transforming multi-source enterprise operational and market data into automated dashboards and strategic financial models that drive confident decision-making.
              </p>
            </div>
          </div>
        </div>

        {/* Verified Education Timeline */}
        <div className="mb-20">
          <div className="flex items-center space-x-2 text-xs font-mono-code text-neutral-400 uppercase mb-8">
            <GraduationCap className="w-4 h-4 text-[#FF3B30]" />
            <span>VERIFIED ACADEMIC CREDENTIALS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION.map((edu, index) => (
              <div
                key={index}
                onMouseEnter={onMouseEnterItem}
                onMouseLeave={onMouseLeaveItem}
                className="relative p-8 rounded-2xl bg-white/[0.015] hover:bg-white/[0.04] border border-white/10 hover:border-[#FF3B30]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-code text-xs text-[#FF5638] font-bold">
                      {edu.period}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#FF3B30]/10 border border-[#FF3B30]/30 text-xs font-mono-code text-white font-bold">
                      {edu.score}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-white mb-2 tracking-tight">
                    {edu.degree}
                  </h3>

                  <p className="text-sm text-neutral-400 font-light mb-4">
                    {edu.institution}
                  </p>
                </div>

                {edu.highlight && (
                  <div className="pt-4 border-t border-white/5 text-xs font-mono-code text-neutral-300 flex items-center space-x-2">
                    <Award className="w-3.5 h-3.5 text-[#FF5638]" />
                    <span>{edu.highlight}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Languages & Multilingual Proficiency */}
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <div className="flex items-center space-x-2 text-xs font-mono-code text-neutral-400 uppercase mb-6">
            <Languages className="w-4 h-4 text-[#FF3B30]" />
            <span>MULTILINGUAL PROFICIENCY</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PERSONAL_INFO.languages.map((lang, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col"
              >
                <span className="font-heading font-bold text-lg text-white">
                  {lang.name}
                </span>
                <span className="text-xs font-mono-code text-neutral-400 mt-1">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
