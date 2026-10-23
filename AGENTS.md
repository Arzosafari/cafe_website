# Brew & Bean — Coffee Shop Website

A premium, animated coffee shop website built with Vite + React + TypeScript + Framer Motion.

## Tech Stack
- **Vite 5.4** (dev server on port 3000)
- **React 18** + **TypeScript**
- **Framer Motion** for scroll reveals and hero parallax
- **SVG + CSS keyframes** for the hero coffee illustration, floating beans, and drifting steam
- **CSS** — single global stylesheet (`src/index.css`) with CSS custom properties for the design system
- No backend — cart persists via `localStorage`

## Running the App
```sh
docker compose -f docker-compose.base44.yml up -d
```
The app runs at `http://localhost:3000`. Vite dev server with live reload.

## Project Structure
- `src/data/` — product, business, and review data (editable by the owner)
- `src/context/CartContext.tsx` — cart state and localStorage persistence
- `src/components/` — all UI components (Navbar, Hero, HeroCoffee, Menu, ProductCard, Story, Craft, Bestsellers, Visit, Reviews, FinalCTA, Footer, CartDrawer)
- `src/lib/images.ts` — Unsplash CDN URL builder

## Key Implementation Notes
- The hero visual is a transparent inline SVG in `HeroCoffee.tsx`: ceramic cup, heart latte art, saucer, roasted beans, and layered steam. It has no raster/video background, masks, or edge overlays. `.hero-coffee-scene` controls its responsive size, and `.coffee-scene-anim` (in `Hero.tsx`) centres it in the hero column.
- Beans float independently with subtle rotation through `bean-float`; layered steam wisps drift through `steam-drift`. Negative animation delays keep the scene active from the first frame, and the slow `halo-breathe` animation adds ambient warmth.
- The hero retains its warm beige backdrop (`#dcc6b1`), while the illustration uses the site's cream, caramel, and espresso palette.
- `prefers-reduced-motion` disables the bean, steam, and halo animations while leaving a complete static scene with visible steam.
- Parallax on the hero visual and text is scroll-driven (Framer Motion).
- Product images use verified Unsplash CDN URLs (confirmed 200 OK).
- Cart is fully functional: add, increment, decrement, remove, subtotal, demo checkout.
- All business data (address, hours, phone, email) is sample content in `src/data/business.ts`.

## Sandbox Setup
- `docker-compose.base44.yml` uses `node:22-slim`, bind-mounts source, runs `npm install && vite` on startup.
- `vite.config.ts` sets `server.allowedHosts` to the sandbox host domain when `BASE44_PREVIEW_MODE=1` (Vite 5.4 blocks external hosts by default).
- `BASE44_SANDBOX_HOST_DOMAIN` is passed to the container via compose `environment:`.
