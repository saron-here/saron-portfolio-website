import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ArrowUpRight, BarChart3, Filter, PieChart, Layers, Eye, Sparkles } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
  onMouseEnterProject: (title: string) => void;
  onMouseLeaveProject: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  onSelectProject,
  onMouseEnterProject,
  onMouseLeaveProject,
}) => {
  // Interactive Filter States for the simulated Power BI Dashboard
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedSegment, setSelectedSegment] = useState<string>('All');

  // Dynamic numbers based on filters
  const getBiMetrics = () => {
    if (selectedRegion === 'West') return { sales: '0.72M', profit: '$108K', qty: '14.2K', orders: '1,890' };
    if (selectedRegion === 'East') return { sales: '0.67M', profit: '$91K', qty: '12.8K', orders: '1,620' };
    if (selectedRegion === 'Central') return { sales: '0.50M', profit: '$58K', qty: '9.4K', orders: '1,120' };
    if (selectedRegion === 'South') return { sales: '0.39M', profit: '$29K', qty: '7.1K', orders: '840' };
    return { sales: '2.0M+', profit: '$286K', qty: '38K', orders: '5,009' };
  };

  const biMetrics = getBiMetrics();

  return (
    <section
      id="projects"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 border-t border-white/5 overflow-hidden"
    >
      {/* Background Red Ambient Aura */}
      <div
        data-glow-reactive="true"
        className="absolute top-1/3 right-[-10%] w-[700px] h-[700px] bg-radial from-[#FF3B30]/10 via-[#FF5638]/5 to-transparent blur-[160px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#FF3B30]" />
              <span className="font-mono-code text-xs font-semibold tracking-widest text-[#FF5638] uppercase">
                PORTFOLIO SHOWCASE
              </span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-6xl text-[#F5F5F5] tracking-tight uppercase">
              SELECTED WORK
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Curated business intelligence dashboards, financial research models, and automated machine learning solutions.
          </p>
        </div>

        {/* Projects List - Large Editorial Stages */}
        <div className="space-y-24 sm:space-y-36">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              onMouseEnter={() => onMouseEnterProject(project.title)}
              onMouseLeave={onMouseLeaveProject}
              className="group relative rounded-3xl border border-white/10 hover:border-[#FF3B30]/50 bg-[#08090D]/80 backdrop-blur-md p-6 sm:p-10 lg:p-14 transition-all duration-700 cursor-pointer overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
            >
              {/* Subtle Red Ambient Mesh inside card */}
              <div
                className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-radial from-[#FF3B30]/15 to-transparent blur-[100px] group-hover:opacity-100 opacity-40 transition-opacity duration-700 pointer-events-none"
              />

              {/* Project Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center space-x-4">
                  <span className="font-mono-code text-lg sm:text-xl font-black text-[#FF5638]">
                    {project.number}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="font-mono-code text-xs tracking-widest text-neutral-400 uppercase">
                    {project.category}
                  </span>
                </div>

                <div className="inline-flex items-center space-x-2 text-xs font-mono-code text-neutral-400 group-hover:text-white transition-colors">
                  <span>VIEW DETAILS</span>
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/15 group-hover:border-[#FF3B30] group-hover:bg-[#FF3B30] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Project Title and Description */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
                <div className="lg:col-span-7">
                  <h3 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight group-hover:text-[#F5F5F5] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono-code text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics Columns */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-center"
                    >
                      <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                        {metric.value}
                      </span>
                      <span className="text-[11px] font-mono-code text-neutral-400 mt-1">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Showcase Stage */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#050507] p-5 sm:p-8">
                {project.visualType === 'powerbi' ? (
                  /* Interactive Simulated Power BI Dashboard */
                  <div className="space-y-6">
                    {/* Top KPI Cards matching exact user data */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                      <div className="p-4 rounded-xl bg-[#0D0E12] border border-white/10 flex flex-col">
                        <span className="text-[10px] font-mono-code text-neutral-400 uppercase">Total Sales</span>
                        <span className="font-heading font-black text-2xl sm:text-3xl text-[#FF5638] mt-1">
                          {biMetrics.sales}
                        </span>
                        <span className="text-[9px] font-mono-code text-emerald-400 mt-1">▲ +14.2% YoY</span>
                      </div>
                      <div className="p-4 rounded-xl bg-[#0D0E12] border border-white/10 flex flex-col">
                        <span className="text-[10px] font-mono-code text-neutral-400 uppercase">Total Profit</span>
                        <span className="font-heading font-black text-2xl sm:text-3xl text-white mt-1">
                          {biMetrics.profit}
                        </span>
                        <span className="text-[9px] font-mono-code text-emerald-400 mt-1">14.3% Margin</span>
                      </div>
                      <div className="p-4 rounded-xl bg-[#0D0E12] border border-white/10 flex flex-col">
                        <span className="text-[10px] font-mono-code text-neutral-400 uppercase">Total Quantity</span>
                        <span className="font-heading font-black text-2xl sm:text-3xl text-white mt-1">
                          {biMetrics.qty}
                        </span>
                        <span className="text-[9px] font-mono-code text-neutral-500 mt-1">Units Shipped</span>
                      </div>
                      <div className="p-4 rounded-xl bg-[#0D0E12] border border-white/10 flex flex-col">
                        <span className="text-[10px] font-mono-code text-neutral-400 uppercase">Total Orders</span>
                        <span className="font-heading font-black text-2xl sm:text-3xl text-white mt-1">
                          {biMetrics.orders}
                        </span>
                        <span className="text-[9px] font-mono-code text-neutral-500 mt-1">Completed</span>
                      </div>
                    </div>

                    {/* Interactive Filter Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono-code">
                      <div className="flex items-center space-x-2 text-neutral-400">
                        <Filter className="w-3.5 h-3.5 text-[#FF3B30]" />
                        <span>INTERACTIVE SLICER:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['All', 'West', 'East', 'Central', 'South'].map((region) => (
                          <button
                            key={region}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedRegion(region);
                            }}
                            className={`px-3 py-1 rounded-md text-[11px] font-medium transition-all ${
                              selectedRegion === region
                                ? 'bg-[#FF3B30] text-white font-bold'
                                : 'bg-white/5 hover:bg-white/10 text-neutral-300'
                            }`}
                          >
                            {region}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Charts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Sales by Region Bar Chart */}
                      <div className="p-4 rounded-xl bg-[#0B0C10] border border-white/5 space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400">
                          <span className="text-neutral-200 font-semibold">Sales by Region</span>
                          <BarChart3 className="w-3.5 h-3.5 text-[#FF5638]" />
                        </div>
                        <div className="space-y-2 pt-2">
                          {[
                            { name: 'West', val: '0.72M', width: '85%' },
                            { name: 'East', val: '0.67M', width: '78%' },
                            { name: 'Central', val: '0.50M', width: '60%' },
                            { name: 'South', val: '0.39M', width: '45%' },
                          ].map((item, idx) => (
                            <div key={idx} className="space-y-1">
                              <div className="flex justify-between text-[10px] font-mono-code text-neutral-400">
                                <span>{item.name}</span>
                                <span className="text-neutral-200 font-semibold">{item.val}</span>
                              </div>
                              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-[#FF3B30] to-[#FF8A00] rounded-full"
                                  style={{ width: item.width }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Sales by Segment Donut Breakdown */}
                      <div className="p-4 rounded-xl bg-[#0B0C10] border border-white/5 space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400">
                          <span className="text-neutral-200 font-semibold">Sales by Segment</span>
                          <PieChart className="w-3.5 h-3.5 text-[#FF8A00]" />
                        </div>
                        <div className="flex items-center justify-center py-2">
                          <div className="relative w-24 h-24 rounded-full border-8 border-[#FF3B30] border-r-[#FF8A00] border-b-[#E8322B] flex items-center justify-center">
                            <span className="font-heading font-black text-xs text-white">50.5%</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-[9px] font-mono-code text-center">
                          <div className="text-neutral-300">Consumer<br/><span className="text-[#FF3B30] font-bold">50.5%</span></div>
                          <div className="text-neutral-300">Corporate<br/><span className="text-[#FF8A00] font-bold">30.7%</span></div>
                          <div className="text-neutral-300">Home Off.<br/><span className="text-[#E8322B] font-bold">18.7%</span></div>
                        </div>
                      </div>

                      {/* Profit by Category */}
                      <div className="p-4 rounded-xl bg-[#0B0C10] border border-white/5 space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400">
                          <span className="text-neutral-200 font-semibold">Profit by Category</span>
                          <Layers className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <div className="space-y-2.5 pt-2">
                          {[
                            { cat: 'Technology', profit: '$145K', color: 'bg-[#FF3B30]' },
                            { cat: 'Office Supplies', profit: '$122K', color: 'bg-[#FF8A00]' },
                            { cat: 'Furniture', profit: '$19K', color: 'bg-neutral-500' },
                          ].map((c, i) => (
                            <div key={i} className="flex items-center justify-between text-[11px] font-mono-code p-2 rounded-lg bg-white/5">
                              <span className="text-neutral-300">{c.cat}</span>
                              <span className="text-white font-bold">{c.profit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : project.visualType === 'ai' ? (
                  /* AI NLP & Machine Learning Simulation Canvas */
                  <div className="p-6 rounded-xl bg-[#0A0B0E] border border-white/5 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400 pb-3 border-b border-white/5">
                      <span className="text-neutral-200 flex items-center space-x-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#FF3B30]" />
                        <span>AI Inference &amp; Neural Processing Pipeline</span>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px]">
                        ● ACTIVE STREAM
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                        <span className="text-[10px] font-mono-code text-neutral-400">Input Data Extraction</span>
                        <div className="text-xs font-mono-code text-neutral-300">
                          Structured Resume / Optical Frames
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[#FF3B30] w-full animate-pulse" />
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                        <span className="text-[10px] font-mono-code text-neutral-400">NLP Semantic Fit / CNN</span>
                        <div className="text-xs font-mono-code text-white font-semibold">
                          Match Score: 94.8%
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#FF3B30] to-[#FF8A00] w-[94%]" />
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                        <span className="text-[10px] font-mono-code text-neutral-400">Inference Latency</span>
                        <div className="text-xs font-mono-code text-emerald-400 font-bold">
                          &lt; 200 ms Real-time
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-400 w-4/5" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Financial & Analytics Visual Canvas */
                  <div className="p-6 rounded-xl bg-[#0A0B0E] border border-white/5 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400 pb-3 border-b border-white/5">
                      <span className="text-neutral-200">Financial Valuation &amp; Risk Metrics</span>
                      <span className="text-[#FF5638]">DCF &amp; SHARPE RATIO</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                      <div className="p-3 rounded-lg bg-white/5">
                        <span className="text-[10px] font-mono-code text-neutral-400">Intrinsic Value</span>
                        <div className="text-base font-bold text-white mt-1">+24.5% Upside</div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5">
                        <span className="text-[10px] font-mono-code text-neutral-400">Beta Coeff</span>
                        <div className="text-base font-bold text-white mt-1">0.88 (Low Vol)</div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5">
                        <span className="text-[10px] font-mono-code text-neutral-400">Sharpe Ratio</span>
                        <div className="text-base font-bold text-[#FF5638] mt-1">1.92</div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5">
                        <span className="text-[10px] font-mono-code text-neutral-400">Confidence</span>
                        <div className="text-base font-bold text-emerald-400 mt-1">95% CI</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
