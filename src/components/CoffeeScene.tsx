import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Steam from "./Steam";
import FloatingBeans from "./FloatingBeans";

/** A premium 3D-style coffee cup rendered as layered SVG with parallax depth. */
export default function CoffeeScene() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [cupParallax, setCupParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        setParallax({ x: dx * 20, y: dy * 14 });
        setCupParallax({ x: dx * 10, y: dy * 6 });
      });
    };
    const onLeave = () => {
      setParallax({ x: 0, y: 0 });
      setCupParallax({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div className="coffee-scene" ref={ref}>
      <div
        className="scene-glow"
        style={{
          transform: `translate(${parallax.x * 0.3}px, ${parallax.y * 0.3}px)`,
          transition: "transform 0.5s ease-out",
        }}
      />

      <FloatingBeans parallax={parallax} />

      <motion.div
        className="cup-wrapper"
        style={{ transformStyle: "preserve-3d" }}
        animate={
          reduced
            ? {}
            : {
                y: [0, -10, 0],
                rotateX: [2, 3, 2],
                rotateY: [-2, 0, -2],
              }
        }
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div
          style={{
            transform: `translate(${cupParallax.x}px, ${cupParallax.y}px)`,
            transition: "transform 0.4s ease-out",
            width: "100%",
            height: "100%",
          }}
        >
          <Steam />
          <svg
            className="cup-svg"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cup-body" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#fff9f1" />
                <stop offset="45%" stopColor="#f3e8d8" />
                <stop offset="100%" stopColor="#e2d0bc" />
              </linearGradient>
              <linearGradient id="cup-inner" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6b4226" />
                <stop offset="100%" stopColor="#8a5a35" />
              </linearGradient>
              <radialGradient id="latte-art" cx="0.5" cy="0.45" r="0.5">
                <stop offset="0%" stopColor="#f8edd6" />
                <stop offset="100%" stopColor="#e8d4b5" />
              </radialGradient>
              <linearGradient id="saucer" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f5ead8" />
                <stop offset="100%" stopColor="#d8c4ac" />
              </linearGradient>
              <radialGradient id="shadow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="rgba(57,35,25,0.25)" />
                <stop offset="100%" stopColor="rgba(57,35,25,0)" />
              </radialGradient>
              <radialGradient id="highlight" cx="0.3" cy="0.3" r="0.5">
                <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>

            {/* Contact shadow */}
            <ellipse cx="150" cy="262" rx="110" ry="14" fill="url(#shadow)" />

            {/* Saucer */}
            <ellipse cx="150" cy="250" rx="108" ry="18" fill="url(#saucer)" />
            <ellipse
              cx="150"
              cy="247"
              rx="108"
              ry="18"
              fill="none"
              stroke="#d0bc9f"
              strokeWidth="1.5"
            />
            <ellipse cx="150" cy="246" rx="78" ry="12" fill="#e8d8c2" opacity="0.6" />

            {/* Handle */}
            <path
              d="M 218 175 C 252 175, 258 205, 222 212"
              stroke="url(#cup-body)"
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 218 178 C 246 178, 250 202, 222 208"
              stroke="#e2d0bc"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Cup body */}
            <path
              d="M 82 130
                Q 82 118, 94 118
                L 206 118
                Q 218 118, 218 130
                L 210 230
                Q 208 246, 192 246
                L 108 246
                Q 92 246, 90 230
                Z"
              fill="url(#cup-body)"
            />

            {/* Cup inner rim */}
            <ellipse cx="150" cy="130" rx="68" ry="14" fill="url(#cup-inner)" />

            {/* Coffee surface with latte art */}
            <ellipse cx="150" cy="128" rx="64" ry="11" fill="url(#latte-art)" />

            {/* Latte art — rosetta leaves */}
            <g opacity="0.7">
              <path
                d="M 150 122
                  C 142 120, 134 122, 130 126
                  C 134 124, 140 124, 146 126
                  C 140 128, 136 130, 134 132
                  C 140 130, 146 130, 150 132
                  C 154 130, 160 130, 166 132
                  C 164 130, 160 128, 154 126
                  C 160 124, 166 124, 170 126
                  C 166 122, 158 120, 150 122 Z"
                fill="#c9a878"
                opacity="0.5"
              />
              <path
                d="M 150 119 L 150 136"
                stroke="#c9a878"
                strokeWidth="1.5"
                opacity="0.4"
              />
            </g>

            {/* Cup highlight */}
            <ellipse
              cx="115"
              cy="160"
              rx="18"
              ry="40"
              fill="url(#highlight)"
              opacity="0.4"
            />

            {/* Rim highlight */}
            <ellipse
              cx="150"
              cy="126"
              rx="64"
              ry="10"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
