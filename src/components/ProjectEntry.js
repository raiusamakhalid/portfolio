import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, MoreHorizontal, ChevronDown } from 'lucide-react';

const priorityConfig = {
  HIGH:   { label: 'HIGH',   bg: 'rgba(239,68,68,0.15)',  color: '#f87171', border: 'rgba(239,68,68,0.3)'  },
  MEDIUM: { label: 'MEDIUM', bg: 'rgba(251,146,60,0.15)', color: '#fb923c', border: 'rgba(251,146,60,0.3)' },
};

const statusConfig = {
  PRODUCTION: { label: 'PRODUCTION', bg: 'rgba(163,199,47,0.15)',  color: '#C8E44A', border: 'rgba(163,199,47,0.4)'  },
  LIVE:       { label: 'LIVE',       bg: 'rgba(34,197,94,0.15)',   color: '#4ade80', border: 'rgba(34,197,94,0.35)'  },
  COMPLETED:  { label: 'COMPLETED',  bg: 'rgba(99,102,241,0.15)',  color: '#818cf8', border: 'rgba(99,102,241,0.35)' },
  IN_DEV:     { label: 'IN DEV',     bg: 'rgba(251,191,36,0.15)',  color: '#fbbf24', border: 'rgba(251,191,36,0.35)' },
};

const Badge = ({ cfg }) => (
  <span
    style={{
      background: cfg.bg,
      color: cfg.color,
      border: `1px solid ${cfg.border}`,
      borderRadius: 6,
      padding: '2px 9px',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.07em',
      fontFamily: 'Poppins, sans-serif',
      whiteSpace: 'nowrap',
    }}
  >
    {cfg.label}
  </span>
);

const Dropdown = ({ links, onClose }) => {
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose(); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [onClose]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92, y: -6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: -6 }}
      transition={{ duration: 0.15 }}
      style={{
        position: 'absolute',
        top: 36,
        right: 0,
        zIndex: 50,
        background: '#1B1E2B',
        border: '1px solid rgba(163,199,47,0.15)',
        borderRadius: 10,
        overflow: 'hidden',
        minWidth: 160,
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
      }}
    >
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 text-sm"
          style={{ color: '#B3B8C5' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(163,199,47,0.08)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          onClick={onClose}
        >
          {link.icon}
          {link.label}
        </a>
      ))}
    </motion.div>
  );
};

const ProjectEntry = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const priority = project.featured ? 'HIGH' : 'MEDIUM';
  const status = project.status || (project.projectUrl ? 'LIVE' : project.featured ? 'PRODUCTION' : 'COMPLETED');

  const dropLinks = [
    project.projectUrl && { href: project.projectUrl, icon: <ExternalLink size={13} />, label: 'View Live' },
    project.githubUrl  && { href: project.githubUrl,  icon: <Github size={13} />,       label: 'GitHub' },
  ].filter(Boolean);

  const hasDescription = project.overview || (project.bullets && project.bullets.length > 0);

  const handleCardClick = (e) => {
    if (e.target.closest('[data-menu]')) return;
    if (hasDescription) setExpanded((v) => !v);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      onClick={handleCardClick}
      style={{
        background: 'rgba(27,30,43,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(163,199,47,0.1)',
        borderRadius: 14,
        overflow: 'hidden',
        cursor: hasDescription ? 'pointer' : 'default',
        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(163,199,47,0.35)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(163,199,47,0.1)';
        e.currentTarget.style.transform = 'scale(1.01)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(163,199,47,0.1)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {/* Card header — always visible */}
      <div style={{ padding: '18px 18px 14px' }}>
        {/* Row 1: Title + menu */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-white leading-snug" style={{ fontSize: 15 }}>
            {project.title}
          </h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            {/* Chevron */}
            {hasDescription && (
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                style={{ color: '#6b7280', display: 'flex', alignItems: 'center' }}
              >
                <ChevronDown size={16} />
              </motion.div>
            )}
            {/* ... menu */}
            {dropLinks.length > 0 && (
              <div style={{ position: 'relative' }} data-menu="true">
                <button
                  data-menu="true"
                  onClick={(e) => { e.stopPropagation(); setMenuOpen((v) => !v); }}
                  className="flex items-center justify-center rounded-md"
                  style={{
                    width: 28, height: 28,
                    color: '#B3B8C5',
                    background: menuOpen ? 'rgba(163,199,47,0.12)' : 'transparent',
                    transition: 'background 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(163,199,47,0.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = menuOpen ? 'rgba(163,199,47,0.12)' : 'transparent')}
                >
                  <MoreHorizontal size={16} />
                </button>
                <AnimatePresence>
                  {menuOpen && <Dropdown links={dropLinks} onClose={() => setMenuOpen(false)} />}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>

        {/* Client */}
        {project.client && (
          <p style={{ color: '#6b7280', fontSize: 12, marginBottom: 10 }}>{project.client}</p>
        )}

        {/* Tech tags */}
        {project.technologies && (
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                style={{
                  background: 'rgba(163,199,47,0.08)',
                  border: '1px solid rgba(163,199,47,0.2)',
                  color: '#C8E44A',
                  borderRadius: 20,
                  padding: '2px 9px',
                  fontSize: 10.5,
                  fontWeight: 500,
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Expandable description */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="description"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                padding: '14px 18px 16px',
                borderTop: '1px solid rgba(163,199,47,0.1)',
                background: 'rgba(163,199,47,0.03)',
              }}
            >
              {project.overview && (
                <p style={{ color: '#9ca3af', fontSize: 13, lineHeight: 1.7, marginBottom: project.bullets ? 10 : 0 }}>
                  {project.overview}
                </p>
              )}
              {project.bullets && (
                <ul className="flex flex-col gap-2">
                  {project.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      className="flex gap-2.5 text-sm leading-relaxed"
                      style={{ color: '#9ca3af' }}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <span className="flex-shrink-0 mt-2 w-1 h-1 rounded-full" style={{ background: '#A3C72F' }} />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Divider */}
      <div style={{ height: 1, background: 'rgba(163,199,47,0.06)' }} />

      {/* Bottom bar */}
      <div className="flex items-center justify-between gap-2" style={{ padding: '10px 18px' }}>
        <span style={{ color: '#4b5563', fontSize: 10.5, fontFamily: 'monospace', letterSpacing: '0.05em' }}>
          UK-{String(index + 1).padStart(3, '0')}
        </span>
        <div className="flex items-center gap-2">
          <Badge cfg={priorityConfig[priority]} />
          <Badge cfg={statusConfig[status]} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectEntry;
