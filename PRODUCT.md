# Product

## Register

brand

## Users

- **Technical recruiters and hiring managers** at product companies in Spain/EU (primary). Scanning for stack fit (React, Flutter), open-source contributions, and a sense of "this person ships". They spend 30-90 seconds on a portfolio. They open the contact form or close the tab.
- **Fellow front-end and mobile developers** (secondary). Reading for craft, animations, code-window pattern, accessibility choices. May share on social or in private channels.
- **University / bootcamp peers** (tertiary). Checking what a recent graduate from UPV with multimedia background is building.

The visitor is in evaluation mode, not browsing mode. They are not here for entertainment. They are here to answer: *would I hire this person / work with this person?*

## Product Purpose

A single-page personal portfolio that functions as a written CV in code form. Success is:

- **Hire-readiness**: a recruiter finishes the page knowing role, stack, recent projects, how to contact, and where to download the CV. Nothing more.
- **Demonstrated craft**: the portfolio itself is a portfolio piece. Animations, accessibility, responsive design, and code structure are themselves proof of skill, separate from the listed projects.
- **Multilingual reach**: Spanish (native market), English (international remote roles), Catalan/Valencià (local market and identity).
- **Real artifact, not a template**: a real PDF CV is served, real GitHub/LinkedIn links, no placeholder Lorem Ipsum.

What it is not: a blog, a content platform, a SaaS product, a multi-page IA. One page, one scroll, one decision.

## Brand Personality

**Warm, technical, opinionated.**

- *Warm*: orange/red/amber palette. Glass cards, soft glows, friendly geometry. Not cold, not minimalist-brutalist, not dark-corporate.
- *Technical*: code window in hero, real stack names, terminal-style meta. The visitor should read "this person writes code" within the first viewport.
- *Opinionated*: numbered editorial sections (01, 02, 03), restrained but committed color, no "hire me!" pleading copy, no stock photography, no testimonial carousel.

Voice: third-person CV facts, never breathless marketing. No em dashes. No "leverage", "empower", "seamless", "cutting-edge". Verbs and concrete nouns.

## Anti-references

- **AI-slop default portfolios**: gradient text headlines, glass-everything, "Front-End Developer" as the only label, generic Inter, three identical project cards, "Let's build something together" CTA, "Available for hire" badge.
- **Editorial-typographic reflex** (Fraunces italic + small mono labels + ruled separators + no imagery). Saturated in 2026; reads as Klim cosplay on a personal site.
- **Cream/sand body backgrounds**. The whole warm-neutral band (`OKLCH L 0.84–0.97, C < 0.06, hue 40–100`) is a tell. The site is dark by default; light is a token-aware alternative, not a near-white warm surface.
- **Hero-metric templates** ("3+ years · 20+ projects · 100% remote"). Skip the metric pattern; the data is in the CV.
- **Default card grids**: three identical project cards with icon + title + description. Instead: a bento-style project grid with a featured first card spanning two columns.
- **Aphoristic body copy** ("I build things. Things that work.") as recurring voice. Specific, not punchline-shaped.
- **Tiny uppercase tracked eyebrows above every section heading** as a reflex. The numbered 01/02/03 system is committed brand grammar on this site, not reflex scaffolding. The two are not the same and a careful reader can tell.

## Design Principles

1. **Practice what you preach.** The portfolio is a working demo of the craft being sold. If a hiring manager sees sloppy accessibility, the listed skills in the data file are lies.
2. **Show, don't tell.** No "I build accessible interfaces" copy. Ship the skip-link, the focus states, the prefers-reduced-motion fallbacks, the real form validation. The visitor can see them.
3. **Restraint at the body, commitment at the accent.** Surface is dark and quiet. Brand color (orange `#f97316`) is committed, not sprinkled. One section can be drenched; most are not.
4. **Bilingual by structure, not by afterthought.** Language switching is first-class state (Context), not a flag emoji in the corner. All user-facing strings live in `data/portfolio.ts` in three languages; no JSX contains hard-coded copy.
5. **Shipped over polished.** A real PDF CV at a real URL beats a generated placeholder. A 150kb real OG image beats a 2kb dummy. A live contact form beats a mailto link. The portfolio is judged on what it does, not what it says it does.

## Accessibility & Inclusion

- **WCAG 2.1 AA** is the bar. Not a stretch goal.
- **Keyboard navigation** end-to-end, visible focus, no traps, skip-to-content link.
- **Reduced motion**: every framer-motion animation must respect `prefers-reduced-motion`. The portfolio never blocks content visibility on a class-triggered transition (regression risk on hidden tabs and headless renderers).
- **Color contrast**: body text ≥ 4.5:1, large text ≥ 3:1. The dark theme's primary text (`#f5f5f4`-ish on `#0c0805`) is well above AA. Light theme gets the same audit.
- **Language attributes**: `<html lang>` is set per active language. Inline script reads `localStorage` before first paint to avoid the FOUC of `lang="en"` on an es/ca user.
- **Form a11y**: contact form has visible labels (or proper `aria-label`), error messages are announced (`aria-live`), the honeypot is the only hidden field, submit button has loading + disabled states.
- **Touch targets**: ≥ 44×44px on mobile for all interactive elements.
- **i18n beyond language**: numbers, dates, phone format match the active language locale. ES locale is canonical.
- **No knowledge of color-blindness-specific accommodations** is required because the palette is used semantically (primary for CTAs, neutral for body) and never as the only signal.

## Stack & Build

React 19 + TypeScript (strict) + Vite. framer-motion for animations, lucide-react for icons (no brand icons in v1, so GitHub/LinkedIn are inline SVG in `src/components/BrandIcons.tsx`). Web3Forms for the contact form (key in `.env`, gitignored). No CSS framework; hand-written CSS in `src/styles.css` with custom properties for theming.

Single source of content: `src/data/portfolio.ts`. Type the data, derive the UI.
