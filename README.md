# Victor San Blas Gomez · Portfolio

Single-page React portfolio built to demonstrate front-end craft in the form it claims to ship.
Trilingual (ES / EN / CA), accessible (WCAG 2.1 AA), deployed to GitHub Pages with a CI/CD
pipeline on every push to `main`.

[![Live](https://img.shields.io/badge/live-vsanblasgomez.github.io-f97316?style=flat-square)](https://vsanblasgomez.github.io/vsanblasgomez-Portfolio/)
[![Stack](https://img.shields.io/badge/stack-React%2019%20%C2%B7%20TypeScript%20%C2%B7%20Vite%208-0c0805?style=flat-square)](https://github.com/vsanblasgomez/vsanblasgomez-Portfolio)
[![A11y](https://img.shields.io/badge/WCAG-2.1%20AA-22c55e?style=flat-square)](https://www.w3.org/WAI/WCAG21/quickref/)
[![License](https://img.shields.io/badge/license-MIT-dc2626?style=flat-square)](#license)
[![Built with OpenCode](https://img.shields.io/badge/built%20with-OpenCode%20%2B%20skills-fbbf24?style=flat-square)](https://opencode.ai)

> A portfolio is a CV written in code. If the craft is sloppy, the listed skills in the
> data file are lies. This repo is the working demo.

---

## Preview

![Portfolio hero — animated SVG paths background, code window, and editorial section markers](./docs/preview.png)

> Drop a real screenshot at `docs/preview.png` (1400×900, dark mode, hero in frame) to
> replace this placeholder.

---

## What it ships

- **Hero** with a code-window motif, status pill, stats strip, and three CTAs
  (jump to projects, contact, download CV)
- **Editorial section markers** (01 – 05) instead of decorative "kicker" labels
- **Animated SVG paths background**: 36 paths × 2 mirrored layers, color-graded with
  a primary → accent → secondary gradient, masked by a radial vignette
- **Bento-free project grid**: 2-column responsive layout, 16:10 media, hover zoom and
  gradient reveal
- **Skills as an infinite slider** with progressive blur masks on both edges, 6-second
  loop, hover slowdown
- **Experience timeline** with a vertical gradient rule and alternating card sides
- **Contact form** wired to Web3Forms with rate limit, honeypot, cooldown, and inline
  error states in three languages
- **Real PDF CV** served from `/public/CV_Victor_SanBlas.pdf` and downloaded on click
- **Theme toggle** (light / dark) with CSS custom properties and `prefers-color-scheme`
  synchronization
- **Language selector** as a custom popover (not a native `<select>`) with full keyboard
  support and ARIA listbox semantics

## Accessibility

- **Skip link** as the first focusable element, jumps to `<main>` landmark
- **Visible focus rings** on every interactive element (`focus-visible` only, not on
  click)
- **Color contrast** ≥ 4.5:1 for body, ≥ 3:1 for large text, in both themes
- **Reduced motion**: every `framer-motion` animation and CSS keyframe respects
  `prefers-reduced-motion: reduce`
- **Touch targets** ≥ 44 × 44 px on mobile for nav, language selector, theme toggle,
  CTAs, and form controls
- **Form a11y**: visible labels, `aria-live` feedback, `aria-hidden` honeypot, submit
  button announces loading / success / error / cooldown
- **Semantic HTML**: `<main>`, `<nav>`, `<section>` with `id` anchors for in-page
  navigation, `<article>` for project cards
- **`<html lang>`** set from `localStorage` before first paint to avoid screen-reader
  language flash

## Performance

| Asset | Size | Gzipped |
|---|---|---|
| HTML | 3.84 kB | 1.27 kB |
| CSS | 25.84 kB | 6.09 kB |
| JS | 376.83 kB | 120.61 kB |
| Total images (3 project shots, WebP) | ~190 kB | — |

- **No CSS framework**. Hand-written CSS with custom properties, `color-mix()`,
  `clamp()` fluid scales, and `prefers-reduced-motion` alternatives
- **Image pipeline**: source JPGs live in `src/assets/projects/`, Vite imports them as
  ES modules, hashes the filenames, and emits WebP at build time
- **Font loading**: preconnect to `fonts.gstatic.com`, three families (Inter, Space
  Grotesk, JetBrains Mono) loaded with `display=swap`
- **Animation budget**: only `transform`, `opacity`, and SVG `pathLength` /
  `pathOffset` are animated. No layout properties, no `backdrop-filter` on full
  viewport surfaces
- **Lazy loading** on project images (`loading="lazy"`)

## Stack

- **React 19** + **TypeScript** (strict mode, no `any` in app code)
- **Vite 8** for dev and build
- **framer-motion 12** for entrance and micro-interactions
- **lucide-react** for icons (brand icons inlined as SVG, lucide v1 doesn't ship them)
- **Web3Forms** for the contact form (key in `.env`, gitignored)
- **GitHub Actions + GitHub Pages** for CI/CD

No Tailwind, no shadcn, no UI kit. Every pixel is committed to the repo.

---

## How it was built

This project is a working demo of an AI-augmented front-end workflow. The design
decisions, copy, accessibility choices, and final QA were mine. The execution was
accelerated by **[OpenCode](https://opencode.ai)** and a library of curated design
skills.

The skills used during the build, by phase:

| Phase | Skill | What it did |
|---|---|---|
| Setup | `init` | Wrote `PRODUCT.md` (users, brand voice, anti-references) and the `AGENTS.md` working agreement for the rest of the session |
| Discovery | `shape` | Multi-round brief discovery before any code, with a "no argument → grill-me" fallback to resolve open design questions |
| Background | `redesign-existing-projects` / visual probes | Iterated the hero background from a particle canvas to the current 21st.dev-inspired SVG paths (2 mirrored layers, color-graded gradient stroke) |
| Components | `craft` | End-to-end build flow for each new section (Skills slider, project grid) with brief confirmation gates |
| Quality | `audit` | Technical quality scan: 5 dimensions (a11y, perf, theming, responsive, anti-patterns), scored 0-4, severity-tagged findings |
| Polish | `polish` | Final alignment, spacing, and consistency pass before the audit re-run |
| Hardening | `harden` | Edge cases: missing-env fallback, error states, i18n, rate limit on the contact form |

The agent was constrained by a working agreement (`AGENTS.md` in this repo) that
forbids `any`, CSS frameworks, hardcoded copy outside `data/portfolio.ts`, and the
native `<select>` for language. The agreement also dictates the strict multilingual
contract: every user-facing string lives in three languages in one data file, and
no JSX contains hardcoded copy.

This file is the source of truth for the project. Read it before changing anything:
[`AGENTS.md`](./AGENTS.md).

---

## Architecture

```
src/
├── App.tsx                       # Composition only. Renders <Nav> + sections + footer.
├── main.tsx                      # Entry. Wraps <App> in <LanguageProvider>.
├── styles.css                    # ALL styles. Uses CSS custom properties for theming.
├── lib/
│   └── animations.ts             # Shared framer-motion variants (fadeUp, etc.)
├── components/                   # Shared / reusable UI
│   ├── BackgroundPaths.tsx       # Animated SVG paths background
│   ├── BrandIcons.tsx            # Inline SVG: GithubIcon, LinkedinIcon
│   ├── LanguageSelector.tsx      # Custom popover (NOT native <select>)
│   ├── SectionTitle.tsx          # Numbered section heading
│   ├── ThemeToggle.tsx
│   ├── InfiniteSlider.tsx        # Skill marquee
│   ├── ProgressiveBlur.tsx       # Edge masks for the slider
│   └── index.ts
├── sections/                     # One folder per page section
│   ├── Nav/      Hero/   About/  Projects/  Skills/  Experience/  Contact/
├── hooks/
│   ├── useLanguage.tsx           # Context-based language state (ES / EN / CA)
│   ├── useContactForm.ts         # Form state, validation, rate limit
│   └── useTheme.ts
├── data/
│   └── portfolio.ts              # ALL content: types + per-language data + UI copy
├── assets/
│   └── projects/                 # Source images (Vite-imported, hashed at build)
└── utils/
    ├── contact.ts                # Web3Forms submission + rate limit
    └── cv.ts                     # Triggers download of /CV_Victor_SanBlas.pdf
public/
└── CV_Victor_SanBlas.pdf         # The real CV
.github/
└── workflows/
    └── deploy.yml                # CI/CD to GitHub Pages on push to main
```

## Getting started

```bash
# 1. Install dependencies (npm 9+ recommended)
npm install

# 2. Create .env with the Web3Forms key (otherwise the form shows "form not configured")
echo "VITE_WEB3FORMS_KEY=your_key_here" > .env

# 3. Start the dev server
npm run dev          # → http://localhost:5173

# 4. Type-check and build
npm run build        # → tsc + vite build → dist/

# 5. Preview the production build locally
npm run preview
```

Node 20+ is required. The repo pins `react@19`, `react-dom@19`, and `vite@8`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which:

1. Checks out the repo
2. Installs dependencies with `npm ci`
3. Runs `tsc && vite build` (the same as local `npm run build`)
4. Uploads `dist/` as a Pages artifact
5. Deploys to GitHub Pages at
   [`vsanblasgomez.github.io/vsanblasgomez-Portfolio`](https://vsanblasgomez.github.io/vsanblasgomez-Portfolio/)

The workflow uses the official `actions/configure-pages`, `actions/upload-pages-artifact`,
and `actions/deploy-pages` actions with the `github-pages` environment for branch
protection visibility.

To use a custom domain (e.g. `victorsanblas.dev`), set the `base` in `vite.config.ts`
to `/` and configure the custom domain in the repo's Pages settings. See
[GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## i18n contract

Every user-facing string lives in [`src/data/portfolio.ts`](./src/data/portfolio.ts)
under `uiCopy[lang]` for the three supported languages: `es`, `en`, `ca`. Adding a
new language requires:

1. Add the code to the `Language` type
2. Add a `portfolios.<code>` entry with all required fields
3. Add a `uiCopy.<code>` entry with all required sections
4. Add a `languageOptions` entry for the selector

No JSX should ever contain hardcoded user-facing copy.

## License

MIT. Use it, fork it, ship your own. If you do, a link back is appreciated but not
required.

## Contact

- **Email**: vsanblasgomez@gmail.com
- **GitHub**: [@vsanblasgomez](https://github.com/vsanblasgomez)
- **LinkedIn**: [vsanblasgomez](https://linkedin.com/in/vsanblasgomez)
- **CV**: [PDF download](https://vsanblasgomez.github.io/vsanblasgomez-Portfolio/CV_Victor_SanBlas.pdf)
