import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CoffeeScene from "./CoffeeScene";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const sceneY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="hero" ref={ref} id="home">
      <div className="container hero-inner">
        <motion.div className="hero-text" style={{ y: textY, opacity: textOpacity }}>
          <motion.span
            className="eyebrow"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
          >
            Good Coffee · Better Days
          </motion.span>

          <motion.h1
            className="hero-headline"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
          >
            More Than
            <br />
            <em>Just Coffee.</em>
          </motion.h1>

          <motion.p
            className="hero-sub"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
          >
            Freshly brewed, thoughtfully crafted. Discover exceptional coffee,
            comforting flavors, and a little moment of calm in every cup.
          </motion.p>

          <motion.div
            className="hero-cta"
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
          >
            <a href="#menu" className="btn btn-primary">
              Explore Our Menu
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#story" className="hero-link">
              Discover Our Story
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: sceneY, scale: sceneScale }}
          className="coffee-scene-anim"
        >
          <CoffeeScene />
        </motion.div>
      </div>
    </section>
  );
}
