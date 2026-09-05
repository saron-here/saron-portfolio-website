import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, BarChart3, TrendingUp, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onConnectClick: () => void;
  onMouseEnterButton?: () => void;
  onMouseLeaveButton?: () => void;
  isLoaded?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onConnectClick,
  onMouseEnterButton,
  onMouseLeaveButton,
  isLoaded = true,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const fluidCoreRef = useRef<HTMLDivElement>(null);
  const solidTitleRef = useRef<HTMLDivElement>(null);
  const outlineTitleRef = useRef<HTMLDivElement>(null);
  const microTextRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const actionBarRef = useRef<HTMLDivElement>(null);
  const magneticBtnRef = useRef<HTMLButtonElement>(null);
  const railsRef = useRef<HTMLElement>(null);
  const academicRef = useRef<HTMLDivElement>(null);
  const animationFinished = useRef(false);

  // Staged Layered Cinematic GSAP Reveal Animation
  useEffect(() => {
    if (!isLoaded) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.05,
        onComplete: () => {
          animationFinished.current = true;
        },
      });

      // 1. Fluid background core expansion
      if (fluidCoreRef.current) {
        tl.fromTo(
          fluidCoreRef.current,
          { scale: 0.6, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' },
          0
        );
      }

      // 2. Small top navigation / editorial status bar (slide down)
      if (microTextRef.current) {
        tl.fromTo(
          microTextRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          0.15
        );
      }

      // 3. Giant SARON typography (powerful spring-like reveal)
      if (solidTitleRef.current) {
        tl.fromTo(
          solidTitleRef.current,
          { y: 90, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 0.95, scale: 1, duration: 1.1, ease: 'power4.out' },
          0.25
        );
      }

      // 4. Outlined SIFANA. typography (strokes reveal)
      if (outlineTitleRef.current) {
        tl.fromTo(
          outlineTitleRef.current,
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.05, ease: 'power4.out' },
          0.4
        );
      }

      // 5. Right-side strategic description & explore indicator
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
          0.55
        );
      }

      // 6. EXPLORE WORK CTA & Bottom Action Bar (elastic pop-in)
      if (actionBarRef.current) {
        tl.fromTo(
          actionBarRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.4)' },
          0.65
        );
      }

      // 7. Academic information & left vertical rails
      if (academicRef.current) {
        tl.fromTo(
          academicRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
          0.75
        );
      }

      if (railsRef.current) {
        tl.fromTo(
          railsRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' },
          0.75
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, [isLoaded]);

  // Performance-optimized direct DOM parallax transforms (zero React re-renders)
  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let btnTargetX = 0;
    let btnTargetY = 0;
    let btnCurrentX = 0;
    let btnCurrentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 2;
      targetY = (e.clientY / innerHeight - 0.5) * 2;

      // Magnetic Button Calculation
      if (magneticBtnRef.current) {
        const rect = magneticBtnRef.current.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;
        const distX = e.clientX - btnCenterX;
        const distY = e.clientY - btnCenterY;
        const distance = Math.hypot(distX, distY);

        if (distance < 100) {
          const pullFactor = (1 - distance / 100) * 10;
          btnTargetX = (distX / distance) * pullFactor;
          btnTargetY = (distY / distance) * pullFactor;
        } else {
          btnTargetX = 0;
          btnTargetY = 0;
        }
      }
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
      btnTargetX = 0;
      btnTargetY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const updateParallax = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      btnCurrentX += (btnTargetX - btnCurrentX) * 0.15;
      btnCurrentY += (btnTargetY - btnCurrentY) * 0.15;

      if (animationFinished.current) {
        if (fluidCoreRef.current) {
          fluidCoreRef.current.style.transform = `translate(calc(-50% + ${currentX * 9}px), calc(-50% + ${currentY * 9}px))`;
        }
        if (solidTitleRef.current) {
          solidTitleRef.current.style.transform = `translate3d(${currentX * 3}px, ${currentY * 3}px, 0)`;
        }
        if (outlineTitleRef.current) {
          outlineTitleRef.current.style.transform = `translate3d(${currentX * 6}px, ${currentY * 6}px, 0)`;
        }
        if (microTextRef.current) {
          microTextRef.current.style.transform = `translate3d(${currentX * 4}px, ${currentY * 4}px, 0)`;
        }
        if (magneticBtnRef.current) {
          magneticBtnRef.current.style.transform = `translate3d(${btnCurrentX}px, ${btnCurrentY}px, 0)`;
        }
      }

      animationFrameId = requestAnimationFrame(updateParallax);
    };

    animationFrameId = requestAnimationFrame(updateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{ minHeight: '100svh' }}
      className="relative w-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-5 sm:px-10 lg:px-16 overflow-hidden select-none bg-[#050507]"
    >
      {/* Central Interactive Organic Red/Orange Fluid Core */}
      <div
        ref={fluidCoreRef}
        data-glow-reactive="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[580px] lg:w-[800px] h-[340px] sm:h-[580px] lg:h-[800px] pointer-events-none transition-transform duration-200 ease-out"
      >
        {/* Layer 1: Vibrant core flare */}
        <div
          className="absolute inset-0 rounded-full animate-fluid opacity-65 mix-blend-screen"
          style={{
            background:
              'radial-gradient(circle at 45% 45%, #FF3B30 0%, #FF5638 35%, #7D171D 70%, transparent 100%)',
            filter: 'blur(75px)',
          }}
        />
        {/* Layer 2: Amber light flare */}
        <div
          className="absolute inset-8 rounded-full animate-fluid-reverse opacity-45 mix-blend-color-dodge"
          style={{
            background:
              'radial-gradient(circle at 55% 55%, #FF8A00 0%, #E8322B 40%, transparent 80%)',
            filter: 'blur(55px)',
          }}
        />
      </div>

      {/* Left Editorial Vertical Rails (Desktop) */}
      <aside
        ref={railsRef}
        className="absolute left-6 sm:left-10 bottom-10 z-30 hidden xl:block pointer-events-auto"
      >
        <div className="flex flex-col gap-10">
          <div className="writing-mode-vertical text-[10px] tracking-[0.4em] text-[#8D8D96] uppercase border-r border-[#8D8D96]/20 pr-2">
            Business Analytics &amp; Finance
          </div>
          <div className="writing-mode-vertical text-[10px] tracking-[0.4em] text-[#8D8D96] uppercase border-r border-[#8D8D96]/20 pr-2">
            MBA Candidate 2025–2027
          </div>
        </div>
      </aside>

      {/* Top Editorial Meta Bar (Stage 1) */}
      <div
        ref={microTextRef}
        className="relative z-10 flex flex-wrap items-center justify-between gap-4 max-w-6xl mx-auto w-full transition-transform duration-200 ease-out"
      >
        <div className="inline-flex items-center space-x-2.5 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-[#FF3B30] animate-pulse" />
          <span className="font-mono-code text-[10px] font-medium tracking-[0.25em] text-neutral-300 uppercase">
            CRAFTING DATA-DRIVEN STRATEGIC IMPACT
          </span>
        </div>

        <div className="flex items-center space-x-6 text-[10px] font-mono-code text-[#8D8D96] tracking-[0.2em] uppercase">
          <span className="flex items-center space-x-1.5">
            <BarChart3 className="w-3 h-3 text-[#FF5638]" />
            <span>BUSINESS ANALYTICS</span>
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center space-x-1.5">
            <TrendingUp className="w-3 h-3 text-[#FF3B30]" />
            <span>FINANCIAL RESEARCH</span>
          </span>
        </div>
      </div>

      {/* Main Massive Editorial Typography Canvas (Stage 2, 3, 4) */}
      <div className="relative z-10 my-auto py-6 max-w-6xl mx-auto w-full flex flex-col justify-center">
        {/* Layer 1 - Condensed Solid First Line (SARON) */}
        <div
          ref={solidTitleRef}
          className="relative transition-transform duration-200 ease-out overflow-visible will-change-transform"
        >
          <h1 className="text-[clamp(3.4rem,11.5vw,9.8rem)] font-heading font-black tracking-[-0.04em] leading-[0.84] text-white opacity-95 uppercase select-none w-full">
            SARON
          </h1>
        </div>

        {/* Layer 2 - Editorial Outlined Stroke Second Line (SIFANA.) */}
        <div
          ref={outlineTitleRef}
          className="relative sm:-mt-2 lg:-mt-3 transition-transform duration-200 ease-out flex flex-col lg:flex-row lg:items-end justify-between gap-8 will-change-transform"
        >
          <div className="text-[clamp(3.4rem,11.5vw,9.8rem)] font-heading font-black tracking-[-0.04em] leading-[0.84] uppercase select-none flex items-baseline border-t border-b border-white/5 py-1">
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.65)',
              }}
            >
              SIFANA
            </span>
            <span className="text-[#FF3B30] text-[clamp(2.2rem,6vw,5.5rem)] font-mono-code ml-2 sm:ml-3">.</span>
          </div>

          {/* Right Floating Strategic Summary (Stage 4) */}
          <div ref={descRef} className="max-w-md lg:pb-3 space-y-4">
            <p className="text-xs sm:text-sm text-[#8D8D96] leading-relaxed tracking-wide font-light">
              {PERSONAL_INFO.headline}
            </p>

            <div
              onClick={onExploreClick}
              onMouseEnter={onMouseEnterButton}
              onMouseLeave={onMouseLeaveButton}
              className="flex items-center gap-4 group cursor-pointer w-fit"
            >
              <span className="w-10 h-[1px] bg-[#FF3B30] transition-all duration-300 group-hover:w-16" />
              <span className="text-[10px] font-mono-code font-bold tracking-[0.25em] text-white uppercase">
                EXPLORE WORK
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar & Editorial Metadata (Stage 5 & 6) */}
      <div
        ref={actionBarRef}
        className="relative z-10 max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-5 border-t border-white/10"
      >
        {/* Interactive CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            id="hero-explore-btn"
            ref={magneticBtnRef}
            onClick={onExploreClick}
            onMouseEnter={onMouseEnterButton}
            onMouseLeave={onMouseLeaveButton}
            className="group relative inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF3B30] to-[#FF5638] text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(255,59,48,0.4)] hover:shadow-[0_0_40px_rgba(255,59,48,0.8)] transition-all duration-300 ease-out cursor-pointer active:scale-95"
          >
            <span>EXPLORE WORK</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <button
            id="hero-connect-btn"
            onClick={onConnectClick}
            onMouseEnter={onMouseEnterButton}
            onMouseLeave={onMouseLeaveButton}
            className="group inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#FF3B30] text-neutral-200 hover:text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer backdrop-blur-sm"
          >
            <span>LET&apos;S CONNECT</span>
            <span className="text-[#FF5638] transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Center Editorial Scroll Line */}
        <div
          onClick={onExploreClick}
          onMouseEnter={onMouseEnterButton}
          onMouseLeave={onMouseLeaveButton}
          className="flex flex-col items-center gap-1.5 cursor-pointer group"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#8D8D96] font-mono-code">SCROLL</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white via-white/40 to-transparent group-hover:h-11 transition-all duration-300" />
        </div>

        {/* Bottom Right Academic Metadata */}
        <div ref={academicRef} className="hidden md:flex flex-col items-end gap-0.5 font-mono-code">
          <div className="text-[10px] font-bold tracking-[0.2em] text-[#8D8D96] uppercase">
            ST. JOSEPH&apos;S INSTITUTE OF TECHNOLOGY
          </div>
          <div className="text-[10px] font-bold tracking-[0.2em] text-[#FF3B30] uppercase">
            MBA • 2025–2027
          </div>
        </div>
      </div>
    </section>
  );
};

