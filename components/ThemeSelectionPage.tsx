
import React from 'react';
import { ThemePack, UploadedImage } from '../types';
import { THEME_PACKS } from '../constants';
import Button from './Button';

interface ThemeSelectionPageProps {
  uploadedImage: UploadedImage;
  onThemeSelect: (theme: ThemePack) => void;
  onStartOver: () => void;
}

const ThemeSelectionPage: React.FC<ThemeSelectionPageProps> = ({ uploadedImage, onThemeSelect, onStartOver }) => {
  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <img 
            src={uploadedImage.base64} 
            alt="Uploaded thumbnail" 
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-600"
          />
          <h1 className="text-3xl sm:text-4xl font-bold">Choose a Theme Pack</h1>
        </div>
        <Button onClick={onStartOver} variant="secondary">
          Start Over
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {THEME_PACKS.map((pack) => (
          <div
            key={pack.title}
            onClick={() => onThemeSelect(pack)}
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6 cursor-pointer transform hover:scale-105 hover:border-white transition-all duration-300 ease-in-out"
          >
            <h2 className="text-2xl font-bold mb-2">{pack.title}</h2>
            <p className="text-gray-400">{pack.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelectionPage;
