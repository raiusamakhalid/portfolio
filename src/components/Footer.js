import React from 'react';

const Footer = ({ name }) => {
  return (
    <footer className="border-t border-neutral-200 bg-[#FFFCF8]">
      <div className="mx-auto max-w-screen-lg px-8 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} {name}.</span>
          <span className="hidden sm:inline">Available for Dubai Onsite • Visit Visa Ready • Open to Relocation • Flexible with UAE Timezone</span>
          <span className="sm:hidden">Dubai Onsite • Visa Ready • Relocation Ready</span>
          <span>Built with React.js & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

