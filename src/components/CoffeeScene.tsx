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
                y: [0, -12, 0],
                rotateX: [6, 10, 6],
                rotateY: [-6, 4, -6],
              }
        }
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          rotateX: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 11, repeat: Infinity, ease: "easeInOut" },
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
            viewBox="0 0 300 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Cup body — ceramic with strong left-light, right-shadow */}
              <linearGradient id="cup-body" x1="0" y1="0" x2="1" y2="0.3">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="25%" stopColor="#fbf4e8" />
                <stop offset="55%" stopColor="#f0e3d0" />
                <stop offset="80%" stopColor="#dcc8ad" />
                <stop offset="100%" stopColor="#c4ad90" />
              </linearGradient>
              {/* Cup body — vertical shading for depth */}
              <linearGradient id="cup-body-v" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                <stop offset="100%" stopColor="rgba(120,90,60,0.18)" />
              </linearGradient>
              {/* Cup wall thickness — the visible ceramic rim */}
              <linearGradient id="rim-outer" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#fffdf8" />
                <stop offset="50%" stopColor="#f5ead6" />
                <stop offset="100%" stopColor="#e0ccae" />
              </linearGradient>
              {/* Inner well — dark coffee-stained ceramic */}
              <radialGradient id="cup-inner" cx="0.45" cy="0.3" r="0.7">
                <stop offset="0%" stopColor="#7a4d2e" />
                <stop offset="60%" stopColor="#5c3820" />
                <stop offset="100%" stopColor="#3d2415" />
              </radialGradient>
              {/* Coffee surface — espresso with crema */}
              <radialGradient id="coffee-surface" cx="0.4" cy="0.4" r="0.65">
                <stop offset="0%" stopColor="#a87650" />
                <stop offset="40%" stopColor="#8a5836" />
                <stop offset="80%" stopColor="#6b4226" />
                <stop offset="100%" stopColor="#553318" />
              </radialGradient>
              {/* Crema ring — lighter foam at edge */}
              <radialGradient id="crema" cx="0.5" cy="0.5" r="0.5">
                <stop offset="70%" stopColor="rgba(200,160,110,0)" />
                <stop offset="88%" stopColor="rgba(210,175,125,0.55)" />
                <stop offset="97%" stopColor="rgba(225,195,150,0.7)" />
                <stop offset="100%" stopColor="rgba(190,150,100,0.3)" />
              </radialGradient>
              {/* Latte art — milky foam */}
              <radialGradient id="latte-foam" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#f5ead6" />
                <stop offset="60%" stopColor="#ecdcc0" />
                <stop offset="100%" stopColor="#dcc4a0" />
              </radialGradient>
              {/* Saucer */}
              <linearGradient id="saucer" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#faf2e2" />
                <stop offset="50%" stopColor="#f0e3d0" />
                <stop offset="100%" stopColor="#d4bea0" />
              </linearGradient>
              <radialGradient id="saucer-dish" cx="0.5" cy="0.4" r="0.5">
                <stop offset="0%" stopColor="#e8d8c0" />
                <stop offset="100%" stopColor="#c8b294" />
              </radialGradient>
              {/* Contact shadow */}
              <radialGradient id="shadow" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="rgba(57,35,25,0.32)" />
                <stop offset="60%" stopColor="rgba(57,35,25,0.12)" />
                <stop offset="100%" stopColor="rgba(57,35,25,0)" />
              </radialGradient>
              {/* Specular highlight on cup body */}
              <radialGradient id="highlight" cx="0.25" cy="0.3" r="0.4">
                <stop offset="0%" stopColor="rgba(255,255,255,0.65)" />
                <stop offset="60%" stopColor="rgba(255,255,255,0.15)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
              {/* Rim light — top edge catch-light */}
              <linearGradient id="rim-light" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
              {/* Handle shading */}
              <linearGradient id="handle-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#e8d6bc" />
                <stop offset="50%" stopColor="#faf2e2" />
                <stop offset="100%" stopColor="#d0b896" />
              </linearGradient>
              <filter id="cup-blur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" />
              </filter>
            </defs>

            {/* ── Contact shadow (ground) ── */}
            <ellipse cx="150" cy="288" rx="120" ry="16" fill="url(#shadow)" />

            {/* ── Saucer ── */}
            {/* Saucer bottom (darker, gives thickness) */}
            <ellipse cx="150" cy="272" rx="112" ry="18" fill="#c8b294" />
            {/* Saucer top surface */}
            <ellipse cx="150" cy="268" rx="112" ry="18" fill="url(#saucer)" />
            {/* Saucer rim ring */}
            <ellipse
              cx="150"
              cy="268"
              rx="112"
              ry="18"
              fill="none"
              stroke="#c0a884"
              strokeWidth="1.2"
              opacity="0.7"
            />
            {/* Saucer inner dish (where cup sits) */}
            <ellipse cx="150" cy="266" rx="82" ry="13" fill="url(#saucer-dish)" />
            <ellipse
              cx="150"
              cy="265"
              rx="82"
              ry="13"
              fill="none"
              stroke="#b89e7c"
              strokeWidth="0.8"
              opacity="0.5"
            />
            {/* Saucer specular */}
            <ellipse
              cx="110"
              cy="262"
              rx="30"
              ry="4"
              fill="rgba(255,255,255,0.35)"
            />

            {/* ── Handle (behind cup body for depth) ── */}
            {/* Handle outer */}
            <path
              d="M 216 168 C 258 168, 262 214, 220 218"
              stroke="url(#handle-grad)"
              strokeWidth="16"
              fill="none"
              strokeLinecap="round"
            />
            {/* Handle inner shadow */}
            <path
              d="M 216 172 C 250 172, 254 210, 222 214"
              stroke="#d0b896"
              strokeWidth="7"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
            />
            {/* Handle highlight */}
            <path
              d="M 220 170 C 248 170, 252 200, 226 206"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* ── Cup body ── */}
            <path
              d="M 80 128
                Q 80 114, 94 114
                L 206 114
                Q 220 114, 220 128
                L 212 242
                Q 210 260, 194 260
                L 106 260
                Q 90 260, 88 242
                Z"
              fill="url(#cup-body)"
            />
            {/* Cup body vertical shading overlay */}
            <path
              d="M 80 128
                Q 80 114, 94 114
                L 206 114
                Q 220 114, 220 128
                L 212 242
                Q 210 260, 194 260
                L 106 260
                Q 90 260, 88 242
                Z"
              fill="url(#cup-body-v)"
            />
            {/* Right-side shadow on cup body */}
            <path
              d="M 196 114
                Q 220 114, 220 128
                L 212 242
                Q 210 260, 194 260
                L 196 260
                L 204 242
                L 210 128
                Q 210 114, 196 114 Z"
              fill="rgba(120,90,60,0.15)"
            />
            {/* Specular highlight on left of cup body */}
            <ellipse
              cx="108"
              cy="175"
              rx="16"
              ry="55"
              fill="url(#highlight)"
              opacity="0.5"
            />

            {/* ── Cup rim (visible ceramic thickness) ── */}
            {/* Outer rim ellipse — top of cup wall */}
            <ellipse cx="150" cy="124" rx="70" ry="14" fill="url(#rim-outer)" />
            {/* Inner well — the dark inside of the cup */}
            <ellipse cx="150" cy="126" rx="62" ry="11" fill="url(#cup-inner)" />
            {/* Rim top catch-light */}
            <path
              d="M 88 122 Q 150 108, 212 122"
              stroke="url(#rim-light)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
            {/* Rim left bright edge */}
            <path
              d="M 82 124 Q 84 116, 94 114"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />

            {/* ── Coffee surface ── */}
            <ellipse cx="150" cy="127" rx="60" ry="10.5" fill="url(#coffee-surface)" />
            {/* Crema ring around edge */}
            <ellipse cx="150" cy="127" rx="60" ry="10.5" fill="url(#crema)" />

            {/* ── Latte art — rosetta ── */}
            <g opacity="0.85">
              {/* Central stem */}
              <path
                d="M 150 119 L 150 134"
                stroke="#e8d4b0"
                strokeWidth="1.2"
                opacity="0.6"
                strokeLinecap="round"
              />
              {/* Leaf shapes — left side */}
              <ellipse cx="138" cy="123" rx="6" ry="2.5" fill="url(#latte-foam)" opacity="0.7" transform="rotate(-25 138 123)" />
              <ellipse cx="134" cy="127" rx="7" ry="2.8" fill="url(#latte-foam)" opacity="0.65" transform="rotate(-20 134 127)" />
              <ellipse cx="133" cy="131" rx="6.5" ry="2.5" fill="url(#latte-foam)" opacity="0.6" transform="rotate(-15 133 131)" />
              {/* Leaf shapes — right side */}
              <ellipse cx="162" cy="123" rx="6" ry="2.5" fill="url(#latte-foam)" opacity="0.7" transform="rotate(25 162 123)" />
              <ellipse cx="166" cy="127" rx="7" ry="2.8" fill="url(#latte-foam)" opacity="0.65" transform="rotate(20 166 127)" />
              <ellipse cx="167" cy="131" rx="6.5" ry="2.5" fill="url(#latte-foam)" opacity="0.6" transform="rotate(15 167 131)" />
              {/* Top rounded leaves */}
              <ellipse cx="144" cy="121" rx="5" ry="2.2" fill="url(#latte-foam)" opacity="0.75" transform="rotate(-35 144 121)" />
              <ellipse cx="156" cy="121" rx="5" ry="2.2" fill="url(#latte-foam)" opacity="0.75" transform="rotate(35 156 121)" />
              {/* Base of rosetta */}
              <ellipse cx="150" cy="134" rx="8" ry="2.5" fill="url(#latte-foam)" opacity="0.5" />
            </g>

            {/* ── Coffee surface specular reflection ── */}
            <ellipse
              cx="135"
              cy="125"
              rx="18"
              ry="3"
              fill="rgba(255,240,220,0.12)"
            />

            {/* ── Cup bottom curve shadow (inner, gives 3D weight) ── */}
            <path
              d="M 92 258 Q 150 270, 208 258"
              stroke="rgba(120,90,60,0.2)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
