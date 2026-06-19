import React from 'react';
import { motion, useInView } from 'framer-motion';
import { techIconsByCategory } from '../data/techIcons';

const HexIcon = ({ tech, index, inView }) => (
  <motion.div
    className="flex flex-col items-center gap-2"
    initial={{ opacity: 0, scale: 0.75 }}
    animate={inView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.35, delay: index * 0.05 }}
  >
    <motion.div
      style={{ position: 'relative', width: 110, height: 110 }}
      whileHover={{ scale: 1.12, transition: { duration: 0.3 } }}
    >
      {/* Border hex */}
      <div
        style={{
          position: 'absolute',
          inset: -2,
          background: 'rgba(163,199,47,0.08)',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          zIndex: 0,
        }}
      />
      {/* Main hex */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#1B1E2B',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          zIndex: 1,
        }}
      />
      {/* Icon */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <img
          src={tech.iconPath}
          alt={tech.name}
          style={{ width: 54, height: 54, objectFit: 'contain' }}
        />
      </div>
    </motion.div>
    <span
      style={{
        color: '#B3B8C5',
        fontSize: 11,
        fontWeight: 500,
        textAlign: 'center',
        maxWidth: 90,
        lineHeight: 1.3,
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {tech.name}
    </span>
  </motion.div>
);

const categoryColors = {
  'Frontend':      '#A3C72F',
  'Backend':       '#00BFFF',
  'Databases':     '#4ade80',
  'Cloud & DevOps':'#fb923c',
  'Blockchain':    '#f472b6',
};

const SkillsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="skills"
      className="py-24 px-6 sm:px-12 lg:px-24"
      style={{ background: 'transparent' }}
    >
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-heading-sub mb-3">Technical Proficiencies</p>
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Skills
          </h2>
        </motion.div>

        {/* Category rows */}
        <div className="flex flex-col gap-14">
          {Object.entries(techIconsByCategory).map(([category, icons], catIdx) => {
            const accent = categoryColors[category] || '#A3C72F';
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.1 + catIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Category label */}
                <div className="flex items-center gap-3 mb-8 justify-center">
                  <div style={{ height: 1, width: 40, background: `${accent}55` }} />
                  <span
                    style={{
                      color: accent,
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    {category}
                  </span>
                  <div style={{ height: 1, width: 40, background: `${accent}55` }} />
                </div>

                {/* Hex icons row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px 16px',
                  }}
                >
                  {icons.map((tech, i) => (
                    <HexIcon key={tech.name} tech={tech} index={i} inView={isInView} />
                  ))}
                </div>

                {/* Divider between categories */}
                {catIdx < Object.keys(techIconsByCategory).length - 1 && (
                  <div
                    style={{
                      height: 1,
                      background: 'rgba(163,199,47,0.06)',
                      marginTop: 56,
                      marginBottom: -42,
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
