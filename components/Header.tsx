import React from 'react';
import StarIcon from './icons/StarIcon';
import Button from './Button';
import { User } from '../types';

interface HeaderProps {
  user: User | null;
  onLogout: () => void;
  onBuyCredits: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout, onBuyCredits }) => {
  return (
    <header className="p-4 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <StarIcon className="w-8 h-8 text-white" />
          <span className="text-2xl">Coloni</span>
        </div>
        {user && (
          <div className="flex items-center gap-4">
            <div className='text-right'>
                <p className='text-sm'>{user.name}</p>
                <p className='text-xs text-gray-400'>{user.credits} Credits</p>
            </div>
            <Button onClick={onBuyCredits} variant="secondary" className="px-4 py-2 text-sm">Buy Credits</Button>
            <button onClick={onLogout} className="text-sm text-gray-400 hover:text-white transition-colors">Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;