/**
 * CS2 Drop Overlay
 * @author LuciusFKR
 * @copyright Copyright (c) 2026 LuciusFKR
 * @license CC BY-NC 4.0
 * * This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.
 * You are free to share and adapt the material, provided you give appropriate credit
 * and DO NOT use the material for commercial purposes.
 */

const { app, BrowserWindow, ipcMain, screen, globalShortcut, desktopCapturer } = require('electron');
const { uIOhook, UiohookKey } = require('uiohook-napi');
const path = require('path');
const Jimp = require('jimp');
const Tesseract = require('tesseract.js');
const Fuse = require('fuse.js');
const CASE_DB = require('./database.js');

let overlayWindow = null;
let isProcessing = false;

let triggerZoneRegion = null;
let triggerActive = false;  // Ctrl+Shift+P turning on/off Case Opening Mode
let ocrConfig = { xPct: 0.325, yPct: 0.824, wPct: 0.35, hPct: 0.05 };

// ─────────────────────────────────────────────
// SKINDB (Fuzzy Search)
// ─────────────────────────────────────────────
const ALL_SKINS_LIST = Object.values(CASE_DB).flat();

const fuse = new Fuse(ALL_SKINS_LIST, {
  keys: ['name'],
  threshold: 0.6,          // threshold
  ignoreLocation: true,    // Looking for the match anywhere on screenshot
  minMatchCharLength: 5    // Ignoring accidental words
});

// ─────────────────────────────────────────────
//  CS2 WINDOW CAPTURE
// Uses Electron's desktopCapturer.
// desktopCapturer captures a specific CS2 window directly
// from its GPU buffer—the overlay doesn't appear on the image.
// ─────────────────────────────────────────────

const CS2_WINDOW_NAMES = [
  'Counter-Strike 2',
  'cs2.exe',
];

/**
 * Find CS2 window with desktopCapturer.
 * Returns source or null if CS2 is not running.
 */
async function findCS2Source() {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.size;

  const sources = await desktopCapturer.getSources({
    types: ['window'],
    thumbnailSize: { width, height },
    fetchWindowIcons: false,
  });

  console.log('[Capture] Windows available:', sources.map(s => s.name));

  // Looking for CS2 window (case-insensitive)
  const cs2Source = sources.find(s =>
    CS2_WINDOW_NAMES.some(name =>
      s.name.toLowerCase().includes(name.toLowerCase())
    )
  );

  return cs2Source || null;
}


async function captureCS2Window() {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.size;

  const cs2Source = await findCS2Source();

  if (cs2Source) {
    console.log(`[Capture] Found CS2 window: "${cs2Source.name}"`);
    const pngBuffer = cs2Source.thumbnail.toPNG();
    if (pngBuffer && pngBuffer.length > 1000) {
      return pngBuffer;
    }
    console.warn('[Capture] No CS2 thumbnail - trying fallback');
  } else {
    console.warn('[Capture] No CS2 window — trying fallback');
  }

  // Fallback: full screen (screen source instead of window)
  // desktopCapturer on ['screen'] types does not contain Electron overlay layers
  const screenSources = await desktopCapturer.getSources({
    types: ['screen'],
    thumbnailSize: { width, height },
    fetchWindowIcons: false,
  });

  if (screenSources.length > 0) {
    console.log('[Capture] Fallback: whole screen capture');
    return screenSources[0].thumbnail.toPNG();
  }

  throw new Error('[Capture] No capture source');
}

// ─────────────────────────────────────────────
//  OCR LOGIC
// ─────────────────────────────────────────────

async function captureAndReadScreen() {
  if (isProcessing) return;
  isProcessing = true;

  if (overlayWindow && !overlayWindow.isDestroyed()) {
    overlayWindow.webContents.send('overlay-start');
  }

  console.log('[OCR] Watining 4 seconds for animation CS2...');
  await new Promise(resolve => setTimeout(resolve, 4000));

  console.log('[OCR] Screenshotting CS2...');

  try {
    // Screenshot from cs2 window, overlay is not covering screenshot
    const imgBuffer = await captureCS2Window();
    const image = await Jimp.read(imgBuffer);

    const screenWidth  = image.bitmap.width;
    const screenHeight = image.bitmap.height;

    // Cropping
    const cropWidth  = Math.floor(screenWidth  * ocrConfig.wPct);
    const cropHeight = Math.floor(screenHeight * ocrConfig.hPct);
    const cropX      = Math.floor(screenWidth  * ocrConfig.xPct);
    const cropY      = Math.floor(screenHeight * ocrConfig.yPct);

    image.crop(cropX, cropY, cropWidth, cropHeight);

    // DEBUG
    await image.writeAsync('debug_crop.png');
    console.log('[OCR] debug_crop.png saved');

    const croppedBuffer = await image.getBufferAsync(Jimp.MIME_PNG);

    console.log('[OCR] Text recognition (Tesseract)...');
    const { data: { text } } = await Tesseract.recognize(croppedBuffer, 'eng');
    let cleanedText = text.replace(/\n/g, ' ').trim();
    cleanedText = cleanedText.replace(/The.*Collection/ig, '');
    cleanedText = cleanedText.replace(/Collection/ig, '');
    cleanedText = cleanedText.replace(/Case/ig, '');
    console.log(`[OCR] Text: "${cleanedText}"`);

    const results = fuse.search(cleanedText);

    if (results.length > 0) {
      const matchedItem = results[0].item;
      console.log('[OCR] Matched:', matchedItem.name);

      if (overlayWindow && !overlayWindow.isDestroyed()) {
        overlayWindow.webContents.send('item-dropped', {
          name:   matchedItem.name,
          rarity: matchedItem.rarity,
          wear:   'Factory New',
        });
      }
    } else {
      console.log('[OCR] No DB match.');
      if (overlayWindow && !overlayWindow.isDestroyed()) {
        overlayWindow.webContents.send('item-dropped', { name: 'Not in DB', rarity: 'milspec' });
      }
    }

  } catch (error) {
    console.error('[OCR] Error capturing:', error);
  } finally {
    isProcessing = false;
  }
}

// ─────────────────────────────────────────────
// ELECTRON WINDOW
// ─────────────────────────────────────────────
function createOverlayWindow() {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;

  overlayWindow = new BrowserWindow({
    width, height, x: 0, y: 0,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    skipTaskbar: false,
    resizable: false,
    movable: false,
    focusable: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  

  overlayWindow.setAlwaysOnTop(true, 'screen-saver');
  overlayWindow.setIgnoreMouseEvents(true, { forward: true });
  overlayWindow.loadFile(path.join(__dirname, 'index.html')); 

  ipcMain.on('set-ignore-mouse-events', (event, ignore, options) => {
    if (overlayWindow) overlayWindow.setIgnoreMouseEvents(ignore, options || { forward: true });
  });

  ipcMain.on('close-overlay', () => {
  app.exit(0);
});

  ipcMain.on('set-trigger-region', (event, region) => {
    triggerZoneRegion = region;
    console.log('[Hook] TriggerZone region updated:', region);
  });

  ipcMain.on('toggle-trigger-mode', () => {
    triggerActive = !triggerActive;
    console.log('[UI] Ready status toggled via click:', triggerActive ? 'ACTIVE' : 'NOT ACTIVE');
    if (overlayWindow && !overlayWindow.isDestroyed()) {
      overlayWindow.webContents.send('trigger-mode-changed', triggerActive);
    }
  });

  ipcMain.on('set-ocr-region', (event, region) => {
  ocrConfig = region;
  console.log('[OCR] New Region set:', region);
});

  return overlayWindow;
}

// ─────────────────────────────────────────────
// GLOBAL MOUSE HOOK (uiohook-napi) 
// VAC-safe: using OS accessibility, doesnt touch CS2.
// ─────────────────────────────────────────────
function startMouseHook() {
  uIOhook.on('mousedown', (e) => {
    if (e.button !== 1) return;
    if (!triggerZoneRegion) return;
    if (isProcessing) return;

    const { x, y, width, height } = triggerZoneRegion;

    // Only if trigger zone is active
    if (!triggerActive) return;

    // Check if cursor is in trigger zone
    if (e.x >= x && e.x <= x + width && e.y >= y && e.y <= y + height) {
      triggerActive = false;  
      overlayWindow.webContents.send('trigger-mode-changed', false);
      captureAndReadScreen();
    }
  });

  uIOhook.start();
}

// ─────────────────────────────────────────────
// LIFE CYCLE
// ─────────────────────────────────────────────
app.whenReady().then(() => {
  createOverlayWindow();
  startMouseHook();

  const ret = globalShortcut.register('CommandOrControl+Shift+P', () => {
    triggerActive = !triggerActive;
    console.log('[Shortcut] Ready status:', triggerActive ? 'ACTIVE' : 'NOT ACTIVE');
    if (overlayWindow && !overlayWindow.isDestroyed()) {
      overlayWindow.webContents.send('trigger-mode-changed', triggerActive);
    }
  });

  if (!ret) {
    console.log('[Shortcut] Error with shortcut.');
  } else {
    console.log('[Shortcut] Ready! Press Ctrl+Shift+P, to scan.');
  }
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
  uIOhook.stop();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});