import { motion } from "framer-motion";
import { business } from "../data/business";

const items = [
  {
    title: "Thoughtfully Sourced",
    text: "We choose beans for their character, quality, and flavor.",
    img: business.craftImages.sourced,
    alt: "Coffee beans being weighed and prepared",
  },
  {
    title: "Carefully Crafted",
    text: "Every cup is prepared with attention to the small things that make a difference.",
    img: business.craftImages.crafted,
    alt: "Barista pouring milk into a coffee cup",
  },
  {
    title: "Made for Your Moment",
    text: "Whether it's your morning ritual or an afternoon break, there's a cup waiting for you.",
    img: business.craftImages.moment,
    alt: "Iced coffee with ice cubes being dropped in",
  },
];

export default function Craft() {
  return (
    <section className="section craft">
      <div className="container">
        <div className="section-header">
          <div className="left">
            <span className="eyebrow">Quality &amp; Craft</span>
            <h2 className="section-title">Good Coffee Starts With the Details.</h2>
          </div>
        </div>

        <div className="craft-grid">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="craft-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="craft-img-wrap">
                <img src={item.img} alt={item.alt} loading="lazy" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
