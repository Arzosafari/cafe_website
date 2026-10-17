import { useState } from "react";
import { motion } from "framer-motion";
import { products, categories, type Category } from "../data/products";
import ProductCard from "./ProductCard";

export default function Menu() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const filtered =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <section className="section menu" id="menu">
      <div className="container">
        <div className="section-header">
          <div className="left">
            <span className="eyebrow">Our Special Menu</span>
            <h2 className="section-title">Crafted With Care</h2>
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

        <div className="menu-filters" role="tablist">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${filter === c ? "active" : ""}`}
              onClick={() => setFilter(c)}
              role="tab"
              aria-selected={filter === c}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          className="product-grid"
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
