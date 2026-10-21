# Brew & Bean — Coffee Shop Website

A premium, animated coffee shop website built with Vite + React + TypeScript + Framer Motion.

## Tech Stack
- **Vite 5.4** (dev server on port 3000)
- **React 18** + **TypeScript**
- **Framer Motion** for animations (scroll reveals, hero parallax); the hero steam runs on CSS keyframes
- **CSS** — single global stylesheet (`src/index.css`) with CSS custom properties for the design system
- No backend — cart persists via `localStorage`

## Running the App
```sh
docker compose -f docker-compose.base44.yml up -d
```
The app runs at `http://localhost:3000`. Vite dev server with live reload.

## Project Structure
- `src/data/` — product, business, and review data (editable by the owner)
- `src/context/CartContext.tsx` — cart state with localStorage persistence
- `src/components/` — all UI components (Navbar, Hero, HeroCoffee, Steam, Menu, ProductCard, Story, Craft, Bestsellers, Visit, Reviews, FinalCTA, Footer, CartDrawer)
- `src/lib/images.ts` — Unsplash CDN URL builder
- `public/hero-coffee.png` — the hero coffee photograph (391 × 318, served from the site root)

## Key Implementation Notes
- The hero visual is the photograph `public/hero-coffee.png` (`HeroCoffee.tsx`) — cup, saucer and floating beans are all part of the photo.
- Steam (`Steam.tsx`) is an SVG laid over the cup, positioned by `.steam-layer` in `src/index.css` as a percentage of the photo box: 50% x / bottom 58% puts its base on the coffee surface. The wisps in `Steam.tsx` are drawn in a 100 × 190 view box whose bottom edge is that surface, and rise on the `steam-rise` keyframes (negative delays keep the plume alive from the first frame). Re-check those two offsets if the photo is ever swapped.
- The photo's edges are feathered with a CSS radial `mask-image` (solid out to 55% of a 66%/60% radius) so it dissolves into the page instead of reading as a hard rectangle; the solid core is sized to keep the cup and beans opaque.
- `prefers-reduced-motion` disables all non-essential animation; the hero then renders the wisps without the rise animation (`still` prop on `Steam`).
- Parallax on the hero visual and text is scroll-driven (Framer Motion).
- Product images use verified Unsplash CDN URLs (confirmed 200 OK).
- Cart is fully functional: add, increment, decrement, remove, subtotal, demo checkout.
- All business data (address, hours, phone, email) is sample content in `src/data/business.ts`.

## Sandbox Setup
- `docker-compose.base44.yml` uses `node:22-slim`, bind-mounts source, runs `npm install && vite` on startup.
- `vite.config.ts` sets `server.allowedHosts` to the sandbox host domain when `BASE44_PREVIEW_MODE=1` (Vite 5.4 blocks external hosts by default).
- `BASE44_SANDBOX_HOST_DOMAIN` is passed to the container via compose `environment:`.
