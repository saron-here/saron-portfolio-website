import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Linkedin, ArrowUpRight, Sparkles, Compass } from 'lucide-react';

interface ContactProps {
  onMouseEnterButton?: () => void;
  onMouseLeaveButton?: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  onMouseEnterButton,
  onMouseLeaveButton,
}) => {
  return (
    <section
      id="contact"
      className="relative pt-28 sm:pt-36 pb-24 px-6 sm:px-12 lg:px-20 border-t border-white/5 overflow-hidden select-none bg-[#050507]"
    >
      {/* Expanding Fiery Red/Orange Horizon Atmospheric Ambient Glow */}
      <div
        data-glow-reactive="true"
        className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] sm:w-[1300px] h-[550px] bg-radial from-[#FF3B30]/30 via-[#FF5638]/12 to-transparent blur-[160px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Pill / Tag */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#FF3B30] animate-pulse" />
          <span className="font-mono-code text-xs font-semibold tracking-widest text-[#FF5638] uppercase">
            LET&apos;S CONNECT
          </span>
        </div>

        {/* Dramatic Cinematic Ending Headline */}
        <div className="max-w-5xl mb-12 sm:mb-16">
          <h2 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.92]">
            LET&apos;S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3B30] via-[#FF5638] to-[#FF8A00]">
              SOMETHING USEFUL
            </span>
            .
          </h2>
          
          <p className="mt-8 text-base sm:text-xl text-neutral-300 font-light max-w-3xl leading-relaxed tracking-wide uppercase font-mono-code">
            OPEN TO OPPORTUNITIES, COLLABORATIONS AND CONVERSATIONS AROUND ANALYTICS, FINANCE AND AI.
          </p>
        </div>

        {/* Editorial Action Cards & Direct Connect */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch pt-4">
          {/* Card 1: Direct LinkedIn Action */}
          <div className="md:col-span-7 p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono-code text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>OPEN TO OPPORTUNITIES</span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                BUSINESS ANALYTICS • FINANCE • AI
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Connect directly on LinkedIn for enterprise intelligence, financial analytics, dashboard consulting, and career discussions.
              </p>
            </div>

            <div className="pt-8">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={onMouseEnterButton}
                onMouseLeave={onMouseLeaveButton}
                className="group/btn inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF3B30] via-[#FF5638] to-[#FF3B30] text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(255,59,48,0.4)] hover:shadow-[0_0_40px_rgba(255,59,48,0.8)] transition-all duration-300 cursor-pointer active:scale-95"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </a>
            </div>
          </div>

          {/* Card 2: Professional Disciplines & Focus */}
          <div className="md:col-span-5 p-8 sm:p-12 rounded-3xl bg-white/[0.015] border border-white/10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-code text-neutral-500 uppercase tracking-widest">
                  SPECIALIZATION
                </span>
                <Sparkles className="w-4 h-4 text-[#FF5638]" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-neutral-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF3B30]" />
                  <span>Executive KPI Dashboarding &amp; Power BI</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-neutral-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF5638]" />
                  <span>Financial Analysis &amp; Equity Research</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-neutral-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
                  <span>Python Automation &amp; Workforce AI</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex items-center justify-between text-xs font-mono-code text-neutral-400">
              <span>LOCATION</span>
              <span className="text-white flex items-center space-x-1.5">
                <Compass className="w-3.5 h-3.5 text-[#FF3B30]" />
                <span>CHENNAI, INDIA</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
