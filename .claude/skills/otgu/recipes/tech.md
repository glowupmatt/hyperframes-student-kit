# Recipe — Tech Content

**Palette:** Cobalt (`--ink: #0B0F1A` / `--cream: #EEF1F6` / `--accent: #1E4FE0`)
**Canon example:** "I bought the worst laptop on amazon." (EP.014)

## Scene Structure (typical 30–60s review)

| # | Beat | Duration | Motion Principle | Notes |
|---|---|---|---|---|
| 1 | Cold open — product name kinetic | 1.5s | **01 / Kinetic** | One word at a time: brand, model, "WHY." |
| 2 | Spec reveal | 2–3s | Geist Mono list, stagger in | CPU / RAM / Price — mono labels, accent on the number that hurts |
| 3 | "The problem is" | 1–2s | **04 / Stutter** | Jittery energy = something is wrong |
| 4 | Product in use (face cam) | Variable | Scrolling name ticker as lower-third bg | Atmosphere under talking head |
| 5 | Verdict / rating | 2s | **01 / Kinetic** | "MID." or "SEND IT." or "RETURN IT." |
| 6 | Outro / lower-third | 3–4s | Static wordmark + meta | See lower-third template below |

## Lower-Third Template

```html
<!-- Track index 30+ so it floats above everything -->
<div class="clip lower-third" data-start="..." data-duration="4" data-track-index="30"
     style="position:absolute; bottom:80px; left:100px; right:100px;">
  <div style="font-family:var(--mono); font-size:18px; letter-spacing:0.1em;
              color:var(--cream); opacity:0.7; text-transform:uppercase; margin-bottom:8px;">
    EP.014 · TECH · AMAZON LAPTOP
  </div>
  <div style="font-family:var(--serif); font-style:italic; font-size:88px;
              letter-spacing:-0.02em; line-height:0.95; color:var(--cream);">
    I have made <span style="color:var(--accent);">a mistake.</span>
  </div>
  <div style="font-family:var(--mono); font-size:16px; letter-spacing:0.1em;
              color:var(--cream); opacity:0.5; margin-top:12px;">
    THEDRAFTS.COM · @GLOWUPMATT
  </div>
</div>
```

## 9:16 Cover (TikTok)

```
Background: --ink (#0B0F1A)
Top:        EP.014  [Geist Mono, 14px, 0.1em tracking, 70% opacity]
Middle:     I bought                     [Instrument Serif italic, 76px]
            the [accent]worst[/accent]   [accent = --accent #1E4FE0]
            laptop on
            amazon.
Bottom:     ● MN          TECH           [Geist Mono, 14px]
```

## Caption Energy

- Energy level: **tutorial** with a side of personal
- Format: lowercase, conversational. "okay so this thing throttles immediately."
- Accent trigger: one stat or product name per caption sequence gets `color: var(--accent)`
- No "CHECK OUT THE LINK IN BIO" — just "link if you want it."

## GSAP Entrance Pattern

```javascript
// Tech reveal: specs count up, then accent on the bad number
tl.from('.spec-label', { autoAlpha: 0, x: -40, duration: 0.4, ease: 'power3.out', stagger: 0.12 }, 0)
  .from('.spec-value', { autoAlpha: 0, duration: 0.3, ease: 'expo.out', stagger: 0.12 }, '<0.1')
  .to('.spec-value.bad', { color: 'var(--accent)', duration: 0.2 }, '>0.3');
```
