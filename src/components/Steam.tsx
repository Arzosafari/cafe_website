import { motion, useReducedMotion } from "framer-motion";

/** Delicate rising steam wisps rendered as animated SVG paths. */
export default function Steam() {
  const reduced = useReducedMotion();

  const wisps = [
    { x: "30%", delay: 0, dur: 4, scale: 1, drift: -8 },
    { x: "50%", delay: 0.8, dur: 3.5, scale: 0.8, drift: 6 },
    { x: "68%", delay: 1.6, dur: 4.5, scale: 0.9, drift: -4 },
    { x: "42%", delay: 2.4, dur: 3.8, scale: 0.7, drift: 10 },
  ];

  if (reduced) return null;

  return (
    <div className="steam-layer" aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 120"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="steam-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="rgba(255,249,241,0)" />
            <stop offset="30%" stopColor="rgba(255,249,241,0.35)" />
            <stop offset="70%" stopColor="rgba(255,249,241,0.18)" />
            <stop offset="100%" stopColor="rgba(255,249,241,0)" />
          </linearGradient>
        </defs>
        {wisps.map((w, i) => (
          <motion.path
            key={i}
            d={`M ${parseFloat(w.x)} 120
              C ${parseFloat(w.x) - 6 + w.drift * 0.3} 100,
                ${parseFloat(w.x) + 6 + w.drift * 0.6} 80,
                ${parseFloat(w.x) + w.drift} 50
              S ${parseFloat(w.x) - 4 + w.drift * 1.2} 20,
                ${parseFloat(w.x) + w.drift * 1.5} 0`}
            stroke="url(#steam-grad)"
            strokeWidth={3 * w.scale}
            fill="none"
            strokeLinecap="round"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: [0, 0.6, 0.3, 0],
              pathLength: [0, 0.8, 1, 1],
              y: [10, -20, -40],
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
