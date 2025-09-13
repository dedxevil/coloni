import React from 'react';
import { GeneratedImage, ThemePack, User } from '../types';
import Button from './Button';
import Spinner from './Spinner';
import DisplayImage from './DisplayImage';
import { DOWNLOAD_COST } from '../constants';

interface GenerationPageProps {
  theme: ThemePack;
  generatedImages: GeneratedImage[];
  isGenerating: boolean;
  onBackToThemes: () => void;
  onStartOver: () => void;
  user: User;
  onDownloadAll: () => void;
}

const GenerationPage: React.FC<GenerationPageProps> = ({
  theme,
  generatedImages,
  isGenerating,
  onBackToThemes,
  onStartOver,
  user,
  onDownloadAll,
}) => {
  const downloadImage = (base64: string, filename: string) => {
    const link = document.createElement('a');
    link.href = base64;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePurchaseAndDownload = () => {
    if (user.credits < DOWNLOAD_COST) {
      alert("You do not have enough credits.");
      return;
    }

    const isConfirmed = window.confirm(`This action will cost ${DOWNLOAD_COST} credits and download all images in this pack without watermarks. Do you want to continue?`);

    if (isConfirmed) {
      onDownloadAll(); // Deduct credits

      generatedImages.forEach((image, index) => {
        if (image.base64) {
          setTimeout(() => {
            downloadImage(image.base64, `${theme.title.replace(/\s/g, '_')}-${image.label.replace(/\s/g, '_')}.png`);
          }, index * 300);
        }
      });
    }
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold">{theme.title}</h1>
          {isGenerating && (
            <p className="text-gray-400 mt-2 flex items-center justify-center sm:justify-start gap-2">
              <Spinner className="w-5 h-5" /> Generating your new look... This may take a moment.
            </p>
          )}
          {!isGenerating && (
            <p className="text-gray-400 mt-2">Your images are ready! They have been watermarked for preview.</p>
          )}
        </div>
        <div className="flex gap-4">
          <Button onClick={onBackToThemes} variant="secondary">Back to Themes</Button>
          <Button onClick={onStartOver} variant="secondary">Start Over</Button>
        </div>
      </div>
      
      {!isGenerating && (
        <div className="mb-8 text-center bg-gray-900/50 border border-gray-700 rounded-2xl p-6 max-w-2xl mx-auto space-y-3">
          <h2 className="text-xl font-bold">Download Full Pack</h2>
          <p className="text-gray-300">
            For {DOWNLOAD_COST} credits, you can download all {generatedImages.length} images from this pack in high quality and without the watermark.
          </p>
          <Button onClick={handlePurchaseAndDownload} disabled={user.credits < DOWNLOAD_COST}>
            Download All ({DOWNLOAD_COST} Credits)
          </Button>
           {user.credits < DOWNLOAD_COST && (
              <p className="text-red-400 text-sm !mt-2">Not enough credits. You can buy more from the header.</p>
            )}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {generatedImages.map((image) => (
          <div key={image.label} className="flex flex-col gap-3">
            <div className="w-full bg-gray-900 border-2 border-dashed border-gray-700 rounded-2xl flex items-center justify-center overflow-hidden aspect-square">
              {image.base64 ? (
                <DisplayImage src={image.base64} alt={image.label} />
              ) : (
                <Spinner className="w-12 h-12" />
              )}
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">{image.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerationPage;