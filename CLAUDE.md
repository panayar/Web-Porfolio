# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm start          # Local dev server (hot reload)
npm run build      # Production build → /build
npm test           # Jest tests via react-scripts
npm run deploy     # Build + deploy to GitHub Pages (gh-pages)
```

Node version: 20 (`.nvmrc` present — run `nvm use` if needed).

## Architecture

Single-page React 19 portfolio site built with Create React App, deployed to GitHub Pages at paulaanayar.com.

**Tech stack:** React 19 + CSS Modules + CSS custom properties (theming) + React Three Fiber (3D) + lucide-react + react-icons.

**Entry flow:** `public/index.html` → `src/index.jsx` → `src/App.jsx` → Layout (ThemeProvider) → section components.

**Component layout in App.jsx:**
Navbar → Hero (3D scene) → BentoGrid (about) → Projects → Skills → Contact → GoTop → Footer

**Styling system:**
- Design tokens via CSS custom properties in `src/css/global.css` (accent: `--color-accent: #7C3AED`, fonts: Syne + Inter)
- Dark/light mode via `data-theme` attribute on `<html>`, toggled by `src/context/ThemeContext.jsx`
- Shared keyframe animations in `src/css/animations.css`
- Each component has a colocated `.module.css` file for scoped styles
- CSS Grid for layouts (no Bootstrap)

**3D:** React Three Fiber canvas in Hero section (`src/components/ThreeScene/FloatingShape.jsx`), lazy-loaded, desktop only via `useMediaQuery`.

**Custom hooks:** `src/hooks/` — `useInView` (scroll reveal), `useMousePosition` (3D interaction), `useMediaQuery` (responsive).

**Assets:**
- `src/img/` — project screenshots (PNG) and SVG illustrations
- `src/files/` — downloadable CV PDF

## Key Conventions

- Components live in `src/components/{Name}/` with `{Name}.jsx` + `{Name}.module.css`
- CSS Modules imported as `styles` object — use `styles.className` syntax
- Scroll reveal via `useInView` hook — returns `[ref, isInView]`, apply CSS transition classes
- Brand icons (GitHub, LinkedIn) use `react-icons/ai`; UI icons use `lucide-react`
- Theme state via `useTheme()` from `src/context/ThemeContext.jsx`
- ESLint config extends `react-app` (CRA defaults, no custom rules)
