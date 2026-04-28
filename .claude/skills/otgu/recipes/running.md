# Recipe — Running Content

**Palette:** Crimson / default (`--ink: #0E0E0C` / `--cream: #F2EBDD` / `--accent: #D8351F`)
**Canon example:** "I RAN 13.1 MILES BAD." (EP.022)

## Scene Structure (typical race recap / training log)

| # | Beat | Duration | Motion Principle | Notes |
|---|---|---|---|---|
| 1 | Distance + verdict kinetic | 1.5s | **01 / Kinetic** | "13.1." then "MILES." then "BAD." — three punches |
| 2 | Pace / split data | 2s | Geist Mono ticker, stagger | Each mile split as a row, accent on the mile where things fell apart |
| 3 | "Around mile N" moment | 1–2s | **04 / Stutter** | The wall. The cramp. "I am simply cooked." |
| 4 | Running footage | Variable | **02 / Scrolling** as lower-third | Italic name ticker behind the face cam |
| 5 | Final time reveal | 2s | **03 / Fluid** | Time morphs in from thin → heavy as it settles |
| 6 | Verdict | 1.5s | **01 / Kinetic** | "SEND IT." / "NEVER AGAIN." / "AGAIN THOUGH." |

## Lower-Third Template

```html
<div class="clip lower-third" data-start="..." data-duration="4" data-track-index="30"
     style="position:absolute; bottom:80px; left:100px; right:100px;">
  <div style="font-family:var(--mono); font-size:18px; letter-spacing:0.1em;
              color:var(--cream); opacity:0.7; text-transform:uppercase; margin-bottom:8px;">
    MILE 11 · PACE 7:42 · HR 174
  </div>
  <div style="font-family:var(--serif); font-style:italic; font-size:88px;
              letter-spacing:-0.02em; line-height:0.95; color:var(--cream);">
    I am, simply, <span style="color:var(--accent);">cooked.</span>
  </div>
  <div style="font-family:var(--mono); font-size:16px; letter-spacing:0.1em;
              color:var(--cream); opacity:0.5; margin-top:12px;">
    THEDRAFTS.COM · @GLOWUPMATT
  </div>
</div>
```

## 9:16 Cover (Reels — cream background)

```
Background: --cream (#F2EBDD)
Top:        EP.022  [Geist Mono, 14px, 0.1em tracking, 70% opacity, ink color]
Middle:     I RAN         [Geist 800, 86px, -0.04em, uppercase, ink]
            13.1
            MILES
            [accent]BAD.[/accent]    [--accent = #D8351F]
Bottom:     ● MN          RUNNING    [Geist Mono, 14px, ink]
```

## Data Display Pattern (split table)

```html
<div class="splits" style="display:grid; grid-template-columns:60px 120px 1fr;
     gap:0; font-family:var(--mono); font-size:24px; letter-spacing:0.04em;">
  <!-- Header -->
  <div style="opacity:0.5; border-bottom:1px solid var(--cream); padding-bottom:8px;">MI</div>
  <div style="opacity:0.5; border-bottom:1px solid var(--cream); padding-bottom:8px;">PACE</div>
  <div style="opacity:0.5; border-bottom:1px solid var(--cream); padding-bottom:8px;">NOTE</div>
  <!-- Rows — the bad mile gets accent -->
  <div>11</div><div style="color:var(--accent);">7:42</div><div style="color:var(--accent);">the wall</div>
</div>
```

## Caption Energy

- Energy level: **social** with genuine exhaustion
- Format: lowercase, one observation per caption. "mile 9 i started negotiations with my legs."
- Accent trigger: the mile or time where everything broke down
- Punchline rule: every 3 captions needs a payoff line

## GSAP Entrance Pattern

```javascript
// Split reveal: miles tick in, the bad split punches red
tl.from('.split-row', { autoAlpha: 0, x: -24, duration: 0.25, ease: 'power3.out', stagger: 0.1 }, 0)
  .to('.split-row.bad', { color: 'var(--accent)', duration: 0.3, ease: 'expo.out' }, '>0.2');
```
