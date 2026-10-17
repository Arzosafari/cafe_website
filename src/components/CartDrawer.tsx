import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const { items, count, subtotal, isOpen, close, increment, decrement, remove, clear } =
    useCart();
  const [checkoutMsg, setCheckoutMsg] = useState(false);

  const handleCheckout = () => {
    setCheckoutMsg(true);
    setTimeout(() => {
      setCheckoutMsg(false);
      clear();
      close();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.aside
            className="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Shopping bag"
          >
            <div className="cart-header">
              <h2>Shopping Bag</h2>
              <button className="cart-close" onClick={close} aria-label="Close cart">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="cart-body">
              {items.length === 0 ? (
                <div className="cart-empty">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 7h15l-1.5 9a2 2 0 0 1-2 1.7H9.5a2 2 0 0 1-2-1.7L6 7Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 7 5 3H2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Your bag is empty.<br />Add a coffee to get started.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div className="cart-item" key={item.product.id}>
                    <img
                      className="cart-item-img"
                      src={item.product.image}
                      alt={item.product.name}
                    />
                    <div className="cart-item-info">
                      <span className="name">{item.product.name}</span>
                      <span className="price">${item.product.price.toFixed(2)} each</span>
                      <div className="cart-item-controls">
                        <button
                          className="qty-btn"
                          onClick={() => decrement(item.product.id)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="qty-val">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => increment(item.product.id)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                        <button
                          className="cart-item-remove"
                          onClick={() => remove(item.product.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <span style={{ fontWeight: 600, color: "var(--espresso)" }}>
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="cart-footer">
                <div className="cart-subtotal">
                  <span className="label">Subtotal ({count} items)</span>
                  <span className="amount">${subtotal.toFixed(2)}</span>
                </div>
                <button className="cart-checkout" onClick={handleCheckout}>
                  {checkoutMsg ? "✓ Order placed (demo)" : "Checkout"}
                </button>
                <p className="cart-demo-note">
                  Demo checkout — no payment is processed.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
