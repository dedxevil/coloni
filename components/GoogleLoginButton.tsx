import React from 'react';
import GoogleIcon from './icons/GoogleIcon';

interface GoogleLoginButtonProps {
  onClick: () => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="transition-colors duration-300 ease-in-out bg-white border border-gray-300 text-gray-700 font-semibold text-lg py-3 px-6 rounded-full flex items-center justify-center gap-4 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-400"
    >
      <GoogleIcon className="w-6 h-6" />
      <span>Sign in with Google</span>
    </button>
  );
};

export default GoogleLoginButton;
