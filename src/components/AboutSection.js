import React from 'react';
import { AnimatedSection } from './AnimatedSection';

const AboutSection = ({ description }) => {
  if (!description) return null;

  return (
    <AnimatedSection>
      <h2 className="font-serif text-l mb-6 tracking-wide uppercase text-zinc-700">
        About
      </h2>
      <p className="font-serif text-sm leading-relaxed text-zinc-700">
        {description}
      </p>
    </AnimatedSection>
  );
};

export default AboutSection;

