import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CertificationsProps {
  onMouseEnterItem?: () => void;
  onMouseLeaveItem?: () => void;
}

export const Certifications: React.FC<CertificationsProps> = ({
  onMouseEnterItem,
  onMouseLeaveItem,
}) => {
  return (
    <section
      id="certifications"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/5 overflow-hidden"
    >
      {/* Background Subtle Red Ambient Glow */}
      <div
        data-glow-reactive="true"
        className="absolute top-1/2 left-[-5%] w-[600px] h-[600px] bg-radial from-[#FF3B30]/10 to-transparent blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#FF3B30]" />
              <span className="font-mono-code text-xs font-semibold tracking-widest text-[#FF5638] uppercase">
                VERIFIED CREDENTIALS
              </span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#F5F5F5] tracking-tight uppercase">
              CERTIFICATIONS
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Formal industry, AI, finance, and language accreditations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              onMouseEnter={onMouseEnterItem}
              onMouseLeave={onMouseLeaveItem}
              className="p-8 rounded-2xl bg-white/[0.015] hover:bg-white/[0.035] border border-white/10 hover:border-[#FF3B30]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono-code text-neutral-400">
                    {cert.category}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#FF3B30]" />
                </div>

                <h3 className="font-heading font-extrabold text-lg text-white mb-2 tracking-tight">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono-code text-neutral-400 mb-6">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center space-x-2 text-xs font-mono-code text-[#FF5638]">
                <Award className="w-3.5 h-3.5" />
                <span className="font-medium">{cert.credentialBadge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
