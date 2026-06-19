import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Code2, FileText, MessageCircle } from 'lucide-react';

const HeroSection = ({ aboutMe }) => {
  const firstName = aboutMe.name.split(' ')[0];

  const contactItems = [
    { icon: Mail,     label: aboutMe.email,                                         href: `mailto:${aboutMe.email}` },
    { icon: Phone,    label: aboutMe.phone,                                          href: `tel:${aboutMe.phone}` },
    aboutMe.linkedinUsername && {
      icon: Linkedin,
      label: `linkedin.com/in/${aboutMe.linkedinUsername}`,
      href: `https://linkedin.com/in/${aboutMe.linkedinUsername}`,
    },
    aboutMe.githubUsername && {
      icon: Github,
      label: `github.com/${aboutMe.githubUsername}`,
      href: `https://github.com/${aboutMe.githubUsername}`,
    },
  ].filter(Boolean);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col"
      style={{ background: 'transparent' }}
    >
      {/* View Code Archive — centered just below navbar */}
      <motion.div
        className="flex justify-center pt-24 pb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <a
          href={`https://github.com/${aboutMe.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-sm"
          style={{
            background: 'linear-gradient(135deg, #A3C72F 0%, #7BA520 100%)',
            boxShadow: '0 4px 20px rgba(163,199,47,0.35)',
            borderRadius: 12,
            color: '#0D0E17',
          }}
        >
          <Code2 size={14} />
          View Code Archive
        </a>
      </motion.div>

      {/* Main hero content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-24 py-8 flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT: Text */}
          <div className="flex-1 max-w-2xl w-full">
            {/* Heading */}
            <motion.h1
              className="font-bold leading-tight mb-5 text-center lg:text-left"
              style={{ fontSize: 'clamp(2.4rem, 7vw, 4.5rem)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-white">Hi, I'm </span>
              <span style={{ color: '#A3C72F' }}>
                {firstName}
              </span>
              <span className="ml-2" role="img" aria-label="wave">👋</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base leading-relaxed mb-8 text-center lg:text-left"
              style={{ color: '#B3B8C5', maxWidth: 560 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              {aboutMe.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            >
              {aboutMe.cvUrl && (
                <motion.a
                  href={aboutMe.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm"
                  style={{
                    background: 'linear-gradient(135deg, #A3C72F 0%, #7BA520 100%)',
                    boxShadow: '0 4px 20px rgba(163,199,47,0.35)',
                    borderRadius: 12,
                    color: '#0D0E17',
                    transition: 'all 0.3s',
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 6px 28px rgba(163,199,47,0.55)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FileText size={14} />
                  View Resume
                </motion.a>
              )}

              {aboutMe.githubUsername && (
                <motion.a
                  href={`https://github.com/${aboutMe.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm"
                  style={{
                    background: 'rgba(163,199,47,0.1)',
                    border: '1px solid rgba(163,199,47,0.35)',
                    boxShadow: '0 4px 20px rgba(163,199,47,0.12)',
                    borderRadius: 12,
                    color: '#C8E44A',
                    transition: 'all 0.3s',
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 6px 24px rgba(163,199,47,0.25)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Github size={14} />
                  View GitHub
                </motion.a>
              )}

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm"
                style={{
                  background: 'rgba(163,199,47,0.06)',
                  border: '1px solid rgba(163,199,47,0.2)',
                  borderRadius: 12,
                  color: '#B3B8C5',
                  transition: 'all 0.3s',
                }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(163,199,47,0.45)', color: '#C8E44A' }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle size={14} />
                Contact
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT: Circular photo + contact info */}
          <motion.div
            className="flex-shrink-0 flex flex-col items-center gap-5 w-full lg:w-auto"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Circular profile image */}
            {aboutMe.imageUrl && (
              <div
                style={{
                  width: 'clamp(150px, 30vw, 210px)',
                  height: 'clamp(150px, 30vw, 210px)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid rgba(163,199,47,0.5)',
                  boxShadow: '0 0 40px rgba(163,199,47,0.25), 0 0 80px rgba(163,199,47,0.1)',
                  background: '#1B1E2B',
                  flexShrink: 0,
                }}
              >
                <img
                  src={aboutMe.imageUrl}
                  alt={aboutMe.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                />
              </div>
            )}

            {/* Contact info list */}
            <div className="flex flex-col gap-2.5 w-full max-w-xs">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm min-h-[36px]"
                    style={{ color: '#B3B8C5' }}
                    whileHover={{ color: '#A3C72F', transition: { duration: 0.1 } }}
                    transition={{ color: { duration: 0.45 }, opacity: { duration: 0.5, delay: 0.3 + i * 0.08 }, x: { duration: 0.5, delay: 0.3 + i * 0.08 } }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <Icon size={14} style={{ color: '#A3C72F', flexShrink: 0 }} />
                    <span className="truncate">{item.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
