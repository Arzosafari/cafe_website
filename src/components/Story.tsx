import { motion } from "framer-motion";
import { business } from "../data/business";

export default function Story() {
  return (
    <section className="section story" id="story">
      <div className="container story-grid">
        <motion.div
          className="story-img-wrap"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={business.storyImage}
            alt="Warm café interior with pendant lighting and natural materials"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="story-text"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">Our Story</span>
          <h2 className="section-title">A Cozy Place for Coffee Lovers</h2>
          <p>
            Every cup has a story. We bring together carefully selected beans,
            thoughtful preparation, and the comfort of a place where you can
            slow down and enjoy the moment.
          </p>
          <p>
            From the first pour to the last sip, we believe coffee should feel
            like a small ritual — a pause in your day that's worth savoring.
          </p>
          <a href="#visit" className="link-arrow">
            Visit Our Café
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
