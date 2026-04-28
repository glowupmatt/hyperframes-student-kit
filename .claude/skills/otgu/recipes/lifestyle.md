# Recipe — Lifestyle Content

**Palette:** Ember (`--ink: #1A0F0A` / `--cream: #F4E9D8` / `--accent: #FF6A1A`)
**Canon example:** "a day where i did nothing useful." (EP.031)

## Scene Structure (typical day-in-life / vlog)

| # | Beat | Duration | Motion Principle | Notes |
|---|---|---|---|---|
| 1 | Opening confession, italic serif | 2s | **02 / Scrolling** | Lowercase, honest, sets the tone |
| 2 | Time stamps as chapters | 1–1.5s each | Geist Mono label → Serif italic title | "9:14 AM" in mono, then the real caption in italic |
| 3 | The unplanned thing | 1.5s | **05 / Reverse** as background | The chaotic moment gets the reverse bands |
| 4 | Reflection moment (face cam) | Variable | **02 / Scrolling** at low opacity | Name ticker at ~20% opacity under talking head |
| 5 | End-of-day verdict | 2s | **01 / Kinetic** | One word: "PRODUCTIVE." / "COOKED." / "FINE." |

## Lower-Third Template

```html
<div class="clip lower-third" data-start="..." data-duration="4" data-track-index="30"
     style="position:absolute; bottom:80px; left:100px; right:100px;">
  <div style="font-family:var(--mono); font-size:18px; letter-spacing:0.1em;
              color:var(--cream); opacity:0.7; text-transform:uppercase; margin-bottom:8px;">
    9:14 AM · LIFESTYLE · DAY 031
  </div>
  <div style="font-family:var(--serif); font-style:italic; font-size:88px;
              letter-spacing:-0.02em; line-height:0.95; color:var(--cream);">
    genuinely no <span style="text-decoration:underline; color:var(--accent);">plan.</span>
  </div>
  <div style="font-family:var(--mono); font-size:16px; letter-spacing:0.1em;
              color:var(--cream); opacity:0.5; margin-top:12px;">
    THEDRAFTS.COM · @GLOWUPMATT
  </div>
</div>
```

## 9:16 Cover (YouTube — accent background)

```
Background: --accent (#FF6A1A)  [the only cover where accent IS the background]
Top:        EP.031  [Geist Mono, 14px, 0.1em tracking, 85% opacity, cream]
Middle:     a day                           [Instrument Serif italic, 76px, cream]
            where i
            did [underline]nothing[/underline]
            useful.
Bottom:     ● MN          LIFESTYLE         [Geist Mono, 14px, cream]
```

## Chapter Timestamp Pattern

```html
<!-- Each chapter beat: mono timestamp fades in, then serif title punches -->
<div class="chapter" style="display:flex; flex-direction:column; gap:8px;">
  <div class="timestamp" style="font-family:var(--mono); font-size:20px;
       letter-spacing:0.1em; color:var(--cream); opacity:0.6; text-transform:uppercase;">
    9:14 AM
  </div>
  <div class="chapter-title" style="font-family:var(--serif); font-style:italic;
       font-size:96px; letter-spacing:-0.02em; line-height:0.95; color:var(--cream);">
    realized i have no <span style="color:var(--accent);">coffee.</span>
  </div>
</div>
```

## Caption Energy

- Energy level: **storytelling** — observational, low-stakes, self-aware
- Format: all lowercase. Full sentences are fine. "spent 40 minutes deciding what to eat. had cereal."
- Accent trigger: the one detail that was funnier than expected
- Punchline rule: every vlog needs one moment where Matthew is clearly judging himself

## GSAP Entrance Pattern

```javascript
// Chapter reveal: timestamp drifts up, title punches in after
tl.from('.timestamp', { autoAlpha: 0, y: 12, duration: 0.4, ease: 'power2.out' }, 0)
  .from('.chapter-title', { autoAlpha: 0, y: 20, duration: 0.5, ease: 'expo.out' }, '<0.15')
  .to('.chapter-title .accent-word', { color: 'var(--accent)', duration: 0.25 }, '>0.1');
```
