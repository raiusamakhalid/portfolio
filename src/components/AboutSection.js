import React from 'react';

const AboutSection = ({ description }) => {
  if (!description) return null;

  return (
    <section>
      <p className="font-serif text-sm leading-relaxed text-zinc-700">
        {description}
      </p>
    </section>
  );
};

export default AboutSection;

