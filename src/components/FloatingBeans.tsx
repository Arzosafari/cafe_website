import { motion, useReducedMotion } from "framer-motion";

interface BeanConfig {
  x: string;
  y: string;
  size: number;
  dur: number;
  delay: number;
  rotate: number;
  depth: number;
}

const beans: BeanConfig[] = [
  { x: "8%", y: "20%", size: 26, dur: 7, delay: 0, rotate: 25, depth: 1.2 },
  { x: "82%", y: "15%", size: 22, dur: 8, delay: 1.5, rotate: -30, depth: 1.5 },
  { x: "15%", y: "72%", size: 20, dur: 6.5, delay: 0.8, rotate: 45, depth: 0.8 },
  { x: "88%", y: "68%", size: 28, dur: 9, delay: 2, rotate: -15, depth: 1.3 },
  { x: "5%", y: "45%", size: 18, dur: 7.5, delay: 3, rotate: 60, depth: 0.6 },
  { x: "92%", y: "40%", size: 24, dur: 8.5, delay: 1.2, rotate: -45, depth: 1.1 },
  { x: "30%", y: "8%", size: 16, dur: 6, delay: 2.5, rotate: 10, depth: 0.5 },
  { x: "65%", y: "88%", size: 22, dur: 7.8, delay: 0.4, rotate: -20, depth: 0.9 },
];

function BeanShape({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <ellipse
        cx="20"
        cy="20"
        rx="13"
        ry="9"
        fill="#59361f"
        transform="rotate(-20 20 20)"
      />
      <path
        d="M20 11 C 16 16, 16 24, 20 29"
        stroke="#3a2319"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
        transform="rotate(-20 20 20)"
      />
      <ellipse
        cx="17"
        cy="17"
        rx="4"
        ry="2.5"
        fill="rgba(255,255,255,0.12)"
        transform="rotate(-20 20 20)"
      />
    </svg>
  );
}

export default function FloatingBeans({
  parallax = { x: 0, y: 0 },
}: {
  parallax?: { x: number; y: number };
}) {
  const reduced = useReducedMotion();

  return (
    <div className="bean-layer" aria-hidden="true">
      {beans.map((b, i) => (
        <div
          key={i}
          className="bean"
          style={{
            left: b.x,
            top: b.y,
            transform: `translate(${parallax.x * b.depth}px, ${
              parallax.y * b.depth
            }px)`,
            transition: reduced ? "none" : "transform 0.4s ease-out",
          }}
        >
          {reduced ? (
            <BeanShape size={b.size} />
          ) : (
            <motion.div
              animate={{
                y: [0, -14, 0],
                rotate: [b.rotate, b.rotate + 360],
              }}
              transition={{
                y: {
                  duration: b.dur,
                  delay: b.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: b.dur * 1.5,
                  delay: b.delay,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <BeanShape size={b.size} />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
