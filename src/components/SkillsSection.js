import React from 'react';
import { motion } from 'framer-motion';
import TechIcon from './TechIcon';
import { techIconsByCategory } from '../data/techIcons';
import { AnimatedSection, StaggerContainer, itemVariants } from './AnimatedSection';

const SkillsSection = () => {
  const categories = ['Frontend', 'Backend', 'Blockchain', 'Databases', 'Tools'];

  return (
    <AnimatedSection>
      <h2 className="font-serif text-l mb-12 tracking-wide uppercase text-zinc-700">
        Technical Skills & Technologies
      </h2>
      <StaggerContainer className="space-y-12" stagger={0.08}>
        {categories.map((category) => (
          <motion.div key={category} variants={itemVariants}>
            <h3 className="font-serif text-sm font-medium tracking-wide uppercase text-zinc-600 mb-6">
              {category}:
            </h3>
            <StaggerContainer className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-6" stagger={0.04}>
              {techIconsByCategory[category].map((tech, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <TechIcon name={tech.name} iconPath={tech.iconPath} />
                </motion.div>
              ))}
            </StaggerContainer>
          </motion.div>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
};

export default SkillsSection;
