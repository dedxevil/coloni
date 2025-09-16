import React from 'react';
import StarIcon from './icons/StarIcon';
import GoogleLoginButton from './GoogleLoginButton';

interface HomePageProps {
  onLogin: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onLogin }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <div className="flex items-center gap-4 mb-2">
        <StarIcon className="w-16 h-16" />
        <h1 className="text-8xl">Coloni</h1>
      </div>
      <p className="text-2xl text-gray-400 mb-12">color yourself</p>
      
      <div className="max-w-xl mx-auto space-y-6">
        <p className="text-lg text-gray-300">
          Transform your photos with AI. Choose a theme pack, upload your photo, and see yourself in a whole new style.
        </p>
        
        <div className='pt-8 flex flex-col items-center'>
            <GoogleLoginButton onClick={onLogin} />
            <p className="text-sm text-gray-500 mt-4">New users get 50 free credits!</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;