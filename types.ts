
export interface ThemeItem {
  label: string;
  prompt: string;
  img: string;
}

export interface ThemePack {
  title: string;
  description: string;
  cost: number;
  items: ThemeItem[];
  photoType?: 'selfie' | 'couple';
}

export enum AppState {
  HOME,
  THEME_SELECTION,
  UPLOAD_PHOTO,
  GENERATING,
  RESULTS,
}

export interface UploadedImage {
  base64: string;
  mimeType: string;
}

export interface GeneratedImage {
  label: string;
  base64: string | null;
}

export interface User {
  name: string;
  email: string;
  credits: number;
}