---
name: otgu
description: Brand enforcement skill for Matthew Nicholson video content. Use before any composition work — enforces DESIGN.md palette, typography, motion principles (Kinetic/Scrolling/Fluid/Stutter/Reverse), voice rules, and content-category palettes (tech=Cobalt, running=Crimson, lifestyle=Ember). Always invoke this alongside /hyperframes for Matthew's content.
---

# OTGU — Brand Enforcement

This skill locks every composition to Matthew Nicholson's brand system before a single line of HTML is written. Run it at the start of any creative session for his content.

## Step 1 — Brand Gate (MANDATORY, no exceptions)

<HARD-GATE>
Read `DESIGN.md` from the workspace root BEFORE writing any composition HTML. Apply its exact values:

- `--ink: #0E0E0C` / `--cream: #F2EBDD` / `--accent: #D8351F` (or the category-correct variant below)
- Fonts: **Instrument Serif italic** (emotion) + **Geist 700–800** (declaration) + **Geist Mono** (utility/meta)
- Motion: use a named principle from the five below — never freehand a motion pattern
- Voice: captions written as Matthew talks to a friend, not a brand

If DESIGN.md is missing, stop and tell the user before proceeding.
</HARD-GATE>

## Step 2 — Content Category → Palette

Match the content type to the right accent palette. Never mix palettes within a single piece.

| Category | Palette | Ink | Cream | Accent |
|---|---|---|---|---|
| **Tech** | Cobalt | `#0B0F1A` | `#EEF1F6` | `#1E4FE0` |
| **Running** | Crimson *(default)* | `#0E0E0C` | `#F2EBDD` | `#D8351F` |
| **Lifestyle** | Ember | `#1A0F0A` | `#F4E9D8` | `#FF6A1A` |
| **General / Mixed** | Crimson *(default)* | `#0E0E0C` | `#F2EBDD` | `#D8351F` |

Apply these as CSS custom properties on `:root` at the top of every composition:

```css
:root {
  --ink: #0B0F1A;    /* swap per category */
  --cream: #EEF1F6;
  --accent: #1E4FE0;
  --ink-on-cream: rgba(14,14,12,0.18);
  --serif: 'Instrument Serif', 'Times New Roman', serif;
  --sans: 'Geist', 'Helvetica Neue', Arial, sans-serif;
  --mono: 'Geist Mono', ui-monospace, monospace;
}
```

Google Fonts import (paste in `<head>`):
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@400;600;700;800&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

## Step 3 — Pick a Motion Principle

Matthew's signature is type that moves. Every composition must use at least one named principle. See [motion-principles.md](./motion-principles.md) for copy-pasteable implementations.

| Principle | When to use |
|---|---|
| **01 / Kinetic** | Countdowns, emphatic moments, list reveals — one word at a time |
| **02 / Scrolling** | Intros, name reveals, atmosphere fills — continuous ticker |
| **03 / Fluid** | One-word emphasis beats — weight and spacing morph simultaneously |
| **04 / Stutter** | Tension, effort, comedy — jittery letter stack |
| **05 / Reverse** | Background fills, featured sections — alternating scroll bands |

## Step 4 — Content-Specific Recipes

See the recipe file for your content category:

- [recipes/tech.md](./recipes/tech.md) — Tech review / app demo format
- [recipes/running.md](./recipes/running.md) — Running log / race recap format
- [recipes/lifestyle.md](./recipes/lifestyle.md) — Day-in-life / lifestyle vlog format

Each recipe defines: scene structure, lower-third templates, caption energy, and cover format.

## Step 5 — Voice Check

Before finalizing any caption or lower-third, run it through this filter:

**✓ DO** — write like Matthew talks to a friend
- Lowercase in captions
- One joke per video
- Admit when something is mid
- Short sentences, real reactions

**✗ DON'T**
- Corporate speak ("leverage", "synergy", "crushing it")
- Three exclamation marks
- Overpromise in the title
- Forget the punchline

Lower-third format:
```
[GEIST MONO — meta line: pace / timestamp / location / stat]
[INSTRUMENT SERIF ITALIC — hero quote, large]
[GEIST MONO — THEDRAFTS.COM · @GLOWUPMATT]
```

## Brand Hard Rules (never break these)

1. **Three colors only.** Ink + cream + accent. No fourth hue, no gradients mixing other colors.
2. **Instrument Serif is always italic.** If you write it upright, you've broken the system.
3. **Crimson is a spice.** One accent element per scene, not every element.
4. **No Arial, Helvetica, Inter, Roboto, or system fonts.** Only the three brand fonts.
5. **No full-screen linear gradients** — H.264 banding. Solid ink + localized radial glow only.
6. **No `transparent` in gradients** — use `rgba(14,14,12,0)` or `rgba(242,235,221,0)`.
7. **No `Math.random()` or `Date.now()`** — render determinism. Seeded PRNG if needed.
8. **No exit animations** — transitions handle exits. Entrance only with `gsap.from()`.
9. **No corporate tone in captions.** If it sounds like a press release, cut it.
10. **No crossfade-only transitions.** Scenes must merge via directional motion — push (x), rise (y), or zoom-settle (scale). The outgoing scene stays fully visible; the incoming scene physically moves IN. Animating only `autoAlpha 0→1` on a background div is banned. See [motion-principles.md](./motion-principles.md) → "Scene Transitions" for GSAP patterns.
