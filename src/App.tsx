import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Story from "./components/Story";
import Craft from "./components/Craft";
import Bestsellers from "./components/Bestsellers";
import Visit from "./components/Visit";
import Reviews from "./components/Reviews";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Story />
        <Craft />
        <Bestsellers />
        <Visit />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
