import React from 'react';
import StarsCanvas from './components/StarsCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import ChatBot from './components/ChatBot';

import { aboutMe } from './data/aboutMe';
import { experiences } from './data/experiences';
import { projects } from './data/projects';
import './App.css';

const App = () => {
  return (
    <div className="relative min-h-screen" style={{ background: '#0D0E17', fontFamily: 'Poppins, sans-serif' }}>
      {/* Ambient gradient blobs — fixed, span full page */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        {/* Left pink/purple glow */}
        <div style={{
          position: 'absolute',
          top: '5%',
          left: '-20%',
          width: '65%',
          height: '65%',
          background: 'radial-gradient(circle, rgba(180,60,200,0.07) 0%, transparent 68%)',
        }} />
        {/* Right neon-green glow */}
        <div style={{
          position: 'absolute',
          top: '35%',
          right: '-18%',
          width: '58%',
          height: '58%',
          background: 'radial-gradient(circle, rgba(163,199,47,0.07) 0%, transparent 68%)',
        }} />
        {/* Bottom left secondary green */}
        <div style={{
          position: 'absolute',
          bottom: '5%',
          left: '-10%',
          width: '45%',
          height: '45%',
          background: 'radial-gradient(circle, rgba(163,199,47,0.04) 0%, transparent 70%)',
        }} />
      </div>

      <StarsCanvas />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar name={aboutMe.name} />
        <HeroSection aboutMe={aboutMe} />
        <AboutSection description={aboutMe.description} />
        <SkillsSection />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <EducationSection />
        <ContactSection aboutMe={aboutMe} />
      </div>
      <ChatBot />
    </div>
  );
};

export default App;
