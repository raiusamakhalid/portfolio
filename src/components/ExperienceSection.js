import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const companyMeta = {
  'Aslase': {
    initials: 'AS',
    bg: 'linear-gradient(135deg, #1a0540, #2d1060)',
    accent: '#915EFF',
    logoBg: '#2a1060',
  },
  'Softtik Technologies': {
    initials: 'ST',
    bg: 'linear-gradient(135deg, #031b40, #0a2d60)',
    accent: '#00BFFF',
    logoBg: '#0a2860',
  },
  'Vaival Technologies': {
    initials: 'VT',
    bg: 'linear-gradient(135deg, #0d2b1d, #1a4a30)',
    accent: '#4ade80',
    logoBg: '#1a3a28',
  },
};

const getCompanyMeta = (company) =>
  companyMeta[company] || {
    initials: company.slice(0, 2).toUpperCase(),
    bg: 'linear-gradient(135deg, #1d1836, #2d2650)',
    accent: '#915EFF',
    logoBg: '#2a1d4c',
  };

const ExperienceSection = ({ experiences }) => {
  const [selected, setSelected] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const active = experiences[selected];
  const meta = getCompanyMeta(active.company);

  return (
    <section
      id="experience"
      className="py-24 px-6 sm:px-12 lg:px-24"
      style={{ background: '#050816' }}
    >
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-heading-sub mb-3">My Professional Journey</p>
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Work Experience
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {/* LEFT: Job list */}
          <div className="flex flex-col gap-3 lg:w-72 flex-shrink-0">
            {experiences.map((exp, i) => {
              const m = getCompanyMeta(exp.company);
              const isActive = selected === i;
              return (
                <motion.button
                  key={i}
                  onClick={() => setSelected(i)}
                  className="flex items-center gap-4 p-4 rounded-2xl text-left w-full transition-all duration-200"
                  style={{
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(145,94,255,0.18), rgba(105,54,245,0.12))'
                      : 'rgba(16,13,37,0.6)',
                    border: isActive
                      ? '1px solid rgba(145,94,255,0.4)'
                      : '1px solid rgba(255,255,255,0.05)',
                    boxShadow: isActive ? '0 4px 24px rgba(145,94,255,0.12)' : 'none',
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Company logo circle */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: m.logoBg,
                      border: `2px solid ${m.accent}55`,
                    }}
                  >
                    <span
                      style={{
                        color: m.accent,
                        fontWeight: 800,
                        fontSize: 13,
                        fontFamily: 'Poppins, sans-serif',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {m.initials}
                    </span>
                  </div>

                  {/* Title + company + date */}
                  <div className="min-w-0">
                    <p
                      className="font-bold text-sm leading-snug"
                      style={{ color: isActive ? '#fff' : '#e2e0f0' }}
                    >
                      {exp.title}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: isActive ? '#c4b5fd' : '#aaa6c3' }}
                    >
                      {exp.company}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: isActive ? '#a78bfa' : '#6b7280' }}
                    >
                      {exp.date}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT: Detail panel */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                className="rounded-2xl p-5 sm:p-8 h-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(21,16,48,0.95), rgba(13,11,34,0.98))',
                  border: `1px solid ${meta.accent}33`,
                  boxShadow: `0 8px 40px ${meta.accent}12`,
                  minHeight: 300,
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {/* Title */}
                <h3
                  className="font-bold text-white mb-3"
                  style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)' }}
                >
                  {active.title}
                </h3>

                {/* Company */}
                <p className="text-sm mb-1" style={{ color: '#aaa6c3' }}>
                  {active.company}
                  {active.location && (
                    <span style={{ color: '#6b7280' }}> · {active.location}</span>
                  )}
                </p>

                {/* Date */}
                <p className="text-sm mb-6" style={{ color: '#aaa6c3' }}>
                  {active.date}
                </p>

                {/* Bullets */}
                {active.bullets && (
                  <ul className="flex flex-col gap-3">
                    {active.bullets.map((point, i) => (
                      <motion.li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed"
                        style={{ color: '#d1cce8' }}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.06 }}
                      >
                        <span
                          className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                          style={{ background: meta.accent }}
                        />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
