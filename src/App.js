import React from 'react';
import ProfileSection from './components/ProfileSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import { aboutMe } from './data/aboutMe';
import { experiences } from './data/experiences';
import { projects } from './data/projects';

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            <ProfileSection aboutMe={aboutMe} />
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">
            <AboutSection description={aboutMe.description} />
            <SkillsSection />
            <ExperienceSection experiences={experiences} />
            <ProjectsSection projects={projects} />
          </div>
        </div>
      </div>

      <Footer name={aboutMe.name} />
    </div>
  );
};

export default App;
