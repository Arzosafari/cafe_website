import { useReducedMotion } from "framer-motion";
import Steam from "./Steam";

/**
 * The hero coffee visual: a looping clip of a ceramic cup of latte with heart
 * latte art, saucer and floating beans, with animated steam laid over it.
 * The clip is muted and plays inline so it can autoplay; visitors who ask for
 * reduced motion keep the still poster frame instead.
 */
export default function HeroCoffee() {
  const reduced = useReducedMotion();

  return (
    <div className="hero-photo-wrap">
      <video
        className="hero-photo"
        src="/hero-coffee.mp4"
        poster="/hero-coffee.png"
        autoPlay={!reduced}
        loop
        muted
        playsInline
        preload="auto"
        aria-label="A ceramic cup of latte with heart latte art on a saucer, roasted coffee beans floating beside it"
      />
      <Steam still={reduced === true} />
    </div>
  );
}
