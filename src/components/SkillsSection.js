import React from 'react';
import { motion, useInView } from 'framer-motion';
import { techIcons } from '../data/techIcons';

const HexIcon = ({ tech, index }) => (
  <motion.div
    className="flex flex-col items-center gap-2"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-20px' }}
    transition={{ duration: 0.35, delay: (index % 8) * 0.04 }}
  >
    <motion.div
      style={{ position: 'relative', width: 110, height: 110 }}
      whileHover={{
        scale: 1.12,
        filter: 'drop-shadow(0 0 14px rgba(145,94,255,0.85))',
      }}
      transition={{ duration: 0.18 }}
    >
      {/* Hex background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#0e1726',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        }}
      />
      {/* Slightly larger darker hex for border illusion */}
      <div
        style={{
          position: 'absolute',
          inset: -2,
          background: 'rgba(145,94,255,0.08)',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          zIndex: 0,
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
          zIndex: 1,
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
        color: '#aaa6c3',
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

const SkillsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="skills"
      className="py-24 px-6 sm:px-12 lg:px-24"
      style={{ background: '#050816' }}
    >
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-heading-sub mb-3">Technical Proficiencies</p>
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Skills
          </h2>
        </motion.div>

        {/* Hex grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px 20px',
          }}
        >
          {techIcons.map((tech, index) => (
            <HexIcon key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
