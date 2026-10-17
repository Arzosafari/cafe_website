import { motion, useReducedMotion } from "framer-motion";

/** Delicate rising steam wisps rendered as animated SVG paths. */
export default function Steam() {
  const reduced = useReducedMotion();

  const wisps = [
    { x: 32, delay: 0, dur: 4, scale: 1, drift: -10, amp: 8 },
    { x: 50, delay: 0.8, dur: 3.5, scale: 0.85, drift: 7, amp: 6 },
    { x: 68, delay: 1.6, dur: 4.5, scale: 0.9, drift: -5, amp: 9 },
    { x: 42, delay: 2.4, dur: 3.8, scale: 0.7, drift: 12, amp: 7 },
    { x: 58, delay: 1.2, dur: 4.2, scale: 0.75, drift: -8, amp: 5 },
    { x: 38, delay: 3, dur: 5, scale: 0.6, drift: 9, amp: 10 },
  ];

  if (reduced) return null;

  return (
    <div className="steam-layer" aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 140"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="steam-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="rgba(255,249,241,0)" />
            <stop offset="25%" stopColor="rgba(255,249,241,0.4)" />
            <stop offset="60%" stopColor="rgba(255,249,241,0.22)" />
            <stop offset="100%" stopColor="rgba(255,249,241,0)" />
          </linearGradient>
          <filter id="steam-blur" x="-30%" y="-10%" width="160%" height="120%">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>
        {wisps.map((w, i) => (
          <motion.path
            key={i}
            d={`M ${w.x} 140
              C ${w.x - w.amp + w.drift * 0.2} 115,
                ${w.x + w.amp + w.drift * 0.5} 95,
                ${w.x + w.drift * 0.7} 70
              S ${w.x - w.amp * 0.8 + w.drift * 1.1} 40,
                ${w.x + w.drift * 1.4} 10
              S ${w.x + w.amp * 0.5 + w.drift * 1.7} -10,
                ${w.x + w.drift * 2} -25`}
            stroke="url(#steam-grad)"
            strokeWidth={3.5 * w.scale}
            fill="none"
            strokeLinecap="round"
            filter="url(#steam-blur)"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: [0, 0.55, 0.3, 0],
              pathLength: [0, 0.75, 1, 1],
              y: [12, -18, -42],
              scaleX: [0.8, 1, 1.15],
            }}
            transition={{
              duration: w.dur,
              delay: w.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
