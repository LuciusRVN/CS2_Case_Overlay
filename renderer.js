/**
 * CS2 Drop Overlay
 * @author LuciusFKR
 * @copyright Copyright (c) 2026 LuciusFKR
 * @license CC BY-NC 4.0
 * * This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.
 * You are free to share and adapt the material, provided you give appropriate credit
 * and DO NOT use the material for commercial purposes.
 */

'use strict';

// ─────────────────────────────────────────────
// CONSTANTS & CONFIG
// ─────────────────────────────────────────────

const RARITY_DATA = {
  consumer:      { label: 'Consumer Grade',    color: '#b0c3d9', weight: 150 }, 
  industrial:    { label: 'Industrial Grade',  color: '#5e98d9', weight: 100 }, 
  milspec:       { label: 'Mil-Spec',          color: '#4b69ff', weight: 60  }, 
  restricted:    { label: 'Restricted',        color: '#8847ff', weight: 15  }, 
  classified:    { label: 'Classified',        color: '#d32ce6', weight: 4   }, 
  covert:        { label: 'Covert',            color: '#eb4b4b', weight: 1   }, 
  ancient:       { label: 'Ancient / Knife',   color: '#e4ae39', weight: 0.5 }, 
  extraordinary: { label: 'Extraordinary',     color: '#ffd700', weight: 0.5 }, 
};

const WEAR_NAMES = ['Factory New', 'Minimal Wear', 'Field-Tested', 'Well-Worn', 'Battle-Scarred'];


const CAROUSEL_ITEMS_COUNT = 32;   // Total items in carousel
const WINNER_POSITION = 28;        // Winning position
const ITEM_WIDTH = 280;            // px 
const ITEM_GAP = 12;                // px 
const TOTAL_ITEM_STRIDE = ITEM_WIDTH + ITEM_GAP;

let isAnimating = false;
let skipRequested = false;

// ─────────────────────────────────────────────
// AUDIO SYSTEM
// ─────────────────────────────────────────────

function playStartSound() {
  const startSound = new Audio('../assets/sounds/start.wav');
  startSound.volume = 0.4; 
  startSound.play().catch(e => console.log('Error:', e));
}

function playTick() {
  const tick = new Audio('../assets/sounds/tick.wav');
  tick.volume = 0.4; 
  tick.play().catch(e => console.log('Error:', e));
}

function playRevealSound(rarity) {
  const soundMap = {
    'consumer': 'milspec.wav',
    'industrial': 'milspec.wav',
    'milspec': 'milspec.wav',
    'restricted': 'restricted.wav',
    'classified': 'classified.wav',
    'covert': 'covert.wav',
    'ancient': 'ancient.wav'
  };
  const fileName = soundMap[rarity] || 'milspec.wav';
  const reveal = new Audio(`../assets/sounds/${fileName}`);
  reveal.volume = 0.4; 
  reveal.play().catch(e => console.log('Error:', e));
}


// ─────────────────────────────────────────────
// ITEM GENERATION
// ─────────────────────────────────────────────

function weightedRandomRarity() {
  const rarities = Object.keys(RARITY_DATA);
  const total = rarities.reduce((s, r) => s + RARITY_DATA[r].weight, 0);
  let rand = Math.random() * total;
  for (const r of rarities) {
    rand -= RARITY_DATA[r].weight;
    if (rand <= 0) return r;
  }
  return 'milspec';
}

function randomItem(forcedRarity = null) {

  const selectedCase = document.getElementById('caseSelector').value;
  const pool = CASE_DB[selectedCase] || CASE_DB['revolution'];
  let chosenRarity = forcedRarity;

  if (!chosenRarity) {
    const availableRarities = [...new Set(pool.map(item => item.rarity))];
    let totalWeight = 0;
    availableRarities.forEach(r => totalWeight += (RARITY_DATA[r]?.weight || 10));
    let rand = Math.random() * totalWeight;
    for (const r of availableRarities) {
      rand -= (RARITY_DATA[r]?.weight || 10);
      if (rand <= 0) {
        chosenRarity = r;
        break;
      }
    }
  }
  const rarityPool = pool.filter(s => s.rarity === chosenRarity);
  
 
  const base = rarityPool.length > 0 
    ? rarityPool[Math.floor(Math.random() * rarityPool.length)] 
    : pool[Math.floor(Math.random() * pool.length)];

  return {
    name: base.name,
    rarity: base.rarity, 
    color: RARITY_DATA[base.rarity]?.color || '#4b69ff',
    image: base.image || null
  };
}

function buildCarouselItems(winnerItem) {
  const items = [];
  for (let i = 0; i < CAROUSEL_ITEMS_COUNT; i++) {
    if (i === WINNER_POSITION) {
      items.push({
        name:   winnerItem.name,
        rarity: winnerItem.rarity,
        wear:   winnerItem.wear || WEAR_NAMES[2],
        color:  RARITY_DATA[winnerItem.rarity]?.color || '#4b69ff',
        image:  winnerItem.image,
        isWinner: true,
      });
    } else {
      items.push(randomItem());
    }
  }
  return items;
}

// ─────────────────────────────────────────────
// DOM HELPERS
// ─────────────────────────────────────────────

function getDisplayName(item) {
  //If knife or gloves -> hide name
  if (item.rarity === 'ancient' || item.rarity === 'extraordinary') {
    return '★ Rare Special Item ★';
  }
  return item.name;
}

function createItemElement(item) {
  const div = document.createElement('div');
  div.className = 'carousel-item';
  div.style.setProperty('--item-color', item.color);

  const displayName = getDisplayName(item);
  const isRare = (item.rarity === 'ancient');
  const nameClass = isRare ? 'carousel-item__name rare-special' : 'carousel-item__name';

  const imageHTML = item.image 
    ? `<img class="carousel-item__image" src="${item.image}" alt="skin" />`
    : `<svg class="carousel-item__icon" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg"><use href="#weapon-silhouette" /></svg>`;

  div.innerHTML = `
    <div class="carousel-item__bg"></div>
    ${imageHTML}
    <div class="${nameClass}">${escapeHTML(displayName)}</div>
    <div class="carousel-item__stripe"></div>
  `;

  return div;
}

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function showBlackScreen() {
  if (isAnimating) return;
  isAnimating = true;

  const container  = document.getElementById('dropContainer');
  const caseName   = document.getElementById('caseName');
  const viewport   = document.querySelector('.carousel-viewport');
  const rarityBar  = document.getElementById('rarityBar');

  playStartSound();

  caseName.textContent = "SCANNING XRAY...";
  viewport.style.display = 'none';
  rarityBar.style.background = '#333';
  rarityBar.style.boxShadow = 'none';

  container.style.display = 'flex';
  container.classList.remove('exiting');
  container.classList.add('entering');
  document.body.classList.add('is-animating');
}

// ─────────────────────────────────────────────
// CAROUSEL ANIMATION ENGINE
// ─────────────────────────────────────────────


/**
 * 
 * @param {Object} item - { name, rarity, wear }
 */
function runDropAnimation(item) {
  skipRequested = false;
  const quickOpenBtn = document.getElementById('quickOpenBtn');
  if (quickOpenBtn) quickOpenBtn.style.display = 'block';
  const container  = document.getElementById('dropContainer');
  const track      = document.getElementById('carouselTrack');
  const rarityBar  = document.getElementById('rarityBar');
  const caseName   = document.getElementById('caseName');
  const viewport   = document.querySelector('.carousel-viewport');
  const allSkins = Object.values(CASE_DB).flat();
  const winnerFromDB = allSkins.find(s => s.name === item.name);

  const winnerItem = {
    name:   item.name   || 'Unknown Item',
    rarity: item.rarity || 'milspec',
    wear:   item.wear   || 'Factory New',
    color:  RARITY_DATA[item.rarity]?.color || '#4b69ff',
    image:  winnerFromDB?.image || null
  };

  // ── Set rarity theme ──
  caseName.textContent = "Unboxing...";
  viewport.style.display = 'block';

  // ── Show container ──
  container.style.display = 'flex';
  container.classList.remove('exiting');
  container.classList.add('entering');
  document.body.classList.add('is-animating');

  // ── Build items ──
  const items = buildCarouselItems(winnerItem);
  track.innerHTML = '';
  const elements = items.map(it => {
    const el = createItemElement(it);
    track.appendChild(el);
    return el;
  });

  // ── Calculate target offset ──
  // To land item[WINNER_POSITION] at center:
  const targetTranslate = -(WINNER_POSITION * TOTAL_ITEM_STRIDE);

  // Small random sub-item offset so it doesn't always stop perfectly centered
  const subpixelNoise = (Math.random() * 20 - 10); // ±10px variation
  const finalOffset = targetTranslate + subpixelNoise;

  // Reset track position
  track.style.transition = 'none';
  track.style.transform  = 'translateX(0px)';

  // Force reflow
  track.getBoundingClientRect();

  // ── Animate with ticking ──
  animateCarousel(track, elements, finalOffset, winnerItem, () => {
    if (quickOpenBtn) quickOpenBtn.style.display = 'none';
    caseName.textContent = getDisplayName(winnerItem);
    playRevealSound(winnerItem.rarity);
    setTimeout(() => {
      dismissOverlay();
      if (window.electronAPI) {
        window.electronAPI.setIgnoreMouseEvents(true, { forward: true });
      }
      isAnimating = false;
    }, 500); 
  });
}

/**
 * Smooth carousel animation using requestAnimationFrame.
 * Implements a custom easing curve with tick sounds.
 */
function animateCarousel(track, elements, targetOffset, winnerItem, onComplete) {
  const DURATION = 7500; // ms
  const startTime = performance.now();
  const startOffset = 0;
  const distance = Math.abs(targetOffset - startOffset);

  let lastTickedIndex = -1;

  function easeOutQuint(t) {
    return 1 - Math.pow(1 - t, 5);
  }

  function getCurrentCenterIndex(currentTranslate) {
    // Which item index is currently in the center viewport?
    const centerX = 0; // track starts at 0, viewport center = 0
    const itemCenter = -currentTranslate;
    const idx = Math.round(itemCenter / TOTAL_ITEM_STRIDE);
    return Math.max(0, Math.min(elements.length - 1, idx));
  }

  function frame(now) {
    if (skipRequested) {
      track.style.transform = `translateX(${targetOffset}px)`;
      
      if (elements[WINNER_POSITION]) {
        elements[WINNER_POSITION].classList.add('is-center');
        const currentColor = elements[WINNER_POSITION].style.getPropertyValue('--item-color');
        const rarityBar = document.getElementById('rarityBar');
        if (rarityBar) {
          rarityBar.style.background = currentColor;
          rarityBar.style.boxShadow = `0 0 16px ${currentColor}`;
        }
      }
      document.getElementById('quickOpenBtn').style.display = 'none';
      setTimeout(onComplete, 100);
      return; 
    }
    
    const elapsed = now - startTime;
    const t = Math.min(elapsed / DURATION, 1);
    const easedT = easeOutQuint(t);

    const currentOffset = startOffset + (targetOffset - startOffset) * easedT;
    track.style.transform = `translateX(${currentOffset}px)`;

    // ── Tick detection ──
    const centerIdx = getCurrentCenterIndex(currentOffset);
    if (centerIdx !== lastTickedIndex) {
      lastTickedIndex = centerIdx;
      playTick();

      const rarityBar = document.getElementById('rarityBar');
      if (rarityBar && elements[centerIdx]) {
        const currentColor = elements[centerIdx].style.getPropertyValue('--item-color');
        rarityBar.style.background = currentColor;
        rarityBar.style.boxShadow = `0 0 16px ${currentColor}`;
      }
      elements.forEach((el, i) => {
        const dist = Math.abs(i - centerIdx);
        el.classList.toggle('is-center', dist === 0);
        el.classList.toggle('is-near',   dist === 1);
        el.classList.toggle('is-far',    dist >= 2);
      });
    }

    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      // Ensure final position
      track.style.transform = `translateX(${targetOffset}px)`;

      // Highlight winner
      if (elements[WINNER_POSITION]) {
        elements[WINNER_POSITION].classList.add('is-center');
      }

      setTimeout(onComplete, 400);
    }
  }

  requestAnimationFrame(frame);
}

/**
 * Show the won item card beneath the carousel.
 */
function showWonItem(item) {
  const wonEl    = document.getElementById('wonItem');
  const wonCard  = document.getElementById('wonCard');
  const wonGlow  = document.getElementById('wonGlow');
  const wonName  = document.getElementById('wonName');
  const wonWear  = document.getElementById('wonWear');
  const wonBadge = document.getElementById('wonRarityBadge');
  document.getElementById('caseName').textContent = item.name;

  wonName.textContent  = item.name;
  wonWear.textContent  = item.wear;
  wonBadge.textContent = (RARITY_DATA[item.rarity]?.label || item.rarity).toUpperCase();

  // Apply rarity color
  wonCard.style.setProperty('--won-color', item.color);
  wonBadge.style.color      = item.color;
  wonBadge.style.borderColor = item.color;
  wonBadge.style.boxShadow  = `0 0 10px ${item.color}40`;
  wonGlow.style.background  = `radial-gradient(circle, ${item.color} 0%, transparent 65%)`;

  wonEl.style.display = 'flex';

  playRevealSound(item.color);
}

/**
 * Dismiss the overlay.
 */
function dismissOverlay() {
  const container = document.getElementById('dropContainer');
  document.getElementById('quickOpenBtn').style.display = 'none';
  container.classList.add('exiting');
  document.body.classList.remove('is-animating');
  setTimeout(() => {
    container.style.display = 'none';
    container.classList.remove('exiting', 'entering');
    // Reset state
    document.getElementById('wonItem').style.display = 'none';
    document.getElementById('carouselTrack').innerHTML = '';
    isAnimating = false;
  }, 450);
}

// ─────────────────────────────────────────────
// OPEN CASE MODE
// ─────────────────────────────────────────────
function setTriggerMode(active) {
  const dot        = document.querySelector('.status-dot');
  const statusText = document.querySelector('.status-text');
  const triggerZone = document.getElementById('triggerZone');

  if (active) {
    // green, Open Case Mode active
    if (dot) {
      dot.style.background  = '#2ecc71';
      dot.style.boxShadow   = '0 0 8px #2ecc71';
    }
    if (statusText) statusText.textContent = 'Ready — click Open Case';
    if (triggerZone) {
      triggerZone.classList.add('trigger-zone--active');
    }
  } else {
    // red, inactive
    if (dot) {
      dot.style.background  = '#eb4b4b';
      dot.style.boxShadow   = '0 0 8px #eb4b4b';
    }
    if (statusText) statusText.textContent = 'Not Ready (Ctrl+Shift+P)';
    if (triggerZone) {
      triggerZone.classList.remove('trigger-zone--active');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Default — red, inactive
  setTriggerMode(false);

  // ── Close button ──
  const closeBtn = document.getElementById('closeBtn');
  if (closeBtn) {
    closeBtn.addEventListener('mouseenter', () => {
      if (window.electronAPI) window.electronAPI.setIgnoreMouseEvents(false);
    });
    closeBtn.addEventListener('mouseleave', () => {
      if (window.electronAPI && !isAnimating) {
        window.electronAPI.setIgnoreMouseEvents(true, { forward: true });
      }
    });
    closeBtn.addEventListener('click', () => {
      if (window.electronAPI && window.electronAPI.closeOverlay) {
        window.electronAPI.closeOverlay();
      }
    });
  }

  // ── Listen for events from main process ──
  if (window.electronAPI) {
    // 1. Ctrl+Shift+P changing Open Case Mode
    window.electronAPI.onTriggerModeChanged((active) => {
      setTriggerMode(active);
    });

    // 2. Show roulette after scan (OCR done)
    window.electronAPI.onItemDropped((item) => {
      console.log('[Renderer] Item dropped:', item);
      runDropAnimation(item);
    });

    window.electronAPI.onOverlayStart(() => {
      window.electronAPI.setIgnoreMouseEvents(true, { forward: true });
      showBlackScreen();
    });
  } 

  const otherInteractive = document.querySelectorAll('.interactive:not(#closeBtn):not(#triggerZone)');
  otherInteractive.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (window.electronAPI && !isAnimating) {
        window.electronAPI.setIgnoreMouseEvents(false);
      }
    });
    el.addEventListener('mouseleave', () => {
      if (window.electronAPI && !isAnimating) {
        window.electronAPI.setIgnoreMouseEvents(true, { forward: true });
      }
    });
  });

  // ── Quick Open ──
  const quickOpenBtn = document.getElementById('quickOpenBtn');
  if (quickOpenBtn) {
    quickOpenBtn.addEventListener('mouseenter', () => {
      if (window.electronAPI) window.electronAPI.setIgnoreMouseEvents(false);
    });
    quickOpenBtn.addEventListener('mouseleave', () => {
      if (window.electronAPI) window.electronAPI.setIgnoreMouseEvents(true, { forward: true });
    });
    quickOpenBtn.addEventListener('click', () => {
      skipRequested = true;
    });
  }

  const statusPill = document.getElementById('statusPill');
  if (statusPill && window.electronAPI && window.electronAPI.toggleTriggerMode) {
    statusPill.addEventListener('click', () => {
      window.electronAPI.toggleTriggerMode();
    });
  }

  // ── TriggerZone ──
   const triggerZone = document.getElementById('triggerZone');
  if (triggerZone && window.electronAPI) {
    const sendRegion = () => {
      const rect = triggerZone.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      // Calculate on screen coordinates
      window.electronAPI.setTriggerRegion({
        x:      Math.round(rect.left   * dpr),
        y:      Math.round(rect.top    * dpr),
        width:  Math.round(rect.width  * dpr),
        height: Math.round(rect.height * dpr),
      });
    };
    sendRegion();
    window.addEventListener('resize', sendRegion);
  }

  // ── Help Modal Logic ──
  const helpBtn = document.getElementById('helpBtn');
  const helpModal = document.getElementById('helpModal');
  const closeHelpBtn = document.getElementById('closeHelpBtn');

  if (helpBtn && helpModal && closeHelpBtn) {
    helpBtn.addEventListener('click', () => {
      helpModal.style.display = 'flex';
      if (window.electronAPI) window.electronAPI.setIgnoreMouseEvents(false);
    });

    closeHelpBtn.addEventListener('click', () => {
      helpModal.style.display = 'none';
      if (window.electronAPI && !isAnimating) {
        window.electronAPI.setIgnoreMouseEvents(true, { forward: true });
      }
    });

    helpModal.addEventListener('click', (e) => {
      if (e.target === helpModal) {
        helpModal.style.display = 'none';
        if (window.electronAPI && !isAnimating) {
          window.electronAPI.setIgnoreMouseEvents(true, { forward: true });
        }
      }
    });
  }

  // ════════════════════ CALIBRATION LOGIC ════════════════════
  let isCalibrationActive = false;
  const calibrateBtn = document.getElementById('calibrateBtn');
  const ocrZone = document.getElementById('ocrZone');

  function makeDraggable(el, onUpdate) {
    let isDragging = false;
    let offset = { x: 0, y: 0 };

    el.addEventListener('mousedown', (e) => {
      if (!isCalibrationActive) return;
      isDragging = true;
      const rect = el.getBoundingClientRect();
      offset = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      el.style.transform = 'none';
      el.style.left = rect.left + 'px';
      el.style.top = rect.top + 'px';
      if (window.electronAPI) window.electronAPI.setIgnoreMouseEvents(false);
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      el.style.left = (e.clientX - offset.x) + 'px';
      el.style.top = (e.clientY - offset.y) + 'px';
    });

    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        if (onUpdate) onUpdate();
      }
    });
  }

  if (calibrateBtn && ocrZone) {
    calibrateBtn.addEventListener('click', () => {
      isCalibrationActive = !isCalibrationActive;
      document.body.classList.toggle('calibration-mode', isCalibrationActive);
      
      if (isCalibrationActive) {
        calibrateBtn.style.color = '#3498db';
        ocrZone.style.width = (window.innerWidth * 0.35) + 'px';
        ocrZone.style.height = (window.innerHeight * 0.05) + 'px';
        ocrZone.style.left = (window.innerWidth * 0.325) + 'px';
        ocrZone.style.top = (window.innerHeight * 0.824) + 'px';
        if (window.electronAPI) window.electronAPI.setIgnoreMouseEvents(false);
      } else {
        calibrateBtn.style.color = '';
        if (window.electronAPI && !isAnimating) {
          window.electronAPI.setIgnoreMouseEvents(true, { forward: true });
        }
      }
    });

    makeDraggable(ocrZone, () => {
      const rect = ocrZone.getBoundingClientRect();
      if (window.electronAPI && window.electronAPI.setOcrRegion) {
        window.electronAPI.setOcrRegion({
          xPct: rect.left / window.innerWidth,
          yPct: rect.top / window.innerHeight,
          wPct: rect.width / window.innerWidth,
          hPct: rect.height / window.innerHeight
        });
      }
    });
  }
});


