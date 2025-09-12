import React, { useRef, useState, useEffect } from 'react';
import StarIcon from './icons/StarIcon';
import Button from './Button';

interface HomePageProps {
  onImageUpload: (file: File) => void;
  setLoading: (loading: boolean) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onImageUpload, setLoading }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem('coloniDisclaimerAccepted') === 'true';
    if (isAccepted) {
      setDisclaimerAccepted(true);
    }
  }, []);

  const handleDisclaimerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setDisclaimerAccepted(isChecked);
    if (isChecked) {
      localStorage.setItem('coloniDisclaimerAccepted', 'true');
    } else {
      localStorage.removeItem('coloniDisclaimerAccepted');
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
      onImageUpload(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <div className="flex items-center gap-4 mb-2">
        <StarIcon className="w-16 h-16 text-white" />
        <h1 className="text-8xl font-bold tracking-tighter">Coloni</h1>
      </div>
      <p className="text-2xl text-gray-400 mb-12">color yourself</p>
      
      <div className="max-w-xl mx-auto space-y-6">
        <p className="text-lg text-gray-300">
          Upload a clear, front-facing photo of yourself to begin your creative transformation. Our AI will use this image to generate stunning new versions based on the themes you choose.
        </p>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-4 text-left space-y-3">
            <h3 className="font-bold text-lg text-center">Disclaimer</h3>
            <p className="text-sm text-gray-400">
                Coloni will not be responsible for the images created. The image generation is handled by Google Gemini. We do not store any of your uploaded or generated images on our servers.
            </p>
            <div className="flex items-center gap-2 pt-2">
                <input
                    type="checkbox"
                    id="disclaimer-checkbox"
                    checked={disclaimerAccepted}
                    onChange={handleDisclaimerChange}
                    className="h-4 w-4 rounded bg-gray-800 border-gray-600 text-white focus:ring-2 focus:ring-white cursor-pointer"
                />
                <label htmlFor="disclaimer-checkbox" className="text-sm text-gray-300 select-none cursor-pointer">
                    I have read and accept the terms to continue.
                </label>
            </div>
        </div>

        <Button onClick={handleButtonClick} disabled={!disclaimerAccepted}>
          Upload Your Photo
        </Button>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
        disabled={!disclaimerAccepted}
      />
    </div>
  );
};

export default HomePage;