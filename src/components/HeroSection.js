import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Code2, ExternalLink, FileText, MessageCircle } from 'lucide-react';

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
      style={{ background: '#050816' }}
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
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white"
          style={{
            background: 'linear-gradient(135deg, #915EFF 0%, #6936f5 100%)',
            boxShadow: '0 4px 20px rgba(145,94,255,0.4)',
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
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span className="text-white">Hi, I'm </span>
              <span
                style={{
                  background: 'linear-gradient(90deg, #915EFF 0%, #c084fc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {firstName}
              </span>
              <span className="ml-2" role="img" aria-label="wave">👋</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base leading-relaxed mb-8 text-center lg:text-left"
              style={{ color: '#aaa6c3', maxWidth: 560 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              {aboutMe.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              {aboutMe.cvUrl && (
                <motion.a
                  href={aboutMe.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white"
                  style={{
                    background: 'linear-gradient(135deg, #915EFF 0%, #6936f5 100%)',
                    boxShadow: '0 4px 20px rgba(145,94,255,0.4)',
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 6px 28px rgba(145,94,255,0.55)' }}
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
                    boxShadow: '0 4px 20px rgba(124,58,237,0.4)',
                  }}
                  whileHover={{ scale: 1.05 }}
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white"
                style={{
                  background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  boxShadow: '0 4px 20px rgba(79,70,229,0.4)',
                }}
                whileHover={{ scale: 1.05 }}
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
            {/* Circular profile image — responsive size */}
            {aboutMe.imageUrl && (
              <div
                style={{
                  width: 'clamp(150px, 30vw, 210px)',
                  height: 'clamp(150px, 30vw, 210px)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '4px solid rgba(145,94,255,0.4)',
                  boxShadow: '0 0 40px rgba(145,94,255,0.25)',
                  background: '#1a1a2e',
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
                    className="flex items-center gap-2.5 text-sm transition-colors min-h-[36px]"
                    style={{ color: '#aaa6c3' }}
                    whileHover={{ color: '#915EFF' }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  >
                    <Icon size={14} style={{ color: '#915EFF', flexShrink: 0 }} />
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
