# Portfolio — Victor San Blas Gomez

Personal portfolio site. React + TypeScript + Vite, no backend.

## Stack
- **React 19** + **TypeScript** (strict)
- **Vite** (build tool)
- **framer-motion** (animations)
- **lucide-react** (icons — v1.x, NO brand icons available)
- **Web3Forms** (contact form, key in `.env`)
- No CSS framework — hand-written CSS in `src/styles.css`

## Folder structure
```
src/
├── App.tsx                       # Composition only. Renders <Nav> + sections + footer.
├── main.tsx                      # Entry. Wraps <App> in <LanguageProvider>.
├── styles.css                    # ALL styles. Uses CSS custom properties for theming.
├── lib/
│   └── animations.ts             # Shared framer-motion variants (fadeUp, etc.)
├── components/                   # Shared / reusable UI
│   ├── BrandIcons.tsx            # Inline SVG: GithubIcon, LinkedinIcon (lucide v1 lacks brands)
│   ├── LanguageSelector.tsx      # Custom language dropdown (NOT native <select>)
│   ├── SectionTitle.tsx          # Numbered section heading (index prop)
│   ├── ThemeToggle.tsx
│   └── index.ts                  # Barrel export
├── sections/                     # One folder per page section
│   ├── Nav/                      # Nav.tsx + index.ts
│   ├── Profile/                  # Profile.tsx + index.ts (avatar + name + role + location)
│   ├── Hero/                     # Hero.tsx + CodeWindow.tsx (+ HeroBadge) + index.ts
│   ├── About/                    # About.tsx + index.ts
│   ├── Projects/                 # Projects.tsx + ProjectCard.tsx + index.ts
│   ├── Skills/                   # Skills.tsx + SkillCategory.tsx + index.ts
│   ├── Experience/               # Experience.tsx + TimelineItem.tsx + index.ts
│   └── Contact/                  # Contact.tsx + ContactForm.tsx + SocialCard.tsx + SocialChip.tsx + ContactLine.tsx + index.ts
├── hooks/
│   ├── useLanguage.tsx           # Context-based language state (ES / EN / CA)
│   ├── useContactForm.ts         # Form state, validation (incl. email regex), rate limit
│   └── useTheme.ts
├── data/
│   └── portfolio.ts              # ALL content: types + per-language data + UI copy
├── assets/
│   ├── projects/                 # Project screenshots — imported as ES modules by Vite (hashed, optimized)
│   │   ├── watermarks.jpg
│   │   ├── taskmaster.jpg
│   │   └── urban-cut.webp
│   └── profile/                  # Profile avatar (square, ≥400×400, ≤200 kB)
│       └── avatar.png
└── utils/
    ├── contact.ts                # Web3Forms submission + rate limit (localStorage)
    └── cv.ts                     # Triggers download of /CV_Victor_SanBlas.pdf
public/
└── CV_Victor_SanBlas.pdf         # User's actual CV
```

## Design system
- **Palette** (warm): `--primary` orange `#f97316`, `--secondary` red `#dc2626`, `--accent` amber `#fbbf24`
- **Fonts**: Inter (body), Space Grotesk (headlines), JetBrains Mono (code/meta)
- **Cards**: `.glass-card` = glassmorphism + gradient border on hover
- **Background**: radial gradient mesh + 3 animated orbs + subtle SVG noise overlay
- **Theme**: light/dark via `:root[data-theme='light']`
- **Sections**: numbered editorial style (01, 02, 03… in eyebrow)

## Conventions
- All user-facing strings live in `data/portfolio.ts` under `uiCopy[lang]`
- Every text change must be applied in **all 3 languages** (es, en, ca)
- Sections auto-mount via composition in `App.tsx` — never edit section internals from App
- Props always explicitly typed; avoid `any`
- Sub-components live next to their parent in the same section folder
- One component per file when meaningful
- Use `useLanguage()` to read current language; never hardcode strings in JSX
- CSS class names follow BEM-ish: `.project-card`, `.project-media`, `.project-body`, `.project-link`

## Anti-patterns to avoid
- DO NOT add `jspdf` back — CV is a real PDF in `public/`
- DO NOT use the native `<select>` for language — use the custom `LanguageSelector`
- DO NOT duplicate `useLanguage()` state — it's Context-based, single source of truth
- DO NOT touch `src/components/BrandIcons.tsx` brand SVGs (lucide v1 doesn't ship them)
- DO NOT add CSS frameworks (Tailwind, etc.) — keep hand-written CSS
- DO NOT commit `.env` — it's gitignored, contains the Web3Forms key

## Common tasks

### Add a new project
Edit `data/portfolio.ts` → `portfolios.es.projects` (and `.en`, `.ca`):
```ts
import newImage from '../assets/projects/my-new.jpg';
// ...
{
  title: 'My new project',
  image: newImage,                    // drop file in src/assets/projects/
  description: '...',
  stack: ['React', 'TypeScript'],
  link: 'https://github.com/...',
}
```

### Add a new skill
Edit `portfolios.es.skills` (and `.en`, `.ca`). Keys are categories, values are string arrays:
```ts
skills: {
  Frontend: [..., 'Vue.js'],
  Mobile: [...],
  Backend: [...],
  Herramientas: [...],
}
```
Skill bar widths auto-calc from index: `92 - index * 6` %.

### Add a new section
1. Create `src/sections/MySection/` with `MySection.tsx` + `index.ts`
2. Import + render in `App.tsx` between existing sections
3. Add `copy.sections.mySection` in `uiCopy` for all 3 languages
4. Add CSS in `src/styles.css` under a new `/* ---------- My Section ---------- */` block

### Add a new language
1. Add to `Language` type in `data/portfolio.ts`
2. Add to `languageOptions` array
3. Add to `portfolios` and `uiCopy` records

## Build / dev
- `npm run dev` — Vite dev server
- `npm run build` — TypeScript check + production build
- `npm run preview` — preview production build

## Environment
- `VITE_WEB3FORMS_KEY` in `.env` (gitignored) — required for contact form to work
- Without it, contact form shows "form not configured" error
