import React, { useState, useEffect, useCallback } from 'react';
import HomePage from './components/HomePage';
import ThemeSelectionPage from './components/ThemeSelectionPage';
import UploadPage from './components/UploadPage';
import GenerationPage from './components/GenerationPage';
import Footer from './components/Footer';
import Header from './components/Header';
import BuyCreditsModal from './components/BuyCreditsModal';
import ConfirmCreditSpendModal from './components/ConfirmCreditSpendModal';
import { AppState, UploadedImage, ThemePack, GeneratedImage, User } from './types';
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
  const [isConfirmCreditModalOpen, setConfirmCreditModalOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('zelfyUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setAppState(AppState.THEME_SELECTION); // If user exists, go to themes
    }
  }, []);

  const updateUserInStorage = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('zelfyUser', JSON.stringify(updatedUser));
  };

  const handleLogin = () => {
    const storedUser = localStorage.getItem('zelfyUser');
    if (storedUser) {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser);
    } else {
        const newUser: User = { name: 'Demo User', email: 'demo@user.com', credits: 50 };
        updateUserInStorage(newUser);
    }
    setAppState(AppState.THEME_SELECTION);
  };

  const handleLogout = () => {
    localStorage.removeItem('zelfyUser');
    setUser(null);
    resetToHome();
  };
  
  const handlePurchaseCredits = (creditsToAdd: number) => {
      if (user) {
          const updatedUser = { ...user, credits: user.credits + creditsToAdd };
          updateUserInStorage(updatedUser);
      }
      setBuyCreditsModalOpen(false);
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
    } catch (err) {
        console.error(err);
        setError('Failed to read the image file.');
    } finally {
        setIsLoading(false);
    }
  };

  const handleThemeSelect = (theme: ThemePack) => {
    if (!user || user.credits < theme.cost) {
        setBuyCreditsModalOpen(true);
        return;
    }
    setSelectedTheme(theme);
    setAppState(AppState.UPLOAD_PHOTO);
  };

  const handleBackToThemesFromUpload = () => {
    setAppState(AppState.THEME_SELECTION);
    setSelectedTheme(null);
    setUploadedImage(null);
  };

  const handleConfirmAndGenerate = useCallback(() => {
    if (!user || !selectedTheme) return;

    if (user.credits < selectedTheme.cost) {
        setBuyCreditsModalOpen(true);
        return;
    }

    const updatedUser = { ...user, credits: user.credits - selectedTheme.cost };
    updateUserInStorage(updatedUser);
    
    setAppState(AppState.GENERATING);
    setConfirmCreditModalOpen(false);
  }, [user, selectedTheme]);

  const generateImages = useCallback(async () => {
    if (!selectedTheme || !uploadedImage) return;

    const initialImages = selectedTheme.items.map(item => ({ label: item.label, base64: null }));
    setGeneratedImages(initialImages);

    const base64Data = uploadedImage.base64.split(',')[1];

    for (const item of selectedTheme.items) {
      try {
        const resultBase64 = await editImage(base64Data, uploadedImage.mimeType, item.prompt);
        let finalImage: string | null = null;
        if (resultBase64) {
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
    setUploadedImage(null);
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
        return <HomePage onLogin={handleLogin} />;
      case AppState.THEME_SELECTION:
        if (user) {
          return <ThemeSelectionPage onThemeSelect={handleThemeSelect} userCredits={user.credits} />;
        }
        break;
      case AppState.UPLOAD_PHOTO:
        if (selectedTheme) {
            return <UploadPage 
                selectedTheme={selectedTheme} 
                uploadedImage={uploadedImage}
                onImageUpload={handleImageUpload} 
                setLoading={setIsLoading} 
                onBack={handleBackToThemesFromUpload}
                onConfirmUpload={() => setConfirmCreditModalOpen(true)}
                onClearImage={() => setUploadedImage(null)}
            />;
        }
        break;
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
        break;
    }
    // Fallback to home
    return <HomePage onLogin={handleLogin} />;
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
      <ConfirmCreditSpendModal
        isOpen={isConfirmCreditModalOpen}
        cost={selectedTheme?.cost || 0}
        onClose={() => setConfirmCreditModalOpen(false)}
        onConfirm={handleConfirmAndGenerate}
      />
    </div>
  );
};

export default App;