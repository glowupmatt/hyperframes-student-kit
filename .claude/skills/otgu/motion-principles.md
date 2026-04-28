# Motion Type Principles — Copy-Pasteable Implementations

All five named principles. Plug into any HyperFrames composition. Swap `--ink`, `--cream`, `--accent` per the category palette.

---

## 01 / Kinetic

Words punch into frame one at a time and settle. Staccato, heavy weight.

**Use for:** countdowns, emphatic moments, list reveals.

```css
@keyframes punchIn {
  0%   { transform: scale(0.4); opacity: 0; }
  40%  { transform: scale(1.08); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
.kinetic-word {
  font-family: var(--sans);
  font-weight: 800;
  font-size: 160px;
  letter-spacing: -0.04em;
  color: var(--cream);
  animation: punchIn 0.9s cubic-bezier(.2,.9,.3,1);
}
.kinetic-word.accent { color: var(--accent); }
```

```javascript
// Cycle words every 900ms; accent one word per sequence
const words = ['RUN.', 'EAT.', 'SHIP.', 'NAP.'];
const accentIdx = 1; // which word gets --accent color
let step = 0;
const el = document.querySelector('.kinetic-word');
const cycleWord = () => {
  el.textContent = words[step];
  el.classList.toggle('accent', step === accentIdx);
  el.style.animation = 'none';
  el.offsetHeight; // reflow to restart
  el.style.animation = 'punchIn 0.9s cubic-bezier(.2,.9,.3,1)';
  step = (step + 1) % words.length;
};
cycleWord();
setInterval(cycleWord, 900);
```

**GSAP entrance for the containing scene:**
```javascript
tl.from('.kinetic-word', { autoAlpha: 0, duration: 0.3, ease: 'power3.out' }, 0);
```

---

## 02 / Scrolling

Continuous horizontal ticker. Instrument Serif italic. Infinite, never truncated.

**Use for:** intros, name reveals, atmosphere fills, lower-third backgrounds.

```css
@keyframes tick {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}
.scrolling-ticker {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  font-family: var(--serif);
  font-style: italic;
  font-size: 140px;
  letter-spacing: -0.02em;
  color: var(--cream);
}
.scrolling-ticker-inner {
  display: inline-block;
  animation: tick 18s linear infinite;
}
```

```html
<div class="scrolling-ticker">
  <!-- repeat the string 3× so the loop is seamless -->
  <div class="scrolling-ticker-inner">
    matthew · matthew · matthew · matthew · matthew ·
    matthew · matthew · matthew · matthew · matthew ·
    matthew · matthew · matthew · matthew · matthew ·
  </div>
</div>
```

Speed reference: `18s` = slow/atmospheric. `10s` = medium energy. `6s` = urgent.

---

## 03 / Fluid

A single word morphs between ultralight/condensed and heavy/wide. Weight and letter-spacing animate simultaneously using Geist's variable axis.

**Use for:** one-word emphasis beats, transitions between topics.

```css
@keyframes fluid {
  0%, 100% { font-weight: 200; letter-spacing:  0.1em; }
  50%       { font-weight: 900; letter-spacing: -0.06em; }
}
.fluid-word {
  font-family: var(--sans); /* Geist variable font required */
  font-size: 140px;
  color: var(--cream);
  animation: fluid 3s ease-in-out infinite;
}
```

```javascript
// GSAP version (more timeline-precise):
gsap.to('.fluid-word', {
  fontWeight: 900,
  letterSpacing: '-0.06em',
  duration: 1.5,
  ease: 'sine.inOut',
  yoyo: true,
  repeat: -1,
});
```

---

## 04 / Stutter

Letters stagger-animate vertically with individual delays. Jittery, nervous energy.

**Use for:** tension, effort, comedy — "struggling" moments.

```css
@keyframes stutter {
  0%, 100% { transform: translateY(0);    opacity: 1; }
  20%       { transform: translateY(-30px); opacity: 0.8; }
  40%       { transform: translateY(0);    opacity: 1; }
}
.stutter-letter {
  font-family: var(--sans);
  font-weight: 800;
  font-size: 130px;
  letter-spacing: -0.04em;
  color: var(--cream);
  display: inline-block;
  animation: stutter 1.6s ease-in-out infinite;
}
.stutter-letter.dot { color: var(--accent); }
```

```javascript
// Wire up with per-letter delay
const word = 'GO.GO.GO.';
const container = document.querySelector('.stutter-container');
[...word].forEach((char, i) => {
  const span = document.createElement('span');
  span.className = 'stutter-letter' + (char === '.' ? ' dot' : '');
  span.style.animationDelay = `${i * 0.08}s`;
  span.textContent = char;
  container.appendChild(span);
});
```

---

## 05 / Reverse

Horizontal word bands scroll in alternating directions. One highlighted center band in accent. Fills a full section or slide background.

**Use for:** featured section backgrounds, "this is the thing" moments, full-slide statements.

```css
@keyframes reverseScroll-r {
  0%   { transform: translateX(-25%); }
  100% { transform: translateX(0%); }
}
@keyframes reverseScroll-l {
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-25%); }
}
.reverse-stack {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
.reverse-row {
  white-space: nowrap;
  overflow: hidden;
  font-family: var(--sans);
  font-weight: 800;
  font-size: 76px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: transparent;
  -webkit-text-stroke: 1.5px var(--cream);
  opacity: 0.85;
}
.reverse-row.highlight {
  color: var(--accent);
  -webkit-text-stroke: 0;
  background: var(--cream);
  padding: 6px 0;
  margin: 4px 0;
  opacity: 1;
}
.reverse-row-inner {
  display: inline-block;
}
```

```javascript
// Build the stack programmatically
const word = 'REVERSE';
const rowCount = 9;
const highlight = Math.floor(rowCount / 2);
const stack = document.querySelector('.reverse-stack');

Array.from({ length: rowCount }).forEach((_, i) => {
  const isHi = i === highlight;
  const dir = i % 2 === 0 ? 'r' : 'l';
  const speed = 14 + (i % 3) * 4;
  const offset = (i * 0.6) % 1;
  const repeated = (word + ' ').repeat(8);

  const row = document.createElement('div');
  row.className = 'reverse-row' + (isHi ? ' highlight' : '');

  const inner = document.createElement('div');
  inner.className = 'reverse-row-inner';
  inner.style.animation = `reverseScroll-${dir} ${speed}s linear infinite`;
  inner.style.animationDelay = `-${offset * speed}s`;
  inner.textContent = repeated;

  row.appendChild(inner);
  stack.appendChild(row);
});
```

**Speed tuning:** `14s` rows feel slow/ambient. `6s` = aggressive. Mix speeds for organic feel.

---

## Scene Transitions

Scenes merge into each other. No scene fades to black before the next arrives — the viewer always has a spatial anchor for where the new scene came from.

**Vocabulary — pick one per cut based on editorial intent:**

| Move | GSAP | Feel |
|---|---|---|
| **Push from right** | `tl.set('#s', { x: '100%' }, t); tl.to('#s', { x: '0%', duration: 0.6, ease: 'expo.out' }, t)` | Turning the page |
| **Push from left** | `tl.set('#s', { x: '-100%' }, t); tl.to('#s', { x: '0%', duration: 0.55, ease: 'power3.out' }, t)` | Camera pans right |
| **Rise from below** | `tl.set('#s', { y: '100%' }, t); tl.to('#s', { y: '0%', duration: 0.45, ease: 'expo.out' }, t)` | Ascending assertion |
| **Drop from above** | `tl.set('#s', { y: '-100%' }, t); tl.to('#s', { y: '0%', duration: 0.45, ease: 'expo.out' }, t)` | Descending weight |
| **Zoom-out settle** | `tl.set('#s', { scale: 1.06, autoAlpha: 0 }, t); tl.to('#s', { scale: 1, autoAlpha: 1, duration: 0.65, ease: 'power3.out' }, t)` | Breathe out — for outros only |

**Usage pattern for EP-style videos (tech/running/lifestyle):**

```javascript
// S1 → S2: push from right — turning the page into data
tl.set('#s2', { x: '100%' }, 3.8);
tl.to('#s2', { x: '0%', duration: 0.6, ease: 'expo.out' }, 3.8);

// S2 → S3: rise from below — something rises up to punctuate
tl.set('#s3', { y: '100%' }, 10.2);
tl.to('#s3', { y: '0%', duration: 0.45, ease: 'expo.out' }, 10.2);

// S3 → S4: push from left — pan to find the speaker
tl.set('#s4', { x: '-100%' }, 13.8);
tl.to('#s4', { x: '0%', duration: 0.55, ease: 'power3.out' }, 13.8);

// S4 → S5: rise from below — verdict slams up
tl.set('#s5', { y: '100%' }, 17.7);
tl.to('#s5', { y: '0%', duration: 0.4, ease: 'expo.out' }, 17.7);

// S5 → S6: zoom-out settle — breathe into the outro (only transition that may use autoAlpha)
tl.set('#s6', { scale: 1.06, autoAlpha: 0 }, 21.4);
tl.to('#s6', { scale: 1, autoAlpha: 1, duration: 0.65, ease: 'power3.out' }, 21.4);
```

**Rules:**
- Animate the clip container (`#s2`, `#s3`…) — not the background div alone. The whole scene panel moves.
- `tl.set()` fires AT the clip's `data-start` time — same moment the clip becomes visible.
- The outgoing scene content MUST be fully visible when the incoming scene starts moving. No pre-emptive opacity-out.
- Only the final scene may fade content to opacity 0 (fade to black ending).
- `autoAlpha` on the incoming scene is allowed only for the zoom-settle outro variant — all directional push/rise transitions use transform only (no opacity fade).
