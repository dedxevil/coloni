
import React, { useState, useEffect, useCallback } from 'react';
import HomePage from './components/HomePage';
import ThemeSelectionPage from './components/ThemeSelectionPage';
import GenerationPage from './components/GenerationPage';
import Footer from './components/Footer';
import { AppState, UploadedImage, ThemePack, GeneratedImage } from './types';
import { editImage } from './services/geminiService';
import Spinner from './components/Spinner';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.HOME);
  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<ThemePack | null>(null);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fileToDataUri = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target?.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
        setError('Please upload a valid image file.');
        setIsLoading(false);
        return;
    }
    try {
        const dataUri = await fileToDataUri(file);
        setUploadedImage({ base64: dataUri, mimeType: file.type });
        setAppState(AppState.THEME_SELECTION);
    } catch (err) {
        console.error(err);
        setError('Failed to read the image file.');
    } finally {
        setIsLoading(false);
    }
  };

  const handleThemeSelect = (theme: ThemePack) => {
    setSelectedTheme(theme);
    const initialImages = theme.items.map(item => ({ label: item.label, base64: null }));
    setGeneratedImages(initialImages);
    setAppState(AppState.GENERATING);
  };

  const generateImages = useCallback(async () => {
    if (!selectedTheme || !uploadedImage) return;

    const base64Data = uploadedImage.base64.split(',')[1];

    for (const item of selectedTheme.items) {
      const resultBase64 = await editImage(base64Data, uploadedImage.mimeType, item.prompt);
      
      setGeneratedImages(prev => 
        prev.map(img => 
          img.label === item.label ? { ...img, base64: resultBase64 ? `data:${uploadedImage.mimeType};base64,${resultBase64}` : null } : img
        )
      );
    }
    setAppState(AppState.RESULTS);
  }, [selectedTheme, uploadedImage]);

  useEffect(() => {
    if (appState === AppState.GENERATING) {
      generateImages();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState]);

  const resetToHome = () => {
    setAppState(AppState.HOME);
    setUploadedImage(null);
    setSelectedTheme(null);
    setGeneratedImages([]);
    setError(null);
  };
  
  const resetToThemes = () => {
    setAppState(AppState.THEME_SELECTION);
    setSelectedTheme(null);
    setGeneratedImages([]);
  }

  const renderContent = () => {
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <Spinner className="w-16 h-16" />
                <p className="mt-4 text-xl">Processing your image...</p>
            </div>
        );
    }

    switch (appState) {
      case AppState.HOME:
        return <HomePage onImageUpload={handleImageUpload} setLoading={setIsLoading} />;
      case AppState.THEME_SELECTION:
        if (uploadedImage) {
          return <ThemeSelectionPage uploadedImage={uploadedImage} onThemeSelect={handleThemeSelect} onStartOver={resetToHome} />;
        }
        break; // Should not happen, but good practice
      case AppState.GENERATING:
      case AppState.RESULTS:
        if (selectedTheme) {
          return <GenerationPage 
            theme={selectedTheme} 
            generatedImages={generatedImages} 
            isGenerating={appState === AppState.GENERATING}
            onBackToThemes={resetToThemes}
            onStartOver={resetToHome}
            />;
        }
        break; // Should not happen
    }
    // Fallback to home
    return <HomePage onImageUpload={handleImageUpload} setLoading={setIsLoading} />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto">
        {error && <div className="bg-red-500 text-white p-4 text-center">{error}</div>}
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
