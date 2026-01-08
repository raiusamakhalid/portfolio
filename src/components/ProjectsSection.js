import React from 'react';
import ProjectEntry from './ProjectEntry';

const ProjectsSection = ({ projects }) => {
  return (
    <section>
      <h2 className="font-serif text-l mb-12 tracking-wide uppercase text-zinc-700">
        Portfolio
      </h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectEntry key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

