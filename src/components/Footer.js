import React from 'react';

const Footer = ({ name }) => {
  return (
    <footer className="border-t border-neutral-200 bg-[#FFFCF8]">
      <div className="flex flex-row mx-auto max-w-screen-lg px-8 py-12 md:flex md:items-start md:justify-between">
        <div className="mb-4 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} {name}.</p>
        </div>
        <div className="mb-4">
          <p className="text-sm text-neutral-500">
            Built with React.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

