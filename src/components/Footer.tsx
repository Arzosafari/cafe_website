import { business } from "../data/business";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Visit Us", href: "#visit" },
];

const menuLinks = [
  { label: "Hot Coffee", href: "#menu" },
  { label: "Iced Coffee", href: "#menu" },
  { label: "Signature Drinks", href: "#menu" },
  { label: "Tea & Other", href: "#menu" },
];

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M6 12h18v8a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6v-8Z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M24 14h2a3 3 0 0 1 0 6h-2" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 6c0 1.5-1 2-1 3.5M16 5c0 1.5-1 2-1 3.5M20 6c0 1.5-1 2-1 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <Logo />
              {business.name}
            </a>
            <p>{business.description}</p>
            <div className="footer-social">
              <a href={business.social.instagram} aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href={business.social.facebook} aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 9h3V6h-3c-2 0-3 1-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.5.5-1 1-1Z" />
                </svg>
              </a>
              <a href={business.social.twitter} aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l8-9L3 3h6l4 5 5-5Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Menu</h4>
            <ul>
              {menuLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>{business.address}</li>
              <li>
                <a href={`tel:${business.phone.replace(/[^\d]/g, "")}`}>
                  {business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </li>
              {business.hours.map((h) => (
                <li key={h.day}>
                  {h.day}: {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </span>
          <span>Crafted with care · Sample demonstration site</span>
        </div>
      </div>
    </footer>
  );
}
