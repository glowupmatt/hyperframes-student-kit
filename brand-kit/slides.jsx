// slides.jsx — Matthew Nicholson Brand Kit slides
// Type pairing: Instrument Serif (display) + Geist (sans) + Geist Mono (technical)

const TYPE_SCALE = { hero: 220, title: 96, subtitle: 44, body: 34, small: 28, mono: 24 };
const SPACING = { paddingTop: 100, paddingBottom: 80, paddingX: 100, titleGap: 52, itemGap: 28 };

// ─── tiny chrome ────────────────────────────────────────────────────────────
function SlideChrome({ no, label, children, bg, fg, accent }) {
  bg = bg || 'var(--ink)';
  fg = fg || 'var(--cream)';
  accent = accent || 'var(--accent)';
  return (
    <div style={{ position: 'absolute', inset: 0, background: bg, color: fg, fontFamily: 'var(--sans)', overflow: 'hidden' }}>
      {/* top rule + meta */}
      <div style={{
        position: 'absolute', top: 40, left: SPACING.paddingX, right: SPACING.paddingX,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.08em',
        textTransform: 'uppercase', opacity: 0.7,
      }}>
        <span>MATTHEW NICHOLSON ® BRAND KIT v1.0</span>
        <span>{label}</span>
      </div>
      <div style={{
        position: 'absolute', top: 80, left: SPACING.paddingX, right: SPACING.paddingX,
        height: 1, background: 'currentColor', opacity: 0.2,
      }} />
      {/* bottom meta */}
      <div style={{
        position: 'absolute', bottom: 40, left: SPACING.paddingX, right: SPACING.paddingX,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.08em',
        textTransform: 'uppercase', opacity: 0.7,
      }}>
        <span>NO.{String(no).padStart(2, '0')} / 08</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Dot color={accent} /> RELAXED · FUNNY · PERSONAL
        </span>
      </div>
      {children}
    </div>
  );
}

function Dot({ color }) {
  return <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: color }} />;
}

function MN({ size = 220, color = 'currentColor' }) {
  // Typographic monogram — brand serif + sans, locked up tight. Original mark.
  return (
    <div style={{
      width: size, height: size, color,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', lineHeight: 1,
    }}>
      <span style={{
        fontFamily: 'var(--serif)', fontStyle: 'italic',
        fontSize: size * 0.95, letterSpacing: '-0.04em',
        position: 'relative', zIndex: 1,
      }}>M</span>
      <span style={{
        fontFamily: 'var(--sans)', fontWeight: 800,
        fontSize: size * 0.7, letterSpacing: '-0.05em',
        marginLeft: -size * 0.18, marginTop: size * 0.18,
        position: 'relative', zIndex: 2,
      }}>N</span>
    </div>
  );
}

// ─── 01 COVER ───────────────────────────────────────────────────────────────
function Slide01() {
  return (
    <SlideChrome no={1} label="COVER">
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        paddingLeft: SPACING.paddingX, paddingRight: SPACING.paddingX,
      }}>
        <div style={{
          fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.1em',
          textTransform: 'uppercase', opacity: 0.7, marginBottom: 32,
        }}>
          A BRAND KIT FOR<br/>UGC, KINETIC TYPE & GENERAL TOMFOOLERY
        </div>
        <div style={{
          fontFamily: 'var(--serif)', fontSize: TYPE_SCALE.hero, lineHeight: 0.9,
          letterSpacing: '-0.03em', fontStyle: 'italic',
        }}>
          Matthew
        </div>
        <div style={{
          fontFamily: 'var(--sans)', fontSize: TYPE_SCALE.hero * 0.95, lineHeight: 0.9,
          letterSpacing: '-0.04em', fontWeight: 700, textTransform: 'uppercase',
          marginTop: 12,
        }}>
          NICHOLSON.
        </div>
        <div style={{
          marginTop: 40, display: 'flex', gap: 48, alignItems: 'center',
          fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.08em', textTransform: 'uppercase',
        }}>
          <span style={{ color: 'var(--accent)' }}>● TECH</span>
          <span style={{ color: 'var(--accent)' }}>● RUNNING</span>
          <span style={{ color: 'var(--accent)' }}>● LIFESTYLE</span>
        </div>
      </div>
    </SlideChrome>
  );
}

// ─── 02 THE SYSTEM ──────────────────────────────────────────────────────────
function Slide02() {
  const rows = [
    ['01', 'LOGO', 'A serifed MN monogram + full wordmark.'],
    ['02', 'COLOR', 'Off-black, warm cream, crimson. Nothing else.'],
    ['03', 'TYPE', 'Instrument Serif × Geist × Geist Mono.'],
    ['04', 'MOTION', 'Type that runs, breathes, stutters and stretches.'],
    ['05', 'TEMPLATES', 'Vertical 9:16 covers + lower-thirds.'],
    ['06', 'VOICE', 'Relaxed. Funny. Personal. Never corporate.'],
  ];
  return (
    <SlideChrome no={2} label="THE SYSTEM">
      <div style={{
        position: 'absolute', top: 140, left: SPACING.paddingX, right: SPACING.paddingX,
      }}>
        <div style={{
          fontFamily: 'var(--serif)', fontSize: TYPE_SCALE.title, fontStyle: 'italic',
          letterSpacing: '-0.02em', lineHeight: 1, marginBottom: SPACING.titleGap,
        }}>
          Six pieces.<br/>
          <span style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontStyle: 'normal', textTransform: 'uppercase' }}>
            One feeling.
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 80, rowGap: 28 }}>
          {rows.map(([n, t, d]) => (
            <div key={n} style={{ display: 'grid', gridTemplateColumns: '70px 220px 1fr', alignItems: 'baseline', borderTop: '1px solid currentColor', paddingTop: 16, opacity: 1 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.small, opacity: 0.6 }}>{n}</span>
              <span style={{ fontFamily: 'var(--sans)', fontSize: TYPE_SCALE.small, fontWeight: 700, letterSpacing: '0.04em' }}>{t}</span>
              <span style={{ fontFamily: 'var(--sans)', fontSize: TYPE_SCALE.small, opacity: 0.85 }}>{d}</span>
            </div>
          ))}
        </div>
      </div>
    </SlideChrome>
  );
}

// ─── 03 LOGO ────────────────────────────────────────────────────────────────
function Slide03() {
  return (
    <SlideChrome no={3} label="LOGO & MONOGRAM" bg="var(--cream)" fg="var(--ink)">
      <div style={{
        position: 'absolute', top: 140, left: SPACING.paddingX, right: SPACING.paddingX, bottom: 100,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'stretch',
      }}>
        {/* Monogram showcase */}
        <div style={{ border: '1px solid var(--ink)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <MN size={420} color="var(--ink)" />
          <span style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.08em' }}>
            MONOGRAM / PRIMARY
          </span>
          <span style={{ position: 'absolute', bottom: 16, right: 16, fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, opacity: 0.6 }}>
            1 : 1
          </span>
        </div>
        {/* Wordmark */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.08em', marginBottom: 24 }}>
              WORDMARK / FULL
            </div>
            <div style={{
              fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 80, lineHeight: 0.95,
              letterSpacing: '-0.04em', textTransform: 'uppercase',
            }}>
              MATTHEW<br/>NICHOLSON<span style={{ color: 'var(--accent)' }}>.</span>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.08em', marginBottom: 24, marginTop: 40 }}>
              SIGNATURE / SECONDARY
            </div>
            <div style={{
              fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 96,
              letterSpacing: '-0.02em', lineHeight: 1,
            }}>
              matthew<span style={{ color: 'var(--accent)', fontSize: '0.5em' }}>.</span>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid var(--ink)', paddingTop: 16,
            fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, opacity: 0.7,
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8,
          }}>
            <span>CLEAR SPACE = HEIGHT OF "M"</span>
            <span>MIN SIZE = 32PX / 0.4IN</span>
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

// ─── 04 COLOR ───────────────────────────────────────────────────────────────
function Slide04() {
  const swatches = [
    { name: 'INK', hex: 'var(--ink)', code: '#0E0E0C', role: 'PRIMARY · BG · TEXT', fg: 'var(--cream)' },
    { name: 'CREAM', hex: 'var(--cream)', code: '#F2EBDD', role: 'PRIMARY · BG · TEXT', fg: 'var(--ink)' },
    { name: 'CRIMSON', hex: 'var(--accent)', code: 'ACCENT', role: 'ACCENT · LINKS · DOTS', fg: 'var(--cream)' },
  ];
  return (
    <SlideChrome no={4} label="COLOR">
      <div style={{
        position: 'absolute', top: 140, left: SPACING.paddingX, right: SPACING.paddingX, bottom: 100,
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: TYPE_SCALE.title,
          letterSpacing: '-0.02em', marginBottom: SPACING.titleGap,
        }}>
          Three colors. <span style={{ opacity: 0.5 }}>That's the rule.</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, flex: 1 }}>
          {swatches.map((s) => (
            <div key={s.name} style={{
              background: s.hex, color: s.fg, padding: 32,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              border: s.name === 'CREAM' ? '1px solid var(--ink-on-cream)' : 'none',
            }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.08em' }}>
                {s.role}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 96, letterSpacing: '-0.04em', lineHeight: 0.95 }}>
                  {s.name}
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.small, opacity: 0.8, marginTop: 8 }}>
                  {s.code}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: 24, fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono,
          letterSpacing: '0.08em', opacity: 0.7,
        }}>
          USAGE → INK + CREAM CARRY 95%. CRIMSON IS A SPICE, NOT A SAUCE.
        </div>
      </div>
    </SlideChrome>
  );
}

// ─── 05 TYPOGRAPHY ──────────────────────────────────────────────────────────
function Slide05() {
  return (
    <SlideChrome no={5} label="TYPOGRAPHY" bg="var(--cream)" fg="var(--ink)">
      <div style={{
        position: 'absolute', top: 130, left: SPACING.paddingX, right: SPACING.paddingX, bottom: 100,
        display: 'grid', gridTemplateRows: '1fr 1fr 1fr', gap: 24,
      }}>
        {/* Display */}
        <div style={{ borderBottom: '1px solid var(--ink)', display: 'grid', gridTemplateColumns: '200px 1fr', alignItems: 'baseline', gap: 32, paddingBottom: 24 }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.08em' }}>
            DISPLAY<br/><span style={{ opacity: 0.6 }}>INSTRUMENT SERIF</span>
          </div>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 140, letterSpacing: '-0.025em', lineHeight: 0.95 }}>
            Probably faster than <span style={{ color: 'var(--accent)' }}>you.</span>
          </div>
        </div>
        {/* Body */}
        <div style={{ borderBottom: '1px solid var(--ink)', display: 'grid', gridTemplateColumns: '200px 1fr', alignItems: 'baseline', gap: 32, paddingBottom: 24 }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.08em' }}>
            HEADLINE<br/><span style={{ opacity: 0.6 }}>GEIST · 700</span>
          </div>
          <div style={{ fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 88, letterSpacing: '-0.035em', lineHeight: 0.95, textTransform: 'uppercase' }}>
            ABCDEFGHIJK / 0123456
          </div>
        </div>
        {/* Mono */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', alignItems: 'baseline', gap: 32 }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.08em' }}>
            UTILITY<br/><span style={{ opacity: 0.6 }}>GEIST MONO</span>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 38, letterSpacing: '0.04em', lineHeight: 1.1 }}>
            // labels, captions, timestamps, file paths.<br/>
            <span style={{ opacity: 0.5 }}>NO.05 — TYPOGRAPHY · 27/04/26</span>
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

// ─── 06 MOTION TYPE PRINCIPLES (animated) ──────────────────────────────────
function Slide06({ active }) {
  return (
    <SlideChrome no={6} label="MOTION TYPE">
      <div style={{
        position: 'absolute', top: 130, left: SPACING.paddingX, right: SPACING.paddingX, bottom: 100,
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 20,
      }}>
        <MotionTile name="01 / KINETIC" caption="words punch in and settle.">
          <KineticPunch active={active} />
        </MotionTile>
        <MotionTile name="02 / SCROLLING" caption="endless ticker, single line.">
          <ScrollingTicker active={active} />
        </MotionTile>
        <MotionTile name="03 / FLUID" caption="weight + width morph in place.">
          <FluidMorph active={active} />
        </MotionTile>
        <MotionTile name="04 / STUTTER" caption="stack and stagger by letter.">
          <StutterStack active={active} />
        </MotionTile>
        <MotionTile name="05 / REVERSE" caption="word stacks, scrolls vertically." span={2}>
          <ReverseStack active={active} />
        </MotionTile>
      </div>
    </SlideChrome>
  );
}

function MotionTile({ name, caption, children, span }) {
  return (
    <div style={{ position: 'relative', border: '1px solid var(--cream)', overflow: 'hidden', gridColumn: span === 2 ? 'span 2' : undefined }}>
      <div style={{ position: 'absolute', top: 8, left: 8, fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.08em', zIndex: 3, background: 'var(--ink)', color: 'var(--cream)', padding: '6px 10px' }}>
        {name}
      </div>
      <div style={{ position: 'absolute', bottom: 8, left: 8, right: 8, fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, opacity: 0.95, zIndex: 3, background: 'var(--ink)', color: 'var(--cream)', padding: '6px 10px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 'calc(100% - 16px)' }}>
        // {caption}
      </div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  );
}

function KineticPunch({ active }) {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setStep((s) => (s + 1) % 4), 900);
    return () => clearInterval(id);
  }, [active]);
  const words = ['RUN.', 'EAT.', 'SHIP.', 'NAP.'];
  return (
    <div key={step} style={{
      fontFamily: 'var(--sans)', fontWeight: 700, fontSize: 160, letterSpacing: '-0.04em',
      animation: 'punchIn 0.9s cubic-bezier(.2,.9,.3,1)', color: step === 1 ? 'var(--accent)' : 'var(--cream)',
    }}>
      {words[step]}
    </div>
  );
}

function ScrollingTicker({ active }) {
  return (
    <div style={{
      width: '100%', overflow: 'hidden', whiteSpace: 'nowrap',
      fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 140, letterSpacing: '-0.02em',
    }}>
      <div style={{ display: 'inline-block', animation: active ? 'tick 18s linear infinite' : 'none' }}>
        {'matthew · matthew · matthew · matthew · matthew · '.repeat(3)}
      </div>
    </div>
  );
}

function FluidMorph({ active }) {
  return (
    <div style={{
      fontFamily: 'var(--sans)', fontSize: 140, fontWeight: 800,
      fontStretch: '100%', letterSpacing: '-0.04em',
      animation: active ? 'fluid 3s ease-in-out infinite' : 'none',
    }}>
      FLUID
    </div>
  );
}

function StutterStack({ active }) {
  const letters = 'GO.GO.GO.'.split('');
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4 }}>
      {letters.map((l, i) => (
        <span key={i} style={{
          fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 130, letterSpacing: '-0.04em',
          animation: active ? `stutter 1.6s ease-in-out ${i * 0.08}s infinite` : 'none',
          color: l === '.' ? 'var(--accent)' : 'var(--cream)',
          display: 'inline-block',
        }}>{l}</span>
      ))}
    </div>
  );
}

function ReverseStack({ active }) {
  // Stacked horizontal scroll bands of "REVERSE", with one band sharply highlighted.
  const word = 'REVERSE';
  const rowCount = 9;
  const rows = Array.from({ length: rowCount });
  const highlight = Math.floor(rowCount / 2);
  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', overflow: 'hidden', gap: 0,
    }}>
      {rows.map((_, i) => {
        const isHi = i === highlight;
        const dir = i % 2 === 0 ? 1 : -1;
        const speed = 14 + (i % 3) * 4;
        const offset = (i * 0.6) % 1;
        const repeated = (word + ' ').repeat(8);
        return (
          <div key={i} style={{
            whiteSpace: 'nowrap', overflow: 'hidden',
            fontFamily: 'var(--sans)', fontWeight: 800,
            fontSize: 76, lineHeight: 1, letterSpacing: '-0.03em',
            color: isHi ? 'var(--accent)' : 'transparent',
            WebkitTextStroke: isHi ? '0' : '1.5px var(--cream)',
            textStroke: isHi ? '0' : '1.5px var(--cream)',
            opacity: isHi ? 1 : 0.85,
            background: isHi ? 'var(--cream)' : 'transparent',
            paddingTop: isHi ? 6 : 0, paddingBottom: isHi ? 6 : 0,
            marginTop: isHi ? 4 : 0, marginBottom: isHi ? 4 : 0,
          }}>
            <div style={{
              display: 'inline-block',
              animation: active ? `reverseScroll-${dir > 0 ? 'r' : 'l'} ${speed}s linear infinite` : 'none',
              animationDelay: `-${offset * speed}s`,
            }}>
              {repeated}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── 07 SOCIAL TEMPLATES ────────────────────────────────────────────────────
function Slide07({ active }) {
  return (
    <SlideChrome no={7} label="SOCIAL TEMPLATES">
      <div style={{
        position: 'absolute', top: 130, left: SPACING.paddingX, right: SPACING.paddingX, bottom: 100,
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{
          fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: TYPE_SCALE.title,
          letterSpacing: '-0.02em', marginBottom: 32,
        }}>
          Three covers. <span style={{ opacity: 0.5 }}>One grammar.</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, flex: 1, alignItems: 'start', overflow: 'hidden' }}>
          <PhoneCover label="TIKTOK / 9:16" bg="var(--ink)" fg="var(--cream)">
            <div style={{ fontFamily: 'var(--mono)', fontSize: 14, letterSpacing: '0.1em', opacity: 0.7 }}>EP.014</div>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 76, lineHeight: 0.95, letterSpacing: '-0.02em', marginTop: 8 }}>
              I bought<br/>the <span style={{ color: 'var(--accent)' }}>worst</span><br/>laptop on<br/>amazon.
            </div>
            <div style={{ marginTop: 'auto', fontFamily: 'var(--mono)', fontSize: 14, letterSpacing: '0.1em', display: 'flex', justifyContent: 'space-between' }}>
              <span>● MN</span><span>TECH</span>
            </div>
          </PhoneCover>
          <PhoneCover label="REELS / 9:16" bg="var(--cream)" fg="var(--ink)">
            <div style={{ fontFamily: 'var(--mono)', fontSize: 14, letterSpacing: '0.1em', opacity: 0.7 }}>EP.022</div>
            <div style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 86, lineHeight: 0.9, letterSpacing: '-0.04em', marginTop: 8, textTransform: 'uppercase' }}>
              I RAN<br/>13.1<br/>MILES<br/><span style={{ color: 'var(--accent)' }}>BAD.</span>
            </div>
            <div style={{ marginTop: 'auto', fontFamily: 'var(--mono)', fontSize: 14, letterSpacing: '0.1em', display: 'flex', justifyContent: 'space-between' }}>
              <span>● MN</span><span>RUNNING</span>
            </div>
          </PhoneCover>
          <PhoneCover label="YOUTUBE / 9:16" bg="var(--accent)" fg="var(--cream)">
            <div style={{ fontFamily: 'var(--mono)', fontSize: 14, letterSpacing: '0.1em', opacity: 0.85 }}>EP.031</div>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 76, lineHeight: 0.95, letterSpacing: '-0.02em', marginTop: 8 }}>
              a day<br/>where i<br/>did <span style={{ textDecoration: 'underline' }}>nothing</span><br/>useful.
            </div>
            <div style={{ marginTop: 'auto', fontFamily: 'var(--mono)', fontSize: 14, letterSpacing: '0.1em', display: 'flex', justifyContent: 'space-between' }}>
              <span>● MN</span><span>LIFESTYLE</span>
            </div>
          </PhoneCover>
        </div>
      </div>
    </SlideChrome>
  );
}

function PhoneCover({ label, bg, fg, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.08em', marginBottom: 12, opacity: 0.7 }}>
        {label}
      </div>
      <div style={{
        width: '100%', height: 720, background: bg, color: fg,
        padding: 28, display: 'flex', flexDirection: 'column',
        border: bg === 'var(--cream)' ? '1px solid var(--ink-on-cream)' : 'none',
      }}>
        {children}
      </div>
    </div>
  );
}

// ─── 08 VOICE & APPLICATION ─────────────────────────────────────────────────
function Slide08() {
  const dos = [
    'write like you talk.',
    'one joke per video.',
    'admit when something is mid.',
    'use lower-case in captions.',
  ];
  const donts = [
    'corporate speak ("synergy").',
    'three exclamation marks.',
    'overpromise in the title.',
    'forget the punchline.',
  ];
  return (
    <SlideChrome no={8} label="VOICE & APPLICATION" bg="var(--cream)" fg="var(--ink)">
      <div style={{
        position: 'absolute', top: 130, left: SPACING.paddingX, right: SPACING.paddingX, bottom: 100,
        display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80,
      }}>
        <div>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: TYPE_SCALE.title, letterSpacing: '-0.02em', lineHeight: 0.95, marginBottom: 32 }}>
            Sound like<br/>a friend.
          </div>
          <div style={{ fontFamily: 'var(--sans)', fontSize: TYPE_SCALE.body, lineHeight: 1.35, maxWidth: 640 }}>
            The brand is one person who's a little tired, very curious, and genuinely amused by his own life. Write captions in that voice. Cut anything that sounds like a press release.
          </div>
          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.08em', borderBottom: '1px solid var(--ink)', paddingBottom: 8, marginBottom: 16 }}>
                ✓ DO
              </div>
              {dos.map((d) => (
                <div key={d} style={{ fontFamily: 'var(--sans)', fontSize: TYPE_SCALE.small, marginBottom: 8 }}>
                  — {d}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.08em', borderBottom: '1px solid var(--ink)', paddingBottom: 8, marginBottom: 16, color: 'var(--accent)' }}>
                ✗ DON'T
              </div>
              {donts.map((d) => (
                <div key={d} style={{ fontFamily: 'var(--sans)', fontSize: TYPE_SCALE.small, marginBottom: 8, opacity: 0.6 }}>
                  — {d}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{
          background: 'var(--ink)', color: 'var(--cream)', padding: 40,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.08em' }}>
            // SAMPLE LOWER-THIRD
          </div>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.1em', opacity: 0.7, marginBottom: 16 }}>
              MILE 11 / PACE 7:42
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 88, lineHeight: 0.95, letterSpacing: '-0.02em' }}>
              I am, simply, <span style={{ color: 'var(--accent)' }}>cooked.</span>
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.1em', marginTop: 16, opacity: 0.5 }}>
              MATTHEWNICHOLSON.COM · @MATTHEW
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <MN size={80} color="var(--cream)" />
            <a href="Brand Kit Reference.html" style={{ fontFamily: 'var(--mono)', fontSize: TYPE_SCALE.mono, letterSpacing: '0.08em', color: 'var(--accent)', textDecoration: 'underline' }}>
              FULL REFERENCE →
            </a>
          </div>
        </div>
      </div>
    </SlideChrome>
  );
}

// expose
Object.assign(window, { Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07, Slide08, MN, ReverseStack });
