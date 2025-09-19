import React, { useState, useEffect } from 'react';
import { applyWatermark } from '../utils/watermark';
import Spinner from './Spinner';

interface DisplayImageProps {
  src: string | null;
  alt: string;
}

const DisplayImage: React.FC<DisplayImageProps> = ({ src, alt }) => {
  const [displaySrc, setDisplaySrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!src) {
      setIsLoading(true);
      setDisplaySrc(null);
      return;
    }

    let isMounted = true;
    setIsLoading(true);

    applyWatermark(src)
      .then(watermarkedImage => {
        if (isMounted) {
          setDisplaySrc(watermarkedImage);
        }
      })
      .catch(console.error)
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });
    
    return () => {
      isMounted = false;
    };
  }, [src]);

  if (isLoading) {
    return <Spinner className="w-12 h-12" />;
  }

  return (
    <img 
      src={displaySrc || ''} 
      alt={alt} 
      className="w-full h-auto"
      onContextMenu={(e) => e.preventDefault()}
    />
  );
};

export default DisplayImage;