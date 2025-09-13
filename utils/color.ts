const stringToHashCode = (str: string): number => {
  let hash = 0;
  if (str.length === 0) {
    return hash;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

export const getGradientForText = (text: string): string => {
  const hash = stringToHashCode(text);
  
  // Generate two distinct hues from the hash
  const hue1 = Math.abs(hash % 360);
  const hue2 = Math.abs(Math.sin(hash) * 360);

  // Use a fixed saturation and lightness for vibrant but readable colors
  const saturation1 = 70;
  const lightness1 = 45;
  const saturation2 = 80;
  const lightness2 = 55;

  const color1 = `hsl(${hue1}, ${saturation1}%, ${lightness1}%)`;
  const color2 = `hsl(${hue2}, ${saturation2}%, ${lightness2}%)`;
  
  // Generate a dynamic angle
  const angle = Math.abs(hash % 180);

  return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
};