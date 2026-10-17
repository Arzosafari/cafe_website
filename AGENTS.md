# Brew & Bean — Coffee Shop Website

A premium, animated coffee shop website built with Vite + React + TypeScript + Framer Motion.

## Tech Stack
- **Vite 5.4** (dev server on port 3000)
- **React 18** + **TypeScript**
- **Framer Motion** for animations (scroll reveals, hero parallax, steam, floating beans)
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
- `src/components/` — all UI components (Navbar, Hero, CoffeeScene, Steam, FloatingBeans, Menu, ProductCard, Story, Craft, Bestsellers, Visit, Reviews, FinalCTA, Footer, CartDrawer)
- `src/lib/images.ts` — Unsplash CDN URL builder

## Key Implementation Notes
- The hero coffee cup is a hand-crafted SVG with animated steam (SVG paths) and floating beans (CSS transforms + Framer Motion). No WebGL dependency.
- Cursor parallax on the hero scene (desktop only); beans float autonomously on mobile.
- `prefers-reduced-motion` disables all non-essential animation.
- Product images use verified Unsplash CDN URLs (confirmed 200 OK).
- Cart is fully functional: add, increment, decrement, remove, subtotal, demo checkout.
- All business data (address, hours, phone, email) is sample content in `src/data/business.ts`.

## Sandbox Setup
- `docker-compose.base44.yml` uses `node:22-slim`, bind-mounts source, runs `npm install && vite` on startup.
- `vite.config.ts` sets `server.allowedHosts` to the sandbox host domain when `BASE44_PREVIEW_MODE=1` (Vite 5.4 blocks external hosts by default).
- `BASE44_SANDBOX_HOST_DOMAIN` is passed to the container via compose `environment:`.
