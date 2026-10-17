import { motion } from "framer-motion";
import { bestsellers } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Bestsellers() {
  const { add } = useCart();

  return (
    <section className="section bestsellers">
      <div className="container">
        <div className="section-header">
          <div className="left">
            <span className="eyebrow">Bestsellers</span>
            <h2 className="section-title">Signature Drinks</h2>
          </div>
          <a href="#menu" className="link-arrow">
            View Full Menu
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
        </div>

        <div className="best-grid">
          {bestsellers.map((p, i) => (
            <motion.article
              key={p.id}
              className="best-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img src={p.image} alt={p.name} loading="lazy" />
              <div className="best-overlay">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <div className="best-row">
                  <span className="best-price">${p.price.toFixed(2)}</span>
                  <button
                    className="best-add"
                    aria-label={`Add ${p.name} to cart`}
                    onClick={() => add(p)}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
