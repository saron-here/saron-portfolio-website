import React, { useEffect, useRef } from 'react';

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Organic dynamic floating particles/ambient light nodes
    const particles = Array.from({ length: 24 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2 + 0.8,
      alpha: Math.random() * 0.35 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 86, 56, ${p.alpha * 0.45})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Deep Canvas */}
      <div className="absolute inset-0 bg-[#050507]" />

      {/* Primary Organic Liquid Red/Orange Glowing Mesh 1 - Morphing and rotating */}
      <div
        data-glow-reactive="true"
        className="absolute top-[-15%] right-[-10%] w-[650px] sm:w-[900px] h-[650px] sm:h-[900px] rounded-full animate-fluid opacity-25 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 40% 40%, #FF3B30 0%, #FF5638 35%, #7D171D 70%, transparent 100%)',
          filter: 'blur(130px)',
        }}
      />

      {/* Secondary Organic Liquid Red/Amber Glow Mesh 2 (Deep lower left) */}
      <div
        data-glow-reactive="true"
        className="absolute bottom-[5%] left-[-10%] w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] rounded-full animate-fluid-reverse opacity-20 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #E8322B 0%, #B51F24 45%, #7D171D 75%, transparent 100%)',
          filter: 'blur(120px)',
        }}
      />

      {/* Tertiary Subtle Center Pulse Orb */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] sm:w-[750px] h-[350px] sm:h-[500px] rounded-full opacity-15 mix-blend-color-dodge pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 90, 40, 0.4) 0%, rgba(255, 59, 48, 0.15) 50%, transparent 80%)',
          filter: 'blur(140px)',
          animation: 'pulse 8s ease-in-out infinite',
        }}
      />

      {/* Ambient Micro-Star Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      {/* Subtle Cinematic Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#050507]/40 to-[#050507]/90 pointer-events-none" />

      {/* High-Precision Editorial Fractal Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
