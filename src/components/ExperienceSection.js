import React from 'react';
import { motion } from 'framer-motion';
import ExperienceEntry from './ExperienceEntry';
import { AnimatedSection, StaggerContainer, itemVariants } from './AnimatedSection';

const ExperienceSection = ({ experiences }) => {
  return (
    <AnimatedSection>
      <h2 className="font-serif text-l mb-12 tracking-wide uppercase text-zinc-700">
        Professional Experience
      </h2>
      <StaggerContainer className="space-y-12" stagger={0.1}>
        {experiences.map((experience, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ExperienceEntry experience={experience} />
          </motion.div>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
};

export default ExperienceSection;

