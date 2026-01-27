import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectEntry = ({ project }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-md mb-2 text-zinc-900">
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

        {project.client && (
          <p className="text-xs text-zinc-500 mb-4 uppercase tracking-wide">
            Client: {project.client}
          </p>
        )}

        {project.overview && (
          <p className="text-sm text-zinc-700 mb-4 leading-relaxed">
            {project.overview}
          </p>
        )}

        {project.description && (
          <p className="text-sm text-zinc-600 mb-4 italic">
            {project.description}
          </p>
        )}

        {project.keyFeatures && (
          <div className="mb-4">
            <h4 className="text-xs font-medium text-zinc-700 uppercase tracking-wide mb-2">
              Key Features
            </h4>
            <ul className="text-sm text-zinc-600 space-y-1.5 list-disc list-inside">
              {project.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.role && (
          <div className="mb-4">
            <h4 className="text-xs font-medium text-zinc-700 uppercase tracking-wide mb-2">
              My Role
            </h4>
            <ul className="text-sm text-zinc-600 space-y-1.5 list-disc list-inside">
              {project.role.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        )}

        {project.technologies && (
          <div className="mb-4">
            <h4 className="text-xs font-medium text-zinc-700 uppercase tracking-wide mb-2">
              Tech Stack
            </h4>
            <div className="flex gap-2 flex-wrap">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs text-zinc-600 px-2 py-1 bg-zinc-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-6 mt-2">
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
      </div>
    </div>
  );
};

export default ProjectEntry;

