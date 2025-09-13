export const applyWatermark = (base64Image: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return reject('Could not get canvas context');
      }

      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the original image
      ctx.drawImage(img, 0, 0);

      // --- Start Watermark Drawing ---
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      const scale = Math.min(canvas.width, canvas.height) / 500; // Increased scale for a bigger watermark

      // Watermark Text
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const fontSize = 60 * scale;
      ctx.font = `bold ${fontSize}px Sniglet`;
      ctx.fillText('Coloni', centerX, centerY + (35 * scale));

      // Watermark Star Icon
      const starSize = 100 * scale;
      const starPath = new Path2D("M50,0 61,39 100,50 61,61 50,100 39,61 0,50 39,39");
      
      ctx.save();
      ctx.translate(centerX - (starSize / 2), centerY - starSize + (15*scale));
      ctx.scale(starSize / 100, starSize / 100);
      ctx.fill(starPath);
      ctx.restore();
      // --- End Watermark Drawing ---

      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = reject;
    img.src = base64Image;
  });
};