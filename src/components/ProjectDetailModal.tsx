import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, CheckCircle2, ArrowUpRight, Sparkles, Layers, Cpu, BarChart2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onMouseEnterButton?: () => void;
  onMouseLeaveButton?: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onMouseEnterButton,
  onMouseLeaveButton,
}) => {
  // Explicitly manage body overflow and reset on unmount
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  // Escape key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      onClick={onClose}
      className="fixed inset-0 z-[9995] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#050507]/90 backdrop-blur-xl animate-in fade-in duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#0A0B0E] border border-white/10 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col"
      >
        {/* Glowing Top Accent Line */}
        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
          }}
        />

        {/* Modal Header */}
        <div className="px-6 sm:px-10 py-6 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="font-mono-code text-sm font-bold text-[#FF5638]">
              PROJECT {project.number}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono-code text-neutral-300 uppercase">
              {project.category}
            </span>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            onMouseEnter={onMouseEnterButton}
            onMouseLeave={onMouseLeaveButton}
            className="group p-2.5 rounded-full bg-white/5 hover:bg-[#FF3B30]/15 border border-white/10 hover:border-[#FF3B30] text-neutral-300 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10">
          {/* Title and Subtitle */}
          <div>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white tracking-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-base text-neutral-400 font-light">
              {project.subtitle}
            </p>
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  {m.value}
                </span>
                <span className="text-[11px] font-mono-code text-neutral-400 mt-1">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Full Overview */}
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-code text-[#FF5638] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROJECT OVERVIEW</span>
            </div>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              {project.fullOverview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/5 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono-code text-rose-400 uppercase">
                <Layers className="w-4 h-4" />
                <span>BUSINESS CHALLENGE</span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.015] border border-white/5 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono-code text-emerald-400 uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>ANALYTICAL SOLUTION</span>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technologies & Tools */}
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-code text-neutral-400 uppercase mb-4">
              <Cpu className="w-3.5 h-3.5 text-[#FF5638]" />
              <span>TOOLS &amp; METHODOLOGY</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono-code text-neutral-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-10 py-5 bg-black/40 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs font-mono-code text-neutral-500">
            <BarChart2 className="w-3.5 h-3.5 text-[#FF3B30]" />
            <span>PORTFOLIO VERIFIED PROJECT • SARON SIFANA S</span>
          </div>

          <button
            onClick={onClose}
            onMouseEnter={onMouseEnterButton}
            onMouseLeave={onMouseLeaveButton}
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-[#FF3B30] text-white font-heading font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer"
          >
            <span>CLOSE PREVIEW</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
