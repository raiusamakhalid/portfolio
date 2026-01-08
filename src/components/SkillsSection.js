import React from 'react';
import TechIcon from './TechIcon';
import { techIcons } from '../data/techIcons';

const SkillsSection = () => {
  return (
    <section>
      <h2 className="font-serif text-l mb-12 tracking-wide uppercase text-zinc-700">
        Technical Skills
      </h2>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6">
        {techIcons.map((tech, index) => (
          <TechIcon key={index} name={tech.name} iconPath={tech.iconPath} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
