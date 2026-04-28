# Matthew Nicholson — Visual Identity

Ground truth extracted from `brand-kit/Brand Kit Deck.html` and `brand-kit/Brand Kit Reference.html`. Every composition for Matthew's content MUST trace its palette, typography, and motion choices back to this file.

## Style Prompt

Matthew Nicholson is a UGC creator — tech reviews, running content, lifestyle — who leans into motion typography as his signature move. The brand is relaxed, funny, and personal: one person who's a little tired, very curious, and genuinely amused by his own life. Compositions should feel like editorial-meets-kinetic-type: off-black canvases, warm cream type, crimson sparingly as a punctuation mark. The mood is confident and unhurried — not corporate, not hype-house. Think editorial magazine crossed with kinetic text experiments. Oversized italic serif for emotion, heavy uppercase sans for declaration, mono for everything that feels like metadata.

## Colors

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#0E0E0C` | Primary background + text on light |
| `--cream` | `#F2EBDD` | Primary text on dark + light background |
| `--accent` | `#D8351F` | Crimson — accent only. Links, dots, punctuation, CTAs |
| `--ink-on-cream` | `rgba(14,14,12,0.18)` | Borders and dividers on cream backgrounds |

**Usage ratio:** Ink + cream carry 95%. Crimson is a spice, not a sauce.

### Alternate accent palettes (Tweaks panel)

| Name | Ink | Cream | Accent |
|---|---|---|---|
| Crimson (default) | `#0E0E0C` | `#F2EBDD` | `#D8351F` |
| Cobalt | `#0B0F1A` | `#EEF1F6` | `#1E4FE0` |
| Acid | `#0E0E0C` | `#F2EBDD` | `#C7E000` |
| Ember | `#1A0F0A` | `#F4E9D8` | `#FF6A1A` |

Swap accent palettes for series differentiation (e.g. tech = Cobalt, running = Crimson, lifestyle = Ember) — never mix palettes within a single piece.

## Typography

- **Instrument Serif (italic)** — serif display. Use for: emotional headlines, cover titles, lower-third hero copy, pull quotes. Always italic. Google Fonts: `Instrument+Serif:ital@0;1`.
- **Geist (700–800)** — sans display. Use for: declarative headlines, episode labels, uppercase callouts. Never italic. Google Fonts: `Geist:wght@400;600;700;800`.
- **Geist Mono (400–500)** — monospace utility. Use for: labels, captions, timestamps, episode numbers, file paths, meta text. Always uppercase with `letter-spacing: 0.08em`. Google Fonts: `Geist+Mono:wght@400;500`.

Pair all three — never use only one. The house pattern is Geist Mono label above an Instrument Serif headline. Geist 800 uppercase for declarative statements; Instrument Serif italic for anything personal or emotive.

### Type scale (1920×1080 reference)

| Role | Size | Font |
|---|---|---|
| Hero | 220px | Instrument Serif italic or Geist 700 |
| Title | 96px | Mixed per slide |
| Subtitle | 44px | Geist 600 |
| Body | 34px | Geist 400 |
| Small | 28px | Geist 400 |
| Mono labels | 24px | Geist Mono 400 |

Scale proportionally for other canvas sizes (vertical 9:16 = divide by ~1.5 for most elements).

## Logo

Three lockups — all defined as pure HTML/CSS in `brand-kit/slides.jsx` (`MN` component):

- **MN Monogram** — italic serif "M" overlapping with Geist 800 "N" shifted right and down. 1:1 square. Primary mark.
- **Wordmark** — `MATTHEW NICHOLSON` in Geist 700 uppercase, `letter-spacing: -0.04em`, with a crimson `.` period.
- **Signature** — `matthew` in Instrument Serif italic, large, with a small crimson `.` at 0.5em.

Clear space: height of the "M" on all sides. Minimum size: 32px / 0.4in. Never stretch or recolor.

## Motion Type Principles

Matthew's signature is type that moves. Five named principles — use by name in storyboards:

### 01 / Kinetic
Words punch into frame one at a time and settle. Staccato rhythm, heavy weight. Use for countdowns, emphatic moments, list reveals.
- Implementation: `animation: punchIn 0.9s cubic-bezier(.2,.9,.3,1)` cycling words every 900ms.
- Accent word gets `--accent` color on beat.

### 02 / Scrolling
Single-line ticker scrolls left continuously. Instrument Serif italic. Use for intros, name reveals, atmosphere fills.
- Implementation: `animation: tick 18s linear infinite` on a tripled string.
- Never truncate — let it breathe past the frame edge.

### 03 / Fluid
A single word morphs between light/condensed and heavy/wide — weight and letter-spacing animate simultaneously. Use for one-word emphasis beats.
- Implementation: CSS `animation: fluid 3s ease-in-out infinite` cycling `font-weight: 200 ↔ 900` and `letter-spacing: 0.1em ↔ -0.06em`.
- Geist variable font only.

### 04 / Stutter
Letters stagger-animate vertically with individual offsets. Stack-and-delay creates a jittery, nervous energy. Use for tension, effort, comedy.
- Implementation: each letter gets `animation: stutter 1.6s ease-in-out ${i * 0.08}s infinite`.
- Period characters get `--accent` color.

### 05 / Reverse
Horizontal word bands scroll in alternating directions — odd rows left, even rows right — with one highlighted center band in accent color. Use for backgrounds on featured sections, or as a full-slide statement.
- Implementation: `reverseScroll-l` and `reverseScroll-r` keyframes at staggered speeds (14–22s per row), `WebkitTextStroke` on non-highlighted rows.
- The highlighted band uses background `--cream` with `--accent` text.

## Social Templates

Three 9:16 cover templates — all use the same grammar: Geist Mono episode label at top, large type hero in the middle, `● MN` + category at the bottom.

| Platform | Background | Text | Hero font |
|---|---|---|---|
| TikTok | Ink | Cream | Instrument Serif italic |
| Reels | Cream | Ink | Geist 800 uppercase |
| YouTube | Crimson accent | Cream | Instrument Serif italic |

Lower-third format: Geist Mono meta line (pace, timestamp, location) above an Instrument Serif italic hero quote in large type. Bottom: `THEDRAFTS.COM · @GLOWUPMATT` in Geist Mono.

## Slide Chrome (deck/reference layout)

Every slide uses a consistent frame:
- Top: `MATTHEW NICHOLSON ® BRAND KIT v1.0` left / slide label right — Geist Mono, 24px, `letter-spacing: 0.08em`, uppercase, 70% opacity.
- Hairline rule at 80px from top, 1px, 20% opacity.
- Bottom: `NO.XX / 08` left / `● RELAXED · FUNNY · PERSONAL` right — same mono spec.
- Padding: 100px left/right, 40px top/bottom for chrome.

## Motion Rules (for Hyperframes compositions)

- **Entrance only**: animate in with `gsap.from()`. Transitions handle exits.
- **Easing palette:** `power3.out` for punchy entrances; `expo.out` for type reveals; `sine.inOut` for ambient loops; `back.out(1.4)` for overshoots.
- **Duration bands:** kinetic word swaps 0.9s; headline entrances 0.5–0.8s; ambient motion 3–18s.
- **Stagger:** 0.08s per character for kinetic type; 0.12–0.18s per word for headline reveals.
- **Type color beats:** accent color on one word per kinetic sequence — not every word.

## Voice Rules

The brand is one person. Write captions and lower-thirds as if Matthew is talking to a friend.

| ✓ Do | ✗ Don't |
|---|---|
| write like you talk. | corporate speak ("synergy", "leverage"). |
| one joke per video. | three exclamation marks. |
| admit when something is mid. | overpromise in the title. |
| use lower-case in captions. | forget the punchline. |

## What NOT to Do

1. **No fourth color.** Ink, cream, accent — that's the system. No gradients mixing in other hues.
2. **No Arial, Helvetica, Inter, or system fonts.** Only Instrument Serif + Geist + Geist Mono.
3. **No upright Instrument Serif.** It's always italic — that's the point.
4. **No full-screen linear gradients** — H.264 banding on dark backgrounds. Use solid ink + localized radial glow.
5. **No corporate tone.** Cut anything that sounds like a press release.
6. **No `Math.random()` or `Date.now()`** — render determinism. Use seeded PRNG if needed.
7. **No `transparent` keyword in gradients** — use `rgba(14,14,12,0)` for ink or `rgba(242,235,221,0)` for cream.
8. **No exit animations** on scenes — transitions handle exits.
9. **No overusing crimson.** If you're reaching for accent on more than one element per scene, pull back.

## File References

- `brand-kit/Brand Kit Deck.html` — 8-slide interactive brand deck (primary reference)
- `brand-kit/Brand Kit Reference.html` — long-form written reference doc
- `brand-kit/Blog Redesign.html` — thedrafts.dev redesign showing the system applied to a blog
- `brand-kit/slides.jsx` — React components: all slide layouts, MN monogram, motion tile demos
- `brand-kit/deck-stage.js` — slide navigation web component
