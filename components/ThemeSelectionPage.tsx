
import React, { useState, useMemo } from 'react';
import { ThemePack } from '../types';
import { THEME_PACKS } from '../constants';
import { getGradientForText } from '../utils/color';
import SearchIcon from './icons/SearchIcon';

interface ThemeSelectionPageProps {
  onThemeSelect: (theme: ThemePack) => void;
  userCredits: number;
}

const ThemeSelectionPage: React.FC<ThemeSelectionPageProps> = ({ onThemeSelect, userCredits }) => {
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
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl">Choose a Theme Pack</h1>
        <p className="text-gray-400 mt-2">Select a pack to begin your transformation.</p>
      </div>

      <div className="mb-8 relative max-w-lg mx-auto">
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
          const canAfford = userCredits >= pack.cost;
          const gradient = getGradientForText(pack.title);

          return (
            <div
              key={pack.title}
              onClick={() => canAfford && onThemeSelect(pack)}
              style={{ background: gradient }}
              className={`
                border border-transparent rounded-2xl p-6 transition-all duration-300 ease-in-out relative text-white flex flex-col
                ${canAfford 
                  ? 'cursor-pointer transform hover:scale-105 hover:border-white/50 hover:shadow-2xl' 
                  : 'opacity-60 cursor-not-allowed filter grayscale'
                }
              `}
            >
              <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                {pack.cost} Credits
              </div>
              <h2 className="text-2xl mb-2">{pack.title}</h2>
              <p className="opacity-80 mb-4">{pack.description}</p>
              
              <div className="mt-auto grid grid-cols-2 gap-2">
                {pack.items.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="relative rounded-lg overflow-hidden group aspect-square bg-black/20">
                        <img 
                            src={item.img} 
                            alt={item.label}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-xs text-center truncate">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>

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