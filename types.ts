
export interface ThemeItem {
  label: string;
  prompt: string;
}

export interface ThemePack {
  title: string;
  description: string;
  items: ThemeItem[];
}

export enum AppState {
  HOME,
  THEME_SELECTION,
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
