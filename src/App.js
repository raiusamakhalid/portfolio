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

import { aboutMe } from './data/aboutMe';
import { experiences } from './data/experiences';
import { projects } from './data/projects';
import './App.css';

const App = () => {
  return (
    <div className="relative min-h-screen" style={{ background: '#050816', fontFamily: 'Poppins, sans-serif' }}>
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
    </div>
  );
};

export default App;
