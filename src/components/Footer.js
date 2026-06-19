import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, ExternalLink, MapPin } from 'lucide-react';

const Footer = ({ aboutMe }) => {
  return (
    <footer id="contact" style={{ background: '#0d0b22', borderTop: '1px solid rgba(145, 94, 255, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Get In Touch</h2>
            <p className="text-secondary text-sm mb-6">
              Open to On-site, Hybrid, or Remote roles locally and internationally.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${aboutMe.email}`}
                className="flex items-center gap-3 text-sm text-secondary hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(145,94,255,0.12)' }}>
                  <Mail size={14} style={{ color: '#915EFF' }} />
                </div>
                {aboutMe.email}
              </a>
              <a
                href={`tel:${aboutMe.phone}`}
                className="flex items-center gap-3 text-sm text-secondary hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(145,94,255,0.12)' }}>
                  <Phone size={14} style={{ color: '#915EFF' }} />
                </div>
                {aboutMe.phone}
              </a>
              <div className="flex items-center gap-3 text-sm text-secondary">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(145,94,255,0.12)' }}>
                  <MapPin size={14} style={{ color: '#915EFF' }} />
                </div>
                {aboutMe.location}
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              {aboutMe.linkedinUsername && (
                <a
                  href={`https://linkedin.com/in/${aboutMe.linkedinUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-secondary hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(145,94,255,0.12)' }}>
                    <Linkedin size={14} style={{ color: '#915EFF' }} />
                  </div>
                  linkedin.com/in/{aboutMe.linkedinUsername}
                </a>
              )}
              {aboutMe.githubUsername && (
                <a
                  href={`https://github.com/${aboutMe.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-secondary hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(145,94,255,0.12)' }}>
                    <Github size={14} style={{ color: '#915EFF' }} />
                  </div>
                  github.com/{aboutMe.githubUsername}
                </a>
              )}
              {aboutMe.website && (
                <a
                  href={`https://${aboutMe.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-secondary hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(145,94,255,0.12)' }}>
                    <ExternalLink size={14} style={{ color: '#915EFF' }} />
                  </div>
                  {aboutMe.website}
                </a>
              )}
            </div>
          </div>
        </motion.div>

        <div
          className="mt-12 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#aaa6c3' }}
        >
          <span>© {new Date().getFullYear()} {aboutMe.name}. All rights reserved.</span>
          <span>Built with React.js & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
