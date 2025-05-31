// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
// src/preload.ts
import { contextBridge, ipcRenderer } from 'electron';

const electronAPI = {
    selectAudioFile: () => ipcRenderer.invoke('dialog:selectAudioFile')
}
contextBridge.exposeInMainWorld('electronAPI', electronAPI);

console.log('Preload script has been loaded!');