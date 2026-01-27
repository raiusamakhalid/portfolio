import React from 'react';
import TechIcon from './TechIcon';
import { techIconsByCategory } from '../data/techIcons';

const SkillsSection = () => {
  const categories = ['Frontend', 'Backend', 'Blockchain', 'Databases', 'Tools'];

  return (
    <section>
      <h2 className="font-serif text-l mb-12 tracking-wide uppercase text-zinc-700">
        Technical Skills & Technologies
      </h2>
      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="font-serif text-sm font-medium tracking-wide uppercase text-zinc-600 mb-6">
              {category}:
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6">
              {techIconsByCategory[category].map((tech, index) => (
                <TechIcon key={index} name={tech.name} iconPath={tech.iconPath} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
