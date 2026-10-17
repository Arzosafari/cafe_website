import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <motion.span
          className="eyebrow"
          style={{ color: "rgba(246,239,229,0.6)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Your Next Cup Awaits
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Your Next Favorite Cup Is Waiting.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Stop by for a fresh brew, find your favorite drink, or get in touch
          with our team.
        </motion.p>
        <motion.div
          className="final-cta-actions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#menu" className="btn btn-light">
            Explore the Menu
          </a>
          <a href="#visit" className="btn btn-ghost-light">
            Get Directions
          </a>
          <a href="#visit" className="btn btn-ghost-light">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
