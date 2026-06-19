import React from 'react';
import { motion, useInView } from 'framer-motion';

const ExperienceEntry = ({ experience, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="timeline-item"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      {/* Animated dot */}
      <motion.div
        className="timeline-dot"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.08 + 0.2, type: 'spring', stiffness: 300 }}
      />

      <motion.div
        className="rounded-2xl p-6 sm:p-7"
        style={{
          background: 'rgba(16,13,37,0.9)',
          border: '1px solid rgba(145,94,255,0.12)',
          backdropFilter: 'blur(10px)',
        }}
        whileHover={{
          borderColor: 'rgba(145,94,255,0.35)',
          boxShadow: '0 0 28px rgba(145,94,255,0.1)',
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div>
            <h3 className="text-lg font-semibold text-white leading-snug">
              {experience.title}
            </h3>
            <p
              className="font-semibold text-sm mt-1"
              style={{
                background: 'linear-gradient(90deg, #915EFF, #00BFFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {experience.company}
            </p>
            {experience.location && (
              <p className="text-xs mt-1" style={{ color: '#aaa6c3' }}>
                {experience.location}
              </p>
            )}
          </div>
          <span
            className="text-xs font-medium px-4 py-1.5 rounded-full flex-shrink-0"
            style={{
              background: 'rgba(145,94,255,0.1)',
              border: '1px solid rgba(145,94,255,0.3)',
              color: '#aaa6c3',
            }}
          >
            {experience.date}
          </span>
        </div>

        {experience.bullets && (
          <ul className="space-y-2.5">
            {experience.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                className="flex gap-3 text-sm leading-relaxed"
                style={{ color: '#aaa6c3' }}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 + 0.3 + i * 0.04 }}
              >
                <span
                  className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ background: '#915EFF' }}
                />
                {bullet}
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ExperienceEntry;
