import React from 'react';
import { motion } from 'framer-motion';
import ProjectEntry from './ProjectEntry';
import { AnimatedSection, StaggerContainer, itemVariants } from './AnimatedSection';

const ProjectsSection = ({ projects }) => {
  return (
    <AnimatedSection>
      <h2 className="font-serif text-l mb-12 tracking-wide uppercase text-zinc-700">
        Projects & Portfolio
      </h2>
      <StaggerContainer className="space-y-12" stagger={0.1}>
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectEntry project={project} />
          </motion.div>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
};

export default ProjectsSection;
