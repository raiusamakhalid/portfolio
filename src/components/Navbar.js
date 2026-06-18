import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'about',      label: 'About'     },
  { id: 'experience', label: 'Work'      },
  { id: 'education',  label: 'Education' },
  { id: 'skills',     label: 'Skills'    },
  { id: 'projects',   label: 'Projects'  },
  { id: 'contact',    label: 'Contact'   },
];

const MENU_CLOSE_MS = 220;

const Navbar = ({ name }) => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('');

  const firstName = name ? name.split(' ')[0] : name;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when screen grows past mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)');
    const handler = (e) => { if (e.matches) setMenuOpen(false); };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const scrollTo = (id) => {
    setActive(id);
    if (menuOpen) {
      // Let the menu close animation finish before scrolling
      setMenuOpen(false);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, MENU_CLOSE_MS);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'rgba(5,8,22,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s',
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => {
            setActive('');
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xl font-bold"
          style={{
            background: 'linear-gradient(90deg, #915EFF 0%, #c084fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          {firstName}
        </button>

        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium"
                style={{ color: active === link.id ? '#fff' : '#aaa6c3', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = active === link.id ? '#fff' : '#aaa6c3')}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{ minWidth: 44, minHeight: 44 }}
        >
          <span
            className="block w-6 h-0.5 bg-white rounded-full"
            style={{
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
              transition: 'transform 0.25s',
            }}
          />
          <span
            className="block w-6 h-0.5 bg-white rounded-full"
            style={{ opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }}
          />
          <span
            className="block w-6 h-0.5 bg-white rounded-full"
            style={{
              transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              transition: 'transform 0.25s',
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: MENU_CLOSE_MS / 1000, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="sm:hidden flex flex-col"
              style={{
                background: 'rgba(5,8,22,0.98)',
                borderTop: '1px solid rgba(145,94,255,0.12)',
                paddingBottom: 8,
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-base font-medium px-6 py-4"
                  style={{
                    color: active === link.id ? '#915EFF' : '#aaa6c3',
                    minHeight: 52,
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    transition: 'color 0.15s, background 0.15s',
                  }}
                  onTouchStart={(e) => (e.currentTarget.style.background = 'rgba(145,94,255,0.07)')}
                  onTouchEnd={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
