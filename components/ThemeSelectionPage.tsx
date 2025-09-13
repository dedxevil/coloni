
import React, { useState, useMemo } from 'react';
import { ThemePack, UploadedImage } from '../types';
import { THEME_PACKS, THEME_PACK_COST } from '../constants';
import Button from './Button';
import { getGradientForText } from '../utils/color';
import SearchIcon from './icons/SearchIcon';

interface ThemeSelectionPageProps {
  uploadedImage: UploadedImage;
  onThemeSelect: (theme: ThemePack) => void;
  onStartOver: () => void;
  userCredits: number;
}

const ThemeSelectionPage: React.FC<ThemeSelectionPageProps> = ({ uploadedImage, onThemeSelect, onStartOver, userCredits }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPacks = useMemo(() => {
    if (!searchTerm) {
      return THEME_PACKS;
    }
    return THEME_PACKS.filter(
      (pack) =>
        pack.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pack.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);
  
  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-6">
        <div className="flex items-center gap-4">
          <img 
            src={uploadedImage.base64} 
            alt="Uploaded thumbnail" 
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-600"
          />
          <h1 className="text-3xl sm:text-4xl">Choose a Theme Pack</h1>
        </div>
        <Button onClick={onStartOver} variant="secondary">
          Start Over
        </Button>
      </div>

      <div className="mb-8 relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a theme..."
          className="w-full bg-gray-900 border border-gray-700 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <SearchIcon className="w-5 h-5 text-gray-500" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPacks.map((pack) => {
          const canAfford = userCredits >= THEME_PACK_COST;
          const gradient = getGradientForText(pack.title);

          return (
            <div
              key={pack.title}
              onClick={() => canAfford && onThemeSelect(pack)}
              style={{ background: gradient }}
              className={`
                border border-transparent rounded-2xl p-6 transition-all duration-300 ease-in-out relative text-white
                ${canAfford 
                  ? 'cursor-pointer transform hover:scale-105 hover:border-white/50 hover:shadow-2xl' 
                  : 'opacity-60 cursor-not-allowed filter grayscale'
                }
              `}
            >
              <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                {THEME_PACK_COST} Credits
              </div>
              <h2 className="text-2xl mb-2">{pack.title}</h2>
              <p className="opacity-80">{pack.description}</p>
            </div>
          );
        })}
      </div>
      {filteredPacks.length === 0 && (
          <div className='text-center py-16'>
              <p className='text-2xl'>No themes found</p>
              <p className='text-gray-400 mt-2'>Try searching for something else!</p>
          </div>
      )}
    </div>
  );
};

export default ThemeSelectionPage;