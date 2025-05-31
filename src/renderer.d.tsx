// src/renderer.d.ts
export interface ElectronAPI {
  selectAudioFile: () => Promise<string>
}

declare global {
  interface Window {
    electronAPI: ElectronAPI;
  }
}
export {};