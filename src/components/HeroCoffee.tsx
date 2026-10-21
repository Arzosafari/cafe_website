import { useReducedMotion } from "framer-motion";
import Steam from "./Steam";

/**
 * The hero coffee visual: a photorealistic ceramic cup of latte with heart
 * latte art, saucer and floating roasted beans, with animated steam rising
 * from the surface of the drink.
 */
export default function HeroCoffee() {
  const reduced = useReducedMotion();

  return (
    <div className="hero-photo-wrap">
      <img
        className="hero-photo"
        src="/hero-coffee.png"
        width={391}
        height={318}
        alt="A ceramic cup of latte with heart latte art on a saucer, roasted coffee beans floating beside it"
        draggable={false}
      />
      <Steam still={reduced === true} />
    </div>
  );
}
