import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Trophy, Users, Globe2, Sparkles } from 'lucide-react';

interface AchievementsProps {
  onMouseEnterItem?: () => void;
  onMouseLeaveItem?: () => void;
}

export const Achievements: React.FC<AchievementsProps> = ({
  onMouseEnterItem,
  onMouseLeaveItem,
}) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Users;
      case 1:
        return Globe2;
      default:
        return Trophy;
    }
  };

  return (
    <section
      id="achievements"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/5 overflow-hidden"
    >
      {/* Background Red Atmospheric Glow */}
      <div
        data-glow-reactive="true"
        className="absolute top-1/2 right-[-5%] w-[600px] h-[600px] bg-radial from-[#FF3B30]/10 to-transparent blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#FF3B30]" />
              <span className="font-mono-code text-xs font-semibold tracking-widest text-[#FF5638] uppercase">
                LEADERSHIP &amp; RECOGNITIONS
              </span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#F5F5F5] tracking-tight uppercase">
              BEYOND THE RESUME
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            National leadership, sustainability initiatives, and competitive case conclaves.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = getIcon(idx);
            return (
              <div
                key={idx}
                onMouseEnter={onMouseEnterItem}
                onMouseLeave={onMouseLeaveItem}
                className="p-8 sm:p-10 rounded-3xl bg-white/[0.015] hover:bg-white/[0.035] border border-white/10 hover:border-[#FF3B30]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#FF3B30]" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono-code text-neutral-400">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  <div className="text-xs font-mono-code text-[#FF5638] mb-4">
                    {item.organization}
                  </div>

                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center space-x-2 text-xs font-mono-code text-neutral-400">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF3B30]" />
                  <span>COMMUNITY &amp; COMPETITION IMPACT</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
