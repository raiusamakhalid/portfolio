import React from 'react';
import ExperienceEntry from './ExperienceEntry';

const ExperienceSection = ({ experiences }) => {
  return (
    <section>
      <h2 className="font-serif text-l mb-12 tracking-wide uppercase text-zinc-700">
        Professional Experience
      </h2>
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <ExperienceEntry key={index} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

