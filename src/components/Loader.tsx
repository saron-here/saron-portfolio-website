import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const hasCompleted = useRef(false);

  const safeComplete = () => {
    if (!hasCompleted.current) {
      hasCompleted.current = true;
      onComplete();
    }
  };

  useEffect(() => {
    // Safety fallback timeout: under NO circumstances will the loader stay past 3.0s
    const fallbackTimer = setTimeout(() => {
      safeComplete();
    }, 3000);

    const startTime = performance.now();
    const duration = 1200; // Snappy 1.2s smooth count-up

    let animationFrameId: number;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth custom ease: cubic ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easedProgress * 100);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        setIsExiting(true);

        // Brief pause at 100 before triggering the cinematic flash & wipe
        setTimeout(() => {
          if (!containerRef.current) {
            safeComplete();
            return;
          }

          const tl = gsap.timeline({
            onComplete: () => {
              clearTimeout(fallbackTimer);
              safeComplete();
            },
          });

          // 1. Numbers scale up and pulse
          tl.to(numberRef.current, {
            scale: 1.08,
            y: -10,
            opacity: 1,
            duration: 0.25,
            ease: 'power2.out',
          })
            // 2. Cinematic dark-red energy flash burst
            .to(
              flashRef.current,
              {
                opacity: 0.9,
                scale: 1.6,
                duration: 0.2,
                ease: 'power2.in',
              },
              '-=0.15'
            )
            // 3. Fade out the metadata and line
            .to(
              [metaRef.current, lineRef.current],
              {
                opacity: 0,
                y: 10,
                duration: 0.2,
                ease: 'power2.in',
              },
              '-=0.2'
            )
            // 4. Flash diffuses out
            .to(
              flashRef.current,
              {
                opacity: 0,
                scale: 2.2,
                duration: 0.35,
                ease: 'power3.out',
              },
              '+=0.02'
            )
            // 5. High-end curtain reveal wipe (clip-path upwards with exponential easing)
            .to(
              containerRef.current,
              {
                clipPath: 'inset(0 0 100% 0)',
                duration: 0.65,
                ease: 'expo.inOut',
              },
              '-=0.3'
            );
        }, 180);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      clearTimeout(fallbackTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Format with leading zero
  const formattedCount = count < 10 ? `0${count}` : `${count}`;

  return (
    <div
      id="loader-screen"
      ref={containerRef}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050507] text-[#F5F5F5] select-none [clip-path:inset(0_0_0_0)] ${
        isExiting ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
    >
      {/* Background Cinematic Flare Glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-radial from-[#FF3B30]/35 via-[#FF5638]/15 to-transparent blur-[100px]" />
      </div>

      {/* Cinematic Red Flash Burst Layer (Expands when 100 is reached) */}
      <div
        ref={flashRef}
        className="absolute inset-0 pointer-events-none opacity-0 flex items-center justify-center"
      >
        <div className="w-[700px] h-[500px] bg-radial from-[#FF3B30]/80 via-[#FF5638]/30 to-transparent blur-[80px] rounded-full" />
      </div>

      {/* Main Center Container */}
      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
        {/* Large Cinematic Number Display */}
        <div ref={numberRef} className="relative flex items-center justify-center will-change-transform">
          <span className="font-heading font-black text-7xl sm:text-8xl md:text-9xl tracking-tighter text-[#F5F5F5] drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            {formattedCount}
          </span>
          {/* Subtle colored glow clone */}
          <span className="absolute inset-0 font-heading font-black text-7xl sm:text-8xl md:text-9xl tracking-tighter text-[#FF3B30]/30 blur-lg pointer-events-none select-none">
            {formattedCount}
          </span>
        </div>

        {/* Thin Horizontal Progress Line */}
        <div
          ref={lineRef}
          className="w-56 sm:w-72 h-[2px] bg-white/10 rounded-full mt-6 sm:mt-8 overflow-hidden relative"
        >
          <div
            className="h-full bg-gradient-to-r from-[#FF3B30] via-[#FF5638] to-[#FF8A00] transition-all duration-75 ease-out shadow-[0_0_12px_#FF3B30]"
            style={{ width: `${count}%` }}
          />
        </div>

        {/* Monospace Brand Typography */}
        <div ref={metaRef} className="mt-5 sm:mt-6 flex flex-col items-center space-y-1.5 text-center">
          <span className="font-mono-code text-[10px] sm:text-xs tracking-[0.35em] text-neutral-300 font-medium uppercase">
            SARON SIFANA S
          </span>
          <span className="font-mono-code text-[8px] sm:text-[9px] tracking-[0.25em] text-[#FF5638] uppercase font-bold">
            MBA • 2025–2027
          </span>
        </div>
      </div>

      {/* Subtle bottom status tag */}
      <div className="absolute bottom-8 text-[9px] font-mono-code text-neutral-600 tracking-widest uppercase pointer-events-none">
        INITIALIZING CORE INTELLIGENCE [{formattedCount}%]
      </div>
    </div>
  );
};

