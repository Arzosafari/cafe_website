import type { CSSProperties } from "react";

interface WispConfig {
  x: number;
  drift: number;
  amp: number;
  delay: number;
  dur: number;
  width: number;
}

/**
 * Wisps are drawn in a 100 × 190 view box whose bottom edge sits on the
 * surface of the coffee, so every wisp comes out of the drink itself.
 * The plume leans gently to the right, the way steam drifts in still air.
 * Delays are negative so the plume is already alive on the first frame.
 */
const wisps: WispConfig[] = [
  { x: 38, drift: -5, amp: 6, delay: 0, dur: 3.8, width: 3.4 },
  { x: 58, drift: 10, amp: 5, delay: -0.7, dur: 4.4, width: 4.2 },
  { x: 47, drift: 3, amp: 8, delay: -1.4, dur: 3.4, width: 2.8 },
  { x: 30, drift: 7, amp: 6, delay: -2.1, dur: 4.8, width: 3.8 },
  { x: 66, drift: -2, amp: 5, delay: -2.8, dur: 4.2, width: 3 },
  { x: 52, drift: 5, amp: 7, delay: -3.5, dur: 3.9, width: 2.6 },
];

const wispPath = ({ x, drift, amp }: WispConfig) =>
  `M ${x} 190
   C ${x - amp} 164, ${x + amp + drift * 0.2} 146, ${x + drift * 0.35} 118
   S ${x - amp * 0.6 + drift * 0.8} 74, ${x + drift} 42
   S ${x + amp * 0.6 + drift * 1.2} 22, ${x + drift * 1.5} 4`;

/**
 * Delicate steam rising out of the cup: each wisp is a soft halo around a
 * brighter core, and rises on its own rhythm (see `steam-rise` in index.css).
 */
export default function Steam({ still = false }: { still?: boolean }) {
  return (
    <div className={`steam-layer${still ? " steam-layer--still" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 100 190" fill="none" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="steam-stroke" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#fffdf8" stopOpacity="0" />
            <stop offset="20%" stopColor="#fffdf8" stopOpacity="0.85" />
            <stop offset="62%" stopColor="#fffdf8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#fffdf8" stopOpacity="0" />
          </linearGradient>
          <filter id="steam-soft" x="-70%" y="-40%" width="240%" height="180%">
            <feGaussianBlur stdDeviation="2.8" />
          </filter>
          <filter id="steam-core" x="-70%" y="-40%" width="240%" height="180%">
            <feGaussianBlur stdDeviation="0.9" />
          </filter>
        </defs>

        {wisps.map((w, i) => {
          const d = wispPath(w);
          return (
            <g
              key={i}
              className="steam-wisp"
              style={
                {
                  "--dur": `${w.dur}s`,
                  "--delay": `${w.delay}s`,
                  "--drift": `${w.drift}px`,
                  opacity: still ? 0.45 - i * 0.08 : undefined,
                } as CSSProperties
              }
            >
              <path
                d={d}
                stroke="url(#steam-stroke)"
                strokeWidth={w.width * 2.4}
                strokeLinecap="round"
                filter="url(#steam-soft)"
                opacity="0.4"
              />
              <path
                d={d}
                stroke="url(#steam-stroke)"
                strokeWidth={w.width}
                strokeLinecap="round"
                filter="url(#steam-core)"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
