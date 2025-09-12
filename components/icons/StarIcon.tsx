
import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor"
    >
      <polygon points="50,0 61,39 100,50 61,61 50,100 39,61 0,50 39,39" />
    </svg>
  );
};

export default StarIcon;
