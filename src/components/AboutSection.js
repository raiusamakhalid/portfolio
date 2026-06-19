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

const CARD = {
  background: 'rgba(27,30,43,0.85)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: '1px solid rgba(163,199,47,0.1)',
};

const AboutSection = ({ description }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  if (!description) return null;

  return (
    <section
      id="about"
      className="py-24 px-6 sm:px-12 lg:px-24"
      style={{ background: 'transparent' }}
    >
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
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
            style={CARD}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-base sm:text-lg leading-[1.9]" style={{ color: '#B3B8C5' }}>
              {description}
            </p>
          </motion.div>

          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6 lg:min-w-[220px]">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="rounded-xl p-4 sm:p-6 text-center"
                style={CARD}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.38, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  borderColor: 'rgba(163,199,47,0.4)',
                  boxShadow: '0 8px 32px rgba(163,199,47,0.12)',
                  transition: { duration: 0.3 },
                }}
              >
                <p
                  className="text-xl sm:text-2xl font-bold mb-1"
                  style={{ color: '#A3C72F' }}
                >
                  {s.value}
                </p>
                <p className="text-xs" style={{ color: '#B3B8C5' }}>{s.label}</p>
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
                style={CARD}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.38, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -6,
                  borderColor: 'rgba(163,199,47,0.4)',
                  boxShadow: '0 12px 40px rgba(163,199,47,0.12)',
                  transition: { duration: 0.3 },
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(163,199,47,0.12)' }}
                >
                  <Icon size={22} style={{ color: '#A3C72F' }} />
                </div>
                <h3 className="text-white font-semibold text-base leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#B3B8C5' }}>
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
