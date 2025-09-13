import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="animated-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8A2BE2" />
          <stop offset="25%" stopColor="#4169E1" />
          <stop offset="50%" stopColor="#00FFFF" />
          <stop offset="75%" stopColor="#32CD32" />
          <stop offset="100%" stopColor="#FFD700" />
          <animateTransform
            attributeName="gradientTransform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="8s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      <polygon 
        points="50,0 61,39 100,50 61,61 50,100 39,61 0,50 39,39" 
        fill="url(#animated-gradient)"
      />
    </svg>
  );
};

export default StarIcon;