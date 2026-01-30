import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ name }) => {
  return (
    <motion.footer
      className="border-t border-neutral-200 bg-[#FFFCF8]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-screen-lg px-8 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} {name}.</span>
          <span className="hidden sm:inline">Available for Dubai Onsite • Visit Visa Ready • Open to Relocation • Flexible with UAE Timezone</span>
          <span className="sm:hidden">Dubai Onsite • Visa Ready • Relocation Ready</span>
          <span>Built with React.js & Tailwind CSS</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

