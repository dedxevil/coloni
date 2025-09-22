import React, { useRef, useState, useEffect } from 'react';
import Button from './Button';
import { ThemePack, UploadedImage } from '../types';

interface UploadPageProps {
  selectedTheme: ThemePack;
  uploadedImage: UploadedImage | null;
  onImageUpload: (file: File) => void;
  setLoading: (loading: boolean) => void;
  onBack: () => void;
  onConfirmUpload: () => void;
  onClearImage: () => void;
}

const UploadPage: React.FC<UploadPageProps> = ({ 
    selectedTheme, 
    uploadedImage, 
    onImageUpload, 
    setLoading, 
    onBack,
    onConfirmUpload,
    onClearImage
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem('zelfyDisclaimerAccepted') === 'true';
    if (isAccepted) {
      setDisclaimerAccepted(true);
    }
  }, []);

  const handleDisclaimerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setDisclaimerAccepted(isChecked);
    if (isChecked) {
      localStorage.setItem('zelfyDisclaimerAccepted', 'true');
    } else {
      localStorage.removeItem('zelfyDisclaimerAccepted');
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
      onImageUpload(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };
  
  const handleChangePhotoClick = () => {
      onClearImage();
      handleUploadClick();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-4xl">{uploadedImage ? 'Ready to Go!' : 'Almost there!'}</h1>
        <p className="text-xl text-gray-400">
          You've selected the <span className="text-white">"{selectedTheme.title}"</span> theme pack.
        </p>
        
        {uploadedImage ? (
            <div className='space-y-4'>
                <p className='text-lg text-gray-300'>Here's your selected photo. If you're ready, confirm to start the generation.</p>
                <div className='flex justify-center'>
                    <img src={uploadedImage.base64} alt="Your upload" className="rounded-2xl max-h-60 border-2 border-gray-700" />
                </div>
            </div>
        ) : (
            <>
              <p className="text-lg text-gray-300">
                {selectedTheme.photoType === 'couple' 
                  ? "For this theme, please upload a clear photo of a couple. "
                  : "Now, upload a clear, front-facing photo of yourself. "
                }
                Our AI will use this image to generate your stunning new looks.
              </p>
              <div className="bg-gray-900 border border-gray-700 rounded-2xl p-4 text-left space-y-3">
                  <h3 className="text-lg text-center">Disclaimer</h3>
                  <p className="text-sm text-gray-400">
                      Zelfy will not be responsible for the images created. The image generation is handled by Google Gemini. We do not store any of your uploaded or generated images on our servers.
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
            </>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button onClick={onBack} variant="secondary">Back to Themes</Button>
          {uploadedImage ? (
            <>
                <Button onClick={handleChangePhotoClick} variant="secondary">Change Photo</Button>
                <Button onClick={onConfirmUpload}>Confirm & Generate</Button>
            </>
          ) : (
             <Button onClick={handleUploadClick} disabled={!disclaimerAccepted}>
                Upload Your Photo
            </Button>
          )}
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
      />
    </div>
  );
};

export default UploadPage;