import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectEntry = ({ project }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-md mb-3 text-zinc-900">
          {project.projectUrl ? (
            <a
              href={project.projectUrl}
              className="group inline-flex items-center gap-2 hover:text-zinc-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            project.title
          )}
        </h3>

        {project.technologies && (
          <div className="flex gap-2 mb-4 flex-wrap">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="text-xs text-zinc-600 px-2 py-1 bg-zinc-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-6 mb-4">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Project</span>
            </a>
          )}
        </div>
        <p className="text-sm text-zinc-600 mb-4 mt-4 italic">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectEntry;

