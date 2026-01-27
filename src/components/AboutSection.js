import React from 'react';

const AboutSection = ({ description }) => {
  if (!description) return null;

  return (
    <section>
      <h2 className="font-serif text-l mb-6 tracking-wide uppercase text-zinc-700">
        About
      </h2>
      <p className="font-serif text-sm leading-relaxed text-zinc-700">
        {description}
      </p>
    </section>
  );
};

export default AboutSection;

