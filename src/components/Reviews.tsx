import { useRef } from "react";
import { motion } from "framer-motion";
import { reviews } from "../data/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2l3 6.5 7 .6-5.3 4.6 1.6 6.8L12 17l-6.3 3.5 1.6-6.8L2 9.1l7-.6L12 2z" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 404, behavior: "smooth" });
  };

  return (
    <section className="section reviews">
      <div className="container">
        <div className="section-header">
          <div className="left">
            <span className="eyebrow">Customer Love</span>
            <h2 className="section-title">What Our Guests Say</h2>
          </div>
          <div className="reviews-nav">
            <button onClick={() => scroll(-1)} aria-label="Previous reviews">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={() => scroll(1)} aria-label="Next reviews">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="reviews-track" ref={trackRef}>
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              className="review-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Stars rating={r.rating} />
              <p className="review-text">"{r.text}"</p>
              <div className="review-author">
                <div className="review-avatar">{r.initials}</div>
                <div className="review-meta">
                  <strong>{r.name}</strong>
                  <span>{r.date}</span>
                </div>
              </div>
              {r.sample && (
                <span className="review-sample-note">Sample review</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
