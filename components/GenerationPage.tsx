
import React from 'react';
import { GeneratedImage, ThemePack } from '../types';
import Button from './Button';
import Spinner from './Spinner';

interface GenerationPageProps {
  theme: ThemePack;
  generatedImages: GeneratedImage[];
  isGenerating: boolean;
  onBackToThemes: () => void;
  onStartOver: () => void;
}

const GenerationPage: React.FC<GenerationPageProps> = ({
  theme,
  generatedImages,
  isGenerating,
  onBackToThemes,
  onStartOver,
}) => {
  const downloadImage = (base64: string, filename: string) => {
    const link = document.createElement('a');
    link.href = base64;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAll = () => {
    generatedImages.forEach((image, index) => {
      if (image.base64) {
        setTimeout(() => {
          downloadImage(image.base64, `${theme.title.replace(/\s/g, '_')}-${image.label.replace(/\s/g, '_')}.png`);
        }, index * 300); // Stagger downloads to avoid browser blocking
      }
    });
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold">{theme.title}</h1>
            {isGenerating && (
                <p className="text-gray-400 mt-2 flex items-center justify-center sm:justify-start gap-2">
                    <Spinner className="w-5 h-5" /> Generating your new look...
                </p>
            )}
            {!isGenerating && (
                <p className="text-gray-400 mt-2">Your images are ready!</p>
            )}
        </div>
        <div className="flex gap-4">
          <Button onClick={onBackToThemes} variant="secondary">Back to Themes</Button>
          <Button onClick={onStartOver} variant="secondary">Start Over</Button>
        </div>
      </div>
      
      {!isGenerating && (
        <div className="mb-8 text-center">
          <Button onClick={handleDownloadAll}>Download All</Button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {generatedImages.map((image) => (
          <div key={image.label} className="flex flex-col gap-3">
            <div className="aspect-square w-full bg-gray-900 border-2 border-dashed border-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
              {image.base64 ? (
                <img src={image.base64} alt={image.label} className="w-full h-full object-cover" />
              ) : (
                <Spinner className="w-12 h-12" />
              )}
            </div>
            <div className="text-center">
                <p className="font-bold text-lg">{image.label}</p>
                {image.base64 && (
                    <button
                        onClick={() => downloadImage(image.base64!, `${theme.title.replace(/\s/g, '_')}-${image.label.replace(/\s/g, '_')}.png`)}
                        className="text-sm text-gray-400 hover:text-white underline transition-colors"
                    >
                        Download
                    </button>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenerationPage;
