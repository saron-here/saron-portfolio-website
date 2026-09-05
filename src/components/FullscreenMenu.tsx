import React, { useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, X, Linkedin, Sparkles } from 'lucide-react';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onMouseEnterNav?: () => void;
  onMouseLeaveNav?: () => void;
}

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onMouseEnterNav,
  onMouseLeaveNav,
}) => {
  // Explicitly manage body overflow and ensure clean reset on unmount
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const primaryMenuItems = [
    { number: '01', title: 'HOME', target: 'hero', subtitle: 'Overview & Introduction' },
    { number: '02', title: 'WORK', target: 'projects', subtitle: 'Featured Analytics & Financial Models' },
    { number: '03', title: 'ABOUT', target: 'about', subtitle: 'Background & Academic Foundation' },
    { number: '04', title: 'EXPERIENCE', target: 'experience', subtitle: 'Internships & Career History' },
    { number: '05', title: 'CONTACT', target: 'contact', subtitle: 'Get In Touch' },
  ];

  const secondaryLinks = [
    { title: 'THE PHILOSOPHY', target: 'philosophy' },
    { title: 'CORE SKILLS', target: 'skills' },
    { title: 'CERTIFICATIONS', target: 'certifications' },
    { title: 'ACHIEVEMENTS', target: 'achievements' },
  ];

  const handleItemClick = (target: string) => {
    onClose();
    setTimeout(() => {
      onNavigate(target);
    }, 350);
  };

  return (
    <div
      id="fullscreen-menu"
      className={`fixed inset-0 z-[9990] flex flex-col justify-between bg-[#07070A]/98 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        isOpen
          ? 'opacity-100 pointer-events-auto visible [clip-path:inset(0_0_0_0)]'
          : 'opacity-0 pointer-events-none invisible [clip-path:inset(0_0_100%_0)]'
      }`}
    >
      {/* Animated Expanding Red Accent Horizon Line */}
      <div
        className={`absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF3B30] to-transparent transition-all duration-1000 ${
          isOpen ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      />

      {/* Atmospheric Red Ambient Light in Menu */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-radial from-[#FF3B30]/15 to-transparent blur-[120px] pointer-events-none" />

      {/* Top Header Row inside Menu */}
      <div className="relative z-10 px-6 sm:px-12 py-7 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-[#FF3B30] animate-ping" />
          <span className="font-mono-code text-xs tracking-[0.25em] text-neutral-300 uppercase">
            NAVIGATION
          </span>
        </div>

        <button
          id="close-menu-btn"
          onClick={onClose}
          onMouseEnter={onMouseEnterNav}
          onMouseLeave={onMouseLeaveNav}
          className="group flex items-center space-x-2.5 px-5 py-2.5 rounded-full border border-white/15 hover:border-[#FF3B30] bg-white/5 hover:bg-[#FF3B30]/10 transition-all duration-300 cursor-pointer"
        >
          <span className="font-mono-code text-xs tracking-wider text-neutral-300 group-hover:text-white">
            CLOSE
          </span>
          <X className="w-4 h-4 text-neutral-400 group-hover:text-[#FF3B30] transition-colors" />
        </button>
      </div>

      {/* Main Navigation Items Stagger Container */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-20 py-8 my-auto overflow-y-auto max-h-[72vh] max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Primary Big Staggered Links */}
          <div className="lg:col-span-8 flex flex-col space-y-4 sm:space-y-6">
            {primaryMenuItems.map((item, index) => (
              <div
                key={item.number}
                onClick={() => handleItemClick(item.target)}
                onMouseEnter={onMouseEnterNav}
                onMouseLeave={onMouseLeaveNav}
                className={`group flex items-baseline space-x-6 cursor-pointer transform transition-all duration-500 delay-[${
                  index * 60
                }ms] hover:translate-x-4`}
              >
                <span className="font-mono-code text-sm sm:text-base text-[#FF5638] font-bold tracking-wider">
                  {item.number}
                </span>
                <div className="relative flex items-center">
                  <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-200 group-hover:text-white transition-colors duration-300 tracking-tight uppercase">
                    {item.title}
                  </span>
                  <ArrowUpRight className="w-6 h-6 ml-3 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 text-[#FF3B30] transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Quick Jump Category Links */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10 space-y-4">
            <span className="text-[10px] font-mono-code text-[#8D8D96] tracking-[0.25em] uppercase block">
              ADDITIONAL SECTIONS
            </span>
            <div className="flex flex-col space-y-3">
              {secondaryLinks.map((sub) => (
                <div
                  key={sub.title}
                  onClick={() => handleItemClick(sub.target)}
                  onMouseEnter={onMouseEnterNav}
                  onMouseLeave={onMouseLeaveNav}
                  className="group flex items-center justify-between text-neutral-400 hover:text-white font-mono-code text-xs tracking-wider cursor-pointer transition-colors duration-200 py-1 border-b border-white/5 hover:border-[#FF3B30]/40"
                >
                  <span>{sub.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:text-[#FF3B30] transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer inside Menu */}
      <div className="relative z-10 px-6 sm:px-12 py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-neutral-400">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-3.5 h-3.5 text-[#FF3B30]" />
          <span>{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</span>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={onMouseEnterNav}
            onMouseLeave={onMouseLeaveNav}
            className="flex items-center space-x-1.5 hover:text-[#FF3B30] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LINKEDIN</span>
          </a>
          <span className="text-[#FF5638] font-bold">MBA • 2025–2027</span>
        </div>
      </div>
    </div>
  );
};
