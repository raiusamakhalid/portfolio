import React from 'react';

const ExperienceEntry = ({ experience }) => {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{experience.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-base font-serif text-zinc-900">
          {experience.title} — {experience.company}
        </h3>
        {experience.description && (
          <p className="text-sm text-zinc-600 leading-relaxed mt-2">
            {experience.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ExperienceEntry;

