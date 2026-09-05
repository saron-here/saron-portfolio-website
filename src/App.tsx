import React, { useState, useEffect } from 'react';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { FullscreenMenu } from './components/FullscreenMenu';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Philosophy } from './components/Philosophy';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectItem } from './types';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Ensure body scroll is auto by default, locked ONLY when menu or modal is active
  useEffect(() => {
    if (isMenuOpen || selectedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, selectedProject]);

  // Cursor state
  const [cursorVariant, setCursorVariant] = useState<
    'default' | 'pointer' | 'project' | 'button' | 'hidden' | 'nav'
  >('default');
  const [cursorText, setCursorText] = useState<string | undefined>(undefined);

  // Handlers for cursor hover states
  const handleMouseEnterButton = () => {
    setCursorVariant('button');
  };

  const handleMouseLeaveButton = () => {
    setCursorVariant('default');
  };

  const handleMouseEnterProject = () => {
    setCursorVariant('project');
    setCursorText('VIEW');
  };

  const handleMouseLeaveProject = () => {
    setCursorVariant('default');
    setCursorText(undefined);
  };

  const handleMouseEnterNav = () => {
    setCursorVariant('nav');
  };

  const handleMouseLeaveNav = () => {
    setCursorVariant('default');
  };

  const handleMouseEnterItem = () => {
    setCursorVariant('pointer');
  };

  const handleMouseLeaveItem = () => {
    setCursorVariant('default');
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard escape handler for modals / menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedProject) setSelectedProject(null);
        if (isMenuOpen) setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, isMenuOpen]);

  return (
    <div className="relative min-h-screen w-full bg-[#050507] text-[#F5F5F5] selection:bg-[#FF3B30] selection:text-white">
      {/* 0. Cinematic Fullscreen Loader & Staged Transition */}
      {loading && (
        <Loader onComplete={() => setLoading(false)} />
      )}

      {/* 1. Custom Physical Cursor Engine */}
      <CustomCursor cursorVariant={cursorVariant} cursorText={cursorText} />

      {/* 2. Fluid Organic Background Effects & Mesh */}
      <BackgroundEffects />

      {/* 3. Top Sticky Cinematic Navbar */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onMouseEnterButton={handleMouseEnterButton}
        onMouseLeaveButton={handleMouseLeaveButton}
      />

      {/* 4. Fullscreen Cinematic Navigation Menu */}
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        onMouseEnterNav={handleMouseEnterNav}
        onMouseLeaveNav={handleMouseLeaveNav}
      />

      {/* 5. Main Document Content Flow */}
      <main className="relative z-10 w-full">
        {/* SECTION 1: HOME (HERO with Staged Reveal) */}
        <Hero
          isLoaded={!loading}
          onExploreClick={() => handleNavigate('projects')}
          onConnectClick={() => handleNavigate('contact')}
          onMouseEnterButton={handleMouseEnterButton}
          onMouseLeaveButton={handleMouseLeaveButton}
        />

        {/* SECTION 2: ABOUT */}
        <About
          onMouseEnterItem={handleMouseEnterItem}
          onMouseLeaveItem={handleMouseLeaveItem}
        />

        {/* SECTION 3: STRATEGY & PHILOSOPHY */}
        <Philosophy
          onMouseEnterItem={handleMouseEnterItem}
          onMouseLeaveItem={handleMouseLeaveItem}
        />

        {/* SECTION 4: INTERNSHIP & CAREER EXPERIENCE */}
        <Experience
          onMouseEnterItem={handleMouseEnterItem}
          onMouseLeaveItem={handleMouseLeaveItem}
        />

        {/* SECTION 5: FEATURED ANALYTICS & BI PROJECTS */}
        <Projects
          onSelectProject={(p) => setSelectedProject(p)}
          onMouseEnterProject={handleMouseEnterProject}
          onMouseLeaveProject={handleMouseLeaveProject}
        />

        {/* SECTION 6: SKILLS & TOOLSET */}
        <Skills
          onMouseEnterItem={handleMouseEnterItem}
          onMouseLeaveItem={handleMouseLeaveItem}
        />

        {/* SECTION 7: VERIFIED CERTIFICATIONS */}
        <Certifications
          onMouseEnterItem={handleMouseEnterItem}
          onMouseLeaveItem={handleMouseLeaveItem}
        />

        {/* SECTION 8: LEADERSHIP & ACHIEVEMENTS */}
        <Achievements
          onMouseEnterItem={handleMouseEnterItem}
          onMouseLeaveItem={handleMouseLeaveItem}
        />

        {/* SECTION 9: DIRECT CONTACT */}
        <Contact
          onMouseEnterButton={handleMouseEnterButton}
          onMouseLeaveButton={handleMouseLeaveButton}
        />
      </main>

      {/* 6. Footer */}
      <Footer
        onMouseEnterButton={handleMouseEnterButton}
        onMouseLeaveButton={handleMouseLeaveButton}
      />

      {/* 7. Deep-Dive Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onMouseEnterButton={handleMouseEnterButton}
        onMouseLeaveButton={handleMouseLeaveButton}
      />
    </div>
  );
}

