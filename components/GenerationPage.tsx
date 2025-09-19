import React, { useState } from 'react';
import { GeneratedImage, ThemePack } from '../types';
import Button from './Button';
import Spinner from './Spinner';
import DisplayImage from './DisplayImage';

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
  const [isDownloadModalOpen, setDownloadModalOpen] = useState(false);

  const downloadImage = (base64: string, filename: string) => {
    const link = document.createElement('a');
    link.href = base64;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const handleDownloadAsZip = async () => {
    try {
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();
      const timestamp = new Date().toISOString().slice(0, 19).replace(/[-T:]/g, '');
      
      generatedImages.forEach((image) => {
          if (image.base64) {
              const base64Data = image.base64.split(',')[1];
              const filename = `${theme.title.replace(/\s/g, '_')}-${image.label.replace(/\s/g, '_')}.png`;
              zip.file(filename, base64Data, { base64: true });
          }
      });
  
      const content = await zip.generateAsync({ type: 'blob' });
      
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = `${theme.title.replace(/\s/g, '_')}_pack_${timestamp}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Failed to create ZIP file:", error);
      // You could add a user-facing error message here
    } finally {
      setDownloadModalOpen(false);
    }
  };

  const handleDownloadIndividually = () => {
    const timestamp = new Date().toISOString().slice(0, 19).replace(/[-T:]/g, '');
    generatedImages.forEach((image, index) => {
      if (image.base64) {
        setTimeout(() => {
          const filename = `${theme.title.replace(/\s/g, '_')}-${image.label.replace(/\s/g, '_')}_${timestamp}.png`;
          downloadImage(image.base64, filename);
        }, index * 300);
      }
    });
    setDownloadModalOpen(false);
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl">{theme.title}</h1>
          {isGenerating && (
             <>
                <p className="text-gray-400 mt-2 flex items-center justify-center sm:justify-start gap-2">
                <Spinner className="w-5 h-5" /> Generating your new look... This may take a moment.
                </p>
                <p className="text-yellow-400 text-sm mt-4 bg-yellow-900/50 border border-yellow-700 p-3 rounded-xl text-left max-w-md">
                    <span>Important:</span> Please do not navigate away from this page. Doing so may cause you to lose your credits and stop the generation process.
                </p>
            </>
          )}
          {!isGenerating && (
            <p className="text-gray-400 mt-2">Your images are ready! They have been watermarked for preview.</p>
          )}
        </div>
        <div className="flex gap-4">
          <Button onClick={onBackToThemes} variant="secondary" disabled={isGenerating}>Back to Themes</Button>
          <Button onClick={onStartOver} variant="secondary" disabled={isGenerating}>Start Over</Button>
        </div>
      </div>
      
      {!isGenerating && (
        <div className="mb-8 text-center bg-gray-900/50 border border-gray-700 rounded-2xl p-6 max-w-2xl mx-auto space-y-3">
          <h2 className="text-xl">Download Full Pack</h2>
          <p className="text-gray-300">
            You can now download all {generatedImages.length} images from this pack in high quality and without the watermark.
          </p>
          <Button onClick={() => setDownloadModalOpen(true)}>
            Download All
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {generatedImages.map((image) => (
          <div key={image.label} className="flex flex-col gap-3">
            <div className={`w-full bg-gray-900 border-2 border-dashed border-gray-700 rounded-2xl flex items-center justify-center overflow-hidden ${!image.base64 ? 'aspect-square' : ''}`}>
              {image.base64 ? (
                <DisplayImage src={image.base64} alt={image.label} />
              ) : (
                <Spinner className="w-12 h-12" />
              )}
            </div>
            <div className="text-center">
              <p className="text-lg">{image.label}</p>
            </div>
          </div>
        ))}
      </div>
      {isDownloadModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setDownloadModalOpen(false)}
        >
          <div 
            className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl mb-4">Download Options</h2>
            <p className="text-gray-400 mb-8">
              Choose how you'd like to download your generated images.
            </p>
            
            <div className='space-y-4'>
                <Button onClick={handleDownloadAsZip} className="w-full">
                    Download as ZIP
                </Button>
                <Button onClick={handleDownloadIndividually} variant="secondary" className="w-full">
                    Download individual files
                </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerationPage;