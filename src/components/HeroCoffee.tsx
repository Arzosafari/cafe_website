import type { CSSProperties } from "react";

interface BeanConfig {
  id: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  driftX: number;
  driftY: number;
  turn: number;
  duration: number;
  delay: number;
}

interface SteamConfig {
  id: string;
  d: string;
  width: number;
  sway: number;
  duration: number;
  delay: number;
}

const beans: BeanConfig[] = [
  { id: "upper-left", x: 122, y: 145, scale: 0.94, rotation: -28, driftX: -8, driftY: -14, turn: 9, duration: 6.4, delay: -1.2 },
  { id: "left", x: 92, y: 254, scale: 0.76, rotation: 32, driftX: 8, driftY: -11, turn: -10, duration: 5.8, delay: -3.1 },
  { id: "lower-left", x: 132, y: 367, scale: 0.84, rotation: -48, driftX: -7, driftY: -12, turn: 8, duration: 6.9, delay: -4.4 },
  { id: "upper-right", x: 416, y: 126, scale: 0.78, rotation: 44, driftX: 10, driftY: -12, turn: -9, duration: 6.1, delay: -2.5 },
  { id: "lower-right", x: 444, y: 358, scale: 0.7, rotation: 58, driftX: 7, driftY: -10, turn: -8, duration: 6.6, delay: -0.7 },
];

const steamWisps: SteamConfig[] = [
  { id: "left", d: "M246 194 C225 165 259 145 242 116 C226 89 246 67 254 41", width: 4.2, sway: -10, duration: 5.8, delay: -1.4 },
  { id: "center", d: "M281 192 C300 160 265 143 285 110 C301 83 278 63 286 30", width: 5, sway: 9, duration: 6.5, delay: -3.8 },
  { id: "right", d: "M316 195 C338 169 309 145 329 121 C349 96 326 76 337 51", width: 3.8, sway: 12, duration: 5.5, delay: -2.6 },
];

function CoffeeBean({ bean }: { bean: BeanConfig }) {
  const style = {
    "--bean-x": `${bean.driftX}px`,
    "--bean-y": `${bean.driftY}px`,
    "--bean-turn": `${bean.turn}deg`,
    "--bean-duration": `${bean.duration}s`,
    "--bean-delay": `${bean.delay}s`,
  } as CSSProperties;

  return (
    <g transform={`translate(${bean.x} ${bean.y}) scale(${bean.scale})`}>
      <g className="coffee-bean" style={style}>
        <g transform={`rotate(${bean.rotation})`}>
          <ellipse cx="3" cy="5" rx="16" ry="23" fill="#392319" opacity="0.14" />
          <ellipse rx="16" ry="23" fill="url(#bean-roast)" />
          <path
            d="M2 -20 C-7 -11 7 -3 1 6 C-3 12 -2 17 -1 20"
            fill="none"
            stroke="#d19a68"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.72"
          />
          <path
            d="M-9 -14 C-13 -7 -13 0 -10 5"
            fill="none"
            stroke="#f0c18e"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.28"
          />
        </g>
      </g>
    </g>
  );
}

function SteamWisp({ wisp }: { wisp: SteamConfig }) {
  const style = {
    "--steam-sway": `${wisp.sway}px`,
    "--steam-duration": `${wisp.duration}s`,
    "--steam-delay": `${wisp.delay}s`,
  } as CSSProperties;

  return (
    <g className="coffee-steam-wisp" style={style}>
      <path
        d={wisp.d}
        fill="none"
        stroke="url(#steam-stroke)"
        strokeWidth={wisp.width * 2.8}
        strokeLinecap="round"
        filter="url(#steam-soft)"
        opacity="0.35"
      />
      <path
        d={wisp.d}
        fill="none"
        stroke="url(#steam-stroke)"
        strokeWidth={wisp.width}
        strokeLinecap="round"
      />
    </g>
  );
}

/**
 * A lightweight, resolution-independent coffee scene. Every visible element is
 * SVG, so there is no image or video background to blend into the hero.
 */
export default function HeroCoffee() {
  return (
    <div className="hero-coffee-scene">
      <svg
        className="hero-coffee-svg"
        viewBox="0 0 560 500"
        role="img"
        aria-labelledby="coffee-scene-title coffee-scene-description"
      >
        <title id="coffee-scene-title">A lovingly crafted cup of coffee</title>
        <desc id="coffee-scene-description">
          A warm ceramic latte cup with heart latte art, a saucer, gently floating
          roasted coffee beans, and soft wisps of rising steam.
        </desc>

        <defs>
          <radialGradient id="coffee-halo-gradient">
            <stop offset="0%" stopColor="#fff8ec" stopOpacity="0.72" />
            <stop offset="58%" stopColor="#f5e8d7" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#f5e8d7" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="cup-glaze" x1="0%" y1="10%" x2="100%" y2="85%">
            <stop offset="0%" stopColor="#fffdf8" />
            <stop offset="42%" stopColor="#f8efe3" />
            <stop offset="78%" stopColor="#e5d2b9" />
            <stop offset="100%" stopColor="#cdb292" />
          </linearGradient>
          <linearGradient id="cup-rim" x1="12%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#fffef9" />
            <stop offset="55%" stopColor="#f2e4d3" />
            <stop offset="100%" stopColor="#d4bb9b" />
          </linearGradient>
          <linearGradient id="saucer-glaze" x1="15%" y1="0%" x2="75%" y2="100%">
            <stop offset="0%" stopColor="#fffaf1" />
            <stop offset="55%" stopColor="#ead9c3" />
            <stop offset="100%" stopColor="#c7aa87" />
          </linearGradient>
          <radialGradient id="latte" cx="42%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#dca15e" />
            <stop offset="58%" stopColor="#bd783b" />
            <stop offset="100%" stopColor="#83502d" />
          </radialGradient>
          <linearGradient id="bean-roast" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a66b3f" />
            <stop offset="42%" stopColor="#704126" />
            <stop offset="100%" stopColor="#321b12" />
          </linearGradient>
          <linearGradient id="steam-stroke" x1="0" y1="195" x2="0" y2="25" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fffdf8" stopOpacity="0" />
            <stop offset="24%" stopColor="#fffdf8" stopOpacity="0.82" />
            <stop offset="68%" stopColor="#fffdf8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#fffdf8" stopOpacity="0" />
          </linearGradient>
          <filter id="ground-blur" x="-30%" y="-150%" width="160%" height="400%">
            <feGaussianBlur stdDeviation="11" />
          </filter>
          <filter id="cup-shadow" x="-25%" y="-25%" width="155%" height="175%">
            <feDropShadow dx="0" dy="12" stdDeviation="11" floodColor="#59361f" floodOpacity="0.18" />
          </filter>
          <filter id="steam-soft" x="-100%" y="-30%" width="300%" height="170%">
            <feGaussianBlur stdDeviation="3.2" />
          </filter>
        </defs>

        <ellipse
          className="coffee-halo"
          cx="280"
          cy="250"
          rx="242"
          ry="224"
          fill="url(#coffee-halo-gradient)"
        />
        <ellipse
          cx="285"
          cy="410"
          rx="154"
          ry="18"
          fill="#59361f"
          opacity="0.2"
          filter="url(#ground-blur)"
        />

        <g className="coffee-steam" aria-hidden="true">
          {steamWisps.map((wisp) => (
            <SteamWisp key={wisp.id} wisp={wisp} />
          ))}
        </g>

        <g filter="url(#cup-shadow)">
          {/* Saucer */}
          <ellipse cx="280" cy="383" rx="151" ry="35" fill="#c6aa88" />
          <ellipse cx="280" cy="369" rx="151" ry="43" fill="url(#saucer-glaze)" />
          <ellipse
            cx="280"
            cy="367"
            rx="103"
            ry="26"
            fill="none"
            stroke="#c9ac88"
            strokeWidth="3"
            opacity="0.62"
          />
          <path
            d="M153 379 C199 409 359 411 409 379"
            fill="none"
            stroke="#fffaf1"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.48"
          />

          {/* Handle sits behind the cup body. */}
          <path
            d="M388 264 C450 244 466 322 372 343"
            fill="none"
            stroke="#c8ab88"
            strokeWidth="35"
            strokeLinecap="round"
          />
          <path
            d="M388 260 C445 246 455 313 376 335"
            fill="none"
            stroke="url(#cup-glaze)"
            strokeWidth="26"
            strokeLinecap="round"
          />
          <path
            d="M404 261 C433 258 442 277 434 294"
            fill="none"
            stroke="#fffaf2"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.52"
          />

          {/* Cup body */}
          <path
            d="M158 218 C164 288 181 342 224 361 C256 376 311 376 343 360 C381 341 395 286 401 218 Z"
            fill="url(#cup-glaze)"
          />
          <path
            d="M177 243 C184 299 198 332 224 345"
            fill="none"
            stroke="#ffffff"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.28"
          />
          <path
            d="M237 362 C267 369 309 369 333 360"
            fill="none"
            stroke="#b99a78"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.35"
          />

          {/* Rim, coffee, and latte art */}
          <ellipse cx="280" cy="218" rx="123" ry="41" fill="url(#cup-rim)" />
          <ellipse cx="280" cy="216" rx="112" ry="32" fill="url(#latte)" />
          <ellipse
            cx="280"
            cy="216"
            rx="104"
            ry="26"
            fill="none"
            stroke="#edbd7f"
            strokeWidth="2"
            opacity="0.52"
          />
          <g transform="translate(280 216) scale(1 0.48)">
            <path
              d="M0 28 C-12 17 -43 4 -42 -16 C-41 -36 -14 -40 0 -22 C14 -40 41 -36 42 -16 C43 4 12 17 0 28 Z"
              fill="#fff4dc"
              opacity="0.96"
            />
            <path
              d="M-64 -4 C-48 -22 -27 -27 -13 -20 M64 -4 C48 -22 27 -27 13 -20"
              fill="none"
              stroke="#f8dba9"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.72"
            />
          </g>
          <path
            d="M174 204 C202 177 341 175 383 204"
            fill="none"
            stroke="#ffffff"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.58"
          />

          <text
            x="280"
            y="319"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="21"
            fontStyle="italic"
            fill="#9a7352"
            opacity="0.55"
          >
            B&amp;B
          </text>
        </g>

        <g aria-hidden="true">
          {beans.map((bean) => (
            <CoffeeBean key={bean.id} bean={bean} />
          ))}
        </g>
      </svg>
    </div>
  );
}
