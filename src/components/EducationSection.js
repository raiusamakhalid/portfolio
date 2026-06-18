import React from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '../data/education';

const CardContent = ({ edu }) => (
  <>
    <h3
      className="font-bold text-white mb-1.5 leading-snug"
      style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
    >
      {edu.degree}
    </h3>
    <p className="text-sm mb-4" style={{ color: '#aaa6c3' }}>
      {edu.institution}{edu.location ? `, ${edu.location}` : ''}
    </p>
    {edu.bullets && (
      <ul className="flex flex-col gap-2">
        {edu.bullets.map((b, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: '#cbd5e1' }}>
            <span className="flex-shrink-0 mt-2 w-1 h-1 rounded-full bg-white opacity-60" />
            {b}
          </li>
        ))}
      </ul>
    )}
  </>
);

const EducationSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="education"
      className="py-24 px-6 sm:px-12 lg:px-24"
      style={{ background: '#050816' }}
    >
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-heading-sub mb-3">My Academic Background</p>
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Education
          </h2>
        </motion.div>

        {/* ── MOBILE: simple stacked cards (hidden on lg+) ── */}
        <div className="flex flex-col gap-6 lg:hidden">
          {education.map((edu, index) => {
            const initial = edu.institution.split(' ').slice(0, 2).map((w) => w[0]).join('');
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Period badge */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: '#1a2744',
                      border: '2px solid rgba(255,255,255,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ color: '#fff', fontWeight: 800, fontSize: 12 }}>{initial}</span>
                  </div>
                  <span style={{ color: '#aaa6c3', fontSize: 13 }}>{edu.period}</span>
                </div>
                {/* Card */}
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: 'linear-gradient(135deg, #131d35, #0e1728)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <CardContent edu={edu} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── DESKTOP: alternating timeline (hidden below lg) ── */}
        <div className="relative hidden lg:block">
          {/* Center vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: 0,
              bottom: 0,
              width: 1,
              background: 'rgba(255,255,255,0.15)',
            }}
          />

          <div className="flex flex-col gap-20">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0;
              const initial = edu.institution.split(' ').slice(0, 2).map((w) => w[0]).join('');

              return (
                <motion.div
                  key={index}
                  className="relative flex items-center"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                >
                  {/* LEFT SIDE */}
                  <div className="flex-1 flex justify-end pr-12">
                    {isLeft ? (
                      <div
                        className="relative max-w-sm w-full rounded-xl p-6"
                        style={{
                          background: 'linear-gradient(135deg, #131d35, #0e1728)',
                          border: '1px solid rgba(255,255,255,0.07)',
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            right: -10,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: 0,
                            height: 0,
                            borderTop: '10px solid transparent',
                            borderBottom: '10px solid transparent',
                            borderLeft: '10px solid #131d35',
                          }}
                        />
                        <CardContent edu={edu} />
                      </div>
                    ) : (
                      <p className="text-sm font-medium self-center" style={{ color: '#aaa6c3', whiteSpace: 'nowrap' }}>
                        {edu.period}
                      </p>
                    )}
                  </div>

                  {/* CENTER circle */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 10,
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      background: '#1a2744',
                      border: '2px solid rgba(255,255,255,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 0 4px rgba(255,255,255,0.05)',
                    }}
                  >
                    <span style={{ color: '#fff', fontWeight: 800, fontSize: 14, fontFamily: 'Poppins, sans-serif' }}>
                      {initial}
                    </span>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex-1 pl-12">
                    {isLeft ? (
                      <p className="text-sm font-medium" style={{ color: '#aaa6c3', whiteSpace: 'nowrap' }}>
                        {edu.period}
                      </p>
                    ) : (
                      <div
                        className="relative max-w-sm w-full rounded-xl p-6"
                        style={{
                          background: 'linear-gradient(135deg, #131d35, #0e1728)',
                          border: '1px solid rgba(255,255,255,0.07)',
                        }}
                      >
                        <div
                          style={{
                            position: 'absolute',
                            left: -10,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: 0,
                            height: 0,
                            borderTop: '10px solid transparent',
                            borderBottom: '10px solid transparent',
                            borderRight: '10px solid #131d35',
                          }}
                        />
                        <CardContent edu={edu} />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
