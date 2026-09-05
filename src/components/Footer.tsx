import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Sparkles } from 'lucide-react';

interface FooterProps {
  onMouseEnterButton?: () => void;
  onMouseLeaveButton?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onMouseEnterButton,
  onMouseLeaveButton,
}) => {
  const [chennaiTime, setChennaiTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const timeStr = new Intl.DateTimeFormat([], options).format(new Date());
      setChennaiTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 sm:px-12 lg:px-20 border-t border-white/5 bg-[#030305] text-neutral-400 font-mono-code text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
          <span className="font-heading font-extrabold text-sm text-white tracking-wider">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span>CHENNAI, IN [ {chennaiTime || 'IST'} ]</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3 text-[11px] text-neutral-400">
          <div className="flex items-center space-x-1.5 text-[#FF5638] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#FF3B30]" />
            <span>MBA • 2025–2027</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="text-neutral-500">PORTFOLIO © 2026</span>
        </div>

        <button
          onClick={scrollToTop}
          onMouseEnter={onMouseEnterButton}
          onMouseLeave={onMouseLeaveButton}
          className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#FF3B30] border border-white/10 hover:border-[#FF3B30] text-neutral-300 hover:text-white transition-all cursor-pointer"
        >
          <span className="text-[11px] tracking-widest">BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
};
