import React, { useState, useEffect, useCallback } from 'react';
import HomePage from './components/HomePage';
import ThemeSelectionPage from './components/ThemeSelectionPage';
import GenerationPage from './components/GenerationPage';
import Footer from './components/Footer';
import Header from './components/Header';
import BuyCreditsModal from './components/BuyCreditsModal';
import { AppState, UploadedImage, ThemePack, GeneratedImage, User } from './types';
import { THEME_PACK_COST, DOWNLOAD_COST } from './constants';
import { editImage } from './services/geminiService';
import Spinner from './components/Spinner';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.HOME);
  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<ThemePack | null>(null);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isBuyCreditsModalOpen, setBuyCreditsModalOpen] = useState(false);

  useEffect(() => {
    // Mock session management
    const storedUser = localStorage.getItem('coloniUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const updateUserInStorage = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('coloniUser', JSON.stringify(updatedUser));
  };

  const handleLogin = () => {
    // Mock Google login
    const storedUser = localStorage.getItem('coloniUser');
    if (storedUser) {
        setUser(JSON.parse(storedUser));
    } else {
        const newUser: User = { name: 'Demo User', email: 'demo@user.com', credits: 50 };
        updateUserInStorage(newUser);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('coloniUser');
    setUser(null);
    resetToHome();
  };
  
  const handlePurchaseCredits = () => {
      if (user) {
          const updatedUser = { ...user, credits: user.credits + 100 };
          updateUserInStorage(updatedUser);
      }
      setBuyCreditsModalOpen(false);
  }

  const handleDownloadPurchase = () => {
    if (user && user.credits >= DOWNLOAD_COST) {
        const updatedUser = { ...user, credits: user.credits - DOWNLOAD_COST };
        updateUserInStorage(updatedUser);
    }
  }

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
    if (!user || user.credits < THEME_PACK_COST) {
        setBuyCreditsModalOpen(true);
        return;
    }
    const updatedUser = { ...user, credits: user.credits - THEME_PACK_COST };
    updateUserInStorage(updatedUser);
    
    setSelectedTheme(theme);
    const initialImages = theme.items.map(item => ({ label: item.label, base64: null }));
    setGeneratedImages(initialImages);
    setAppState(AppState.GENERATING);
  };

  const generateImages = useCallback(async () => {
    if (!selectedTheme || !uploadedImage) return;

    const base64Data = uploadedImage.base64.split(',')[1];

    for (const item of selectedTheme.items) {
      try {
        const resultBase64 = await editImage(base64Data, uploadedImage.mimeType, item.prompt);
        let finalImage: string | null = null;
        if (resultBase64) {
          // Store the original, non-watermarked image data
          finalImage = `data:${uploadedImage.mimeType};base64,${resultBase64}`;
        }
        
        setGeneratedImages(prev => 
          prev.map(img => 
            img.label === item.label ? { ...img, base64: finalImage } : img
          )
        );
      } catch (e) {
        console.error(`Failed to generate image for prompt: ${item.prompt}`, e);
        setGeneratedImages(prev => 
          prev.map(img => 
            img.label === item.label ? { ...img, base64: null } : img
          )
        );
      }
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
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
                <Spinner className="w-16 h-16" />
                <p className="mt-4 text-xl">Processing your image...</p>
            </div>
        );
    }

    switch (appState) {
      case AppState.HOME:
        return <HomePage onImageUpload={handleImageUpload} setLoading={setIsLoading} isLoggedIn={!!user} onLogin={handleLogin} />;
      case AppState.THEME_SELECTION:
        if (uploadedImage && user) {
          return <ThemeSelectionPage uploadedImage={uploadedImage} onThemeSelect={handleThemeSelect} onStartOver={resetToHome} userCredits={user.credits} />;
        }
        break; 
      case AppState.GENERATING:
      case AppState.RESULTS:
        if (selectedTheme && user) {
          return <GenerationPage 
            theme={selectedTheme} 
            generatedImages={generatedImages} 
            isGenerating={appState === AppState.GENERATING}
            onBackToThemes={resetToThemes}
            onStartOver={resetToHome}
            user={user}
            onDownloadAll={handleDownloadPurchase}
            />;
        }
        break;
    }
    // Fallback to home
    return <HomePage onImageUpload={handleImageUpload} setLoading={setIsLoading} isLoggedIn={!!user} onLogin={handleLogin} />;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} onLogout={handleLogout} onBuyCredits={() => setBuyCreditsModalOpen(true)} />
      <main className="flex-grow container mx-auto">
        {error && <div className="bg-red-500 text-white p-4 text-center" onClick={() => setError(null)}>{error}</div>}
        {renderContent()}
      </main>
      <Footer />
      <BuyCreditsModal 
        isOpen={isBuyCreditsModalOpen} 
        onClose={() => setBuyCreditsModalOpen(false)} 
        onPurchase={handlePurchaseCredits} 
      />
    </div>
  );
};

export default App;