import React from 'react';
import { motion, useInView } from 'framer-motion';

/** Section that fades and slides up when it scrolls into view */
export function AnimatedSection({ children, className = '' }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.section>
  );
}

/** Container that staggers its motion children when in view */
export function StaggerContainer({ children, className = '', stagger = 0.07 }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, staggerDirection: 1 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default AnimatedSection;
