import React, { useEffect, useRef } from 'react';

interface CustomCursorProps {
  cursorVariant: 'default' | 'pointer' | 'project' | 'button' | 'hidden' | 'nav';
  cursorText?: string;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorVariant, cursorText }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Physics positions
  const mousePos = useRef({ x: -200, y: -200 });
  const glowPos = useRef({ x: -200, y: -200 });
  const trailPositions = useRef<{ x: number; y: number }[]>(
    Array.from({ length: 6 }, () => ({ x: -200, y: -200 }))
  );

  useEffect(() => {
    // Hide cursor on touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (isTouch && containerRef.current) {
      containerRef.current.style.display = 'none';
      return;
    }

    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        isVisible = true;
        if (containerRef.current) {
          containerRef.current.style.opacity = '1';
        }
      }
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (containerRef.current) {
        containerRef.current.style.opacity = '0';
      }
    };

    const handleMouseEnter = () => {
      isVisible = true;
      if (containerRef.current) {
        containerRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    let animationFrameId: number;

    // Direct DOM animation loop (zero React state updates)
    const render = () => {
      glowPos.current.x += (mousePos.current.x - glowPos.current.x) * 0.2;
      glowPos.current.y += (mousePos.current.y - glowPos.current.y) * 0.2;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0)`;
      }

      for (let i = 0; i < trailPositions.current.length; i++) {
        const target = i === 0 ? mousePos.current : trailPositions.current[i - 1];
        const lerpFactor = 0.25 - i * 0.03;
        trailPositions.current[i].x += (target.x - trailPositions.current[i].x) * Math.max(lerpFactor, 0.08);
        trailPositions.current[i].y += (target.y - trailPositions.current[i].y) * Math.max(lerpFactor, 0.08);

        const el = trailRefs.current[i];
        if (el) {
          el.style.transform = `translate3d(${trailPositions.current[i].x}px, ${trailPositions.current[i].y}px, 0)`;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (cursorVariant === 'hidden') return null;

  const isProject = cursorVariant === 'project';
  const isButton = cursorVariant === 'button';
  const isPointer = cursorVariant === 'pointer';
  const isNav = cursorVariant === 'nav';

  return (
    <div
      id="custom-cursor-engine"
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[9999] opacity-0 transition-opacity duration-300 select-none"
    >
      {/* Trailing Particles */}
      {!isProject &&
        trailPositions.current.map((_, index) => (
          <div
            key={`trail-${index}`}
            ref={(el) => (trailRefs.current[index] = el)}
            className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none bg-[#FF5638]"
            style={{
              width: `${Math.max(6 - index, 2)}px`,
              height: `${Math.max(6 - index, 2)}px`,
              opacity: 0.35 - index * 0.05,
              filter: 'blur(0.5px)',
            }}
          />
        ))}

      {/* Atmospheric Orange/Red Fluid Glow Orb */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out pointer-events-none"
        style={{
          width: isProject ? '110px' : isButton ? '75px' : '48px',
          height: isProject ? '110px' : isButton ? '75px' : '48px',
          background: isProject
            ? 'radial-gradient(circle, rgba(255, 59, 48, 0.45) 0%, rgba(255, 86, 56, 0.15) 60%, transparent 80%)'
            : 'radial-gradient(circle, rgba(255, 86, 56, 0.28) 0%, rgba(232, 50, 43, 0.10) 60%, transparent 80%)',
          filter: 'blur(12px)',
        }}
      />

      {/* Primary Interactive Focal Dot / Ring / Project Disc */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 ease-out pointer-events-none"
        style={{
          width: isProject ? '76px' : isButton ? '48px' : isNav ? '36px' : isPointer ? '20px' : '8px',
          height: isProject ? '76px' : isButton ? '48px' : isNav ? '36px' : isPointer ? '20px' : '8px',
        }}
      >
        {isProject ? (
          <div className="w-full h-full rounded-full bg-[#FF3B30] text-white flex items-center justify-center text-[10px] font-heading font-extrabold tracking-widest shadow-[0_0_25px_rgba(255,59,48,0.7)] animate-pulse pointer-events-none">
            {cursorText || 'VIEW'}
          </div>
        ) : isButton ? (
          <div className="w-full h-full rounded-full border-2 border-[#FF5638] bg-[#050507]/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_16px_rgba(255,86,56,0.5)] pointer-events-none">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF5638] shadow-[0_0_6px_#FF5638] pointer-events-none" />
          </div>
        ) : isNav ? (
          <div className="w-full h-full rounded-full border border-white/70 bg-white/5 backdrop-blur-xs pointer-events-none" />
        ) : isPointer ? (
          <div className="w-full h-full rounded-full border border-[#FF3B30] bg-[#FF3B30]/20 scale-90 transition-transform pointer-events-none" />
        ) : (
          <div className="w-full h-full rounded-full bg-white transition-colors duration-200 shadow-[0_0_8px_rgba(255,255,255,0.8)] pointer-events-none" />
        )}
      </div>
    </div>
  );
};
