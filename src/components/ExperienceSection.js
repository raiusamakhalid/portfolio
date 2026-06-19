import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const companyMeta = {
  'Aslase': {
    initials: 'AS',
    bg: 'linear-gradient(135deg, #0F1A05, #182A05)',
    accent: '#A3C72F',
    logoBg: '#182A05',
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
    bg: 'linear-gradient(135deg, #141721, #1B1E2B)',
    accent: '#A3C72F',
    logoBg: '#1B1E2B',
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
      style={{ background: 'transparent' }}
    >
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
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
          transition={{ duration: 0.42, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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
                  className="flex items-center gap-4 p-4 rounded-2xl text-left w-full"
                  style={{
                    background: isActive
                      ? 'rgba(163,199,47,0.1)'
                      : 'rgba(27,30,43,0.7)',
                    border: isActive
                      ? '1px solid rgba(163,199,47,0.4)'
                      : '1px solid rgba(163,199,47,0.08)',
                    boxShadow: isActive ? '0 4px 24px rgba(163,199,47,0.1)' : 'none',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.3s',
                  }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
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
                      style={{ color: isActive ? '#C8E44A' : '#B3B8C5' }}
                    >
                      {exp.company}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: isActive ? '#A3C72F' : '#6b7280' }}
                    >
                      {exp.date}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT: Detail panel — fixed height wrapper prevents layout shift */}
          <div className="flex-1 min-w-0" style={{ position: 'relative', minHeight: 'max(420px, 55vh)' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                className="rounded-2xl p-5 sm:p-8"
                style={{
                  position: 'absolute',
                  inset: 0,
                  overflowY: 'auto',
                  background: 'rgba(27,30,43,0.85)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: `1px solid ${meta.accent}33`,
                  boxShadow: `0 8px 40px ${meta.accent}10`,
                }}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Title */}
                <h3
                  className="font-bold text-white mb-3"
                  style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)' }}
                >
                  {active.title}
                </h3>

                {/* Company */}
                <p className="text-sm mb-1" style={{ color: '#B3B8C5' }}>
                  {active.company}
                  {active.location && (
                    <span style={{ color: '#6b7280' }}> · {active.location}</span>
                  )}
                </p>

                {/* Date */}
                <p className="text-sm mb-6" style={{ color: '#B3B8C5' }}>
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
