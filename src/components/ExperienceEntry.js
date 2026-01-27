import React from 'react';

const ExperienceEntry = ({ experience }) => {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{experience.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-base font-serif text-zinc-900">
          {experience.title} — {experience.company}
        </h3>
        {experience.clients && (
          <p className="text-xs font-semibold text-zinc-700 uppercase tracking-wide mt-1 mb-2">
            Clients: {experience.clients}
          </p>
        )}
        {experience.location && (
          <p className="text-xs text-zinc-500 mt-1 mb-2">
            {experience.location}
          </p>
        )}
        {experience.summary && (
          <p className="text-sm text-zinc-600 leading-relaxed mt-2 italic">
            {experience.summary}
          </p>
        )}
        {experience.bullets && (
          <ul className="text-sm text-zinc-600 leading-relaxed mt-3 space-y-1.5 list-disc list-inside">
            {experience.bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        )}
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

