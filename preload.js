/**
 * CS2 Drop Overlay
 * @author LuciusFKR
 * @copyright Copyright (c) 2026 LuciusFKR
 * @license CC BY-NC 4.0
 * * This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.
 * You are free to share and adapt the material, provided you give appropriate credit
 * and DO NOT use the material for commercial purposes.
 */

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  onOverlayStart: (callback) => {
    ipcRenderer.on('overlay-start', () => callback());
  },
  onItemDropped: (callback) => {
    ipcRenderer.on('item-dropped', (event, item) => callback(item));
  },

  // Toggle click-through 
  setIgnoreMouseEvents: (ignore, options) => {
    ipcRenderer.send('set-ignore-mouse-events', ignore, options);
  },

  // Close the overlay
  closeOverlay: () => {
    ipcRenderer.send('close-overlay');
  },

  setTriggerRegion: (region) => {
    ipcRenderer.send('set-trigger-region', region);
  },

  toggleTriggerMode: () => {
    ipcRenderer.send('toggle-trigger-mode');
  },

  // Listen to Mode change (main → renderer)
  onTriggerModeChanged: (callback) => {
    ipcRenderer.on('trigger-mode-changed', (event, active) => callback(active));
  },

  setOcrRegion: (region) => {
  ipcRenderer.send('set-ocr-region', region);
},
});