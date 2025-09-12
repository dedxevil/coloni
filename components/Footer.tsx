
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center p-4 mt-12 text-gray-500">
      <p>
        vibe coded by{' '}
        <a
          href="https://x.com/dedrevil"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition-colors"
        >
          @dedrevil
        </a>
      </p>
    </footer>
  );
};

export default Footer;
