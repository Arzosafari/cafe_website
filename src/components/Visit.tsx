import { motion } from "framer-motion";
import { business } from "../data/business";

export default function Visit() {
  return (
    <section className="section visit" id="visit">
      <div className="container">
        <div className="section-header">
          <div className="left">
            <span className="eyebrow">Visit Us</span>
            <h2 className="section-title">Come Say Hello</h2>
          </div>
        </div>

        <div className="visit-grid">
          <motion.div
            className="visit-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="info-block">
              <h3>Address</h3>
              <p>{business.address}</p>
            </div>
            <div className="info-block">
              <h3>Opening Hours</h3>
              <ul className="hours-list">
                {business.hours.map((h) => (
                  <li key={h.day}>
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="info-block">
              <h3>Contact</h3>
              <p>
                <a href={`tel:${business.phone.replace(/[^\d]/g, "")}`}>
                  {business.phone}
                </a>
                <br />
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </p>
            </div>
            <a
              href={business.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get Directions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            className="visit-map"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              title="Café location map"
              src={business.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
