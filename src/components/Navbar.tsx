import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenMenu: () => void;
  onMouseEnterButton?: () => void;
  onMouseLeaveButton?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMenu,
  onMouseEnterButton,
  onMouseLeaveButton,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-[9900] px-6 sm:px-12 py-5 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050507]/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Top-Left Brand Logo in Editorial Aesthetic */}
        <a
          href="#hero"
          className="group flex flex-col gap-0.5 cursor-pointer"
          onMouseEnter={onMouseEnterButton}
          onMouseLeave={onMouseLeaveButton}
        >
          <span className="text-[12px] font-heading font-black tracking-[0.25em] uppercase text-white group-hover:text-[#FF3B30] transition-colors">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-[9px] font-mono-code text-[#8D8D96] tracking-[0.2em] uppercase">
            PORTFOLIO © 2026
          </span>
        </a>

        {/* Center Live Availability Indicator */}
        <div className="hidden md:flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono-code text-[#8D8D96]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="tracking-wider">OPEN TO ANALYTICS &amp; FINANCE ROLES</span>
        </div>

        {/* Top-Right Editorial Minimal Menu Button: MENU + */}
        <button
          id="open-menu-btn"
          onClick={onOpenMenu}
          onMouseEnter={onMouseEnterButton}
          onMouseLeave={onMouseLeaveButton}
          className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 hover:border-[#FF3B30] bg-white/[0.03] hover:bg-[#FF3B30]/10 transition-all duration-300 cursor-pointer"
        >
          <span className="text-[11px] font-mono-code font-bold tracking-[0.3em] uppercase text-neutral-200 group-hover:text-white transition-colors">
            MENU
          </span>
          <span className="text-sm font-mono-code text-[#FF3B30] font-bold transition-transform duration-300 group-hover:rotate-90">
            +
          </span>
        </button>
      </div>
    </header>
  );
};
