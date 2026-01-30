import React from 'react';
import { motion } from 'framer-motion';

const TechIcon = ({ name, iconPath }) => {
  return (
    <motion.div
      className="flex flex-col items-center group"
      whileHover={{ scale: 1.06, y: -2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <div className="w-16 h-16 bg-zinc-900 rounded-lg flex items-center justify-center mb-2 group-hover:bg-zinc-800 transition-colors p-2">
        <div className="w-full h-full bg-white rounded-md flex items-center justify-center p-1.5">
          <img 
            src={iconPath} 
            alt={name} 
            className="w-full h-full object-contain"
            onError={(e) => {
              // Fallback if image fails to load
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
      <span className="text-xs text-zinc-600 text-center">{name}</span>
    </motion.div>
  );
};

export default TechIcon;
