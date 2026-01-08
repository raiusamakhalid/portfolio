import React from 'react';

const TechIcon = ({ name, iconPath }) => {
  return (
    <div className="flex flex-col items-center group">
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
    </div>
  );
};

export default TechIcon;
