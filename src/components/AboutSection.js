import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Server, Zap, Cloud } from 'lucide-react';

const services = [
  {
    title: 'Full Stack Development',
    icon: Globe,
    description: 'End-to-end web applications using React, Next.js, Node.js, and NestJS with a focus on performance and scalability.',
  },
  {
    title: 'Backend Engineering',
    icon: Server,
    description: 'Scalable REST APIs, microservices architecture, real-time systems with WebSockets, and relational/NoSQL databases.',
  },
  {
    title: 'Blockchain & Web3',
    icon: Zap,
    description: 'Smart contracts in Solidity and Rust, DeFi protocols, Solana programs, and Ethereum dApps.',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Cloud infrastructure on AWS and Azure, CI/CD pipelines, containerization, and production deployments.',
  },
];

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: 'G42 & Mubadala', label: 'Enterprise Clients' },
  { value: '5+', label: 'Production Projects' },
];

const AboutSection = ({ description }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  if (!description) return null;

  return (
    <section
      id="about"
      className="py-24 px-6 sm:px-12 lg:px-24"
      style={{ background: '#050816' }}
    >
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-heading-sub mb-3">Get to know me</p>
          <h2
            className="font-bold text-white"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
          >
            Overview
          </h2>
        </motion.div>

        {/* Bio + Stats */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          <motion.div
            className="flex-1 rounded-2xl p-8 sm:p-10"
            style={{
              background: '#12192b',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-base sm:text-lg leading-[1.9]" style={{ color: '#aaa6c3' }}>
              {description}
            </p>
          </motion.div>

          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6 lg:min-w-[220px]">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="rounded-xl p-4 sm:p-6 text-center"
                style={{
                  background: '#12192b',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                whileHover={{
                  borderColor: 'rgba(145,94,255,0.35)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
                }}
              >
                <p
                  className="text-xl sm:text-2xl font-bold mb-1"
                  style={{
                    background: 'linear-gradient(90deg, #915EFF, #00BFFF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.value}
                </p>
                <p className="text-xs" style={{ color: '#aaa6c3' }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="rounded-2xl p-6 flex flex-col gap-4 cursor-default"
                style={{
                  background: '#12192b',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                whileHover={{
                  y: -6,
                  borderColor: 'rgba(145,94,255,0.35)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(145,94,255,0.15)' }}
                >
                  <Icon size={22} style={{ color: '#915EFF' }} />
                </div>
                <h3 className="text-white font-semibold text-base leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#aaa6c3' }}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
