# Victor San Blas Gomez · Portfolio

Single-page React portfolio. Trilingual (ES / EN / CA), accessible (WCAG 2.1 AA),
deployed to GitHub Pages with CI/CD on every push to `main`.

[![Live](https://img.shields.io/badge/live-vsanblasgomez.github.io-f97316?style=flat-square)](https://vsanblasgomez.github.io/vsanblasgomez-Portfolio/)
[![Stack](https://img.shields.io/badge/stack-React%2019%20%C2%B7%20TypeScript%20%C2%B7%20Vite%208-0c0805?style=flat-square)](#stack)
[![A11y](https://img.shields.io/badge/WCAG-2.1%20AA-22c55e?style=flat-square)](https://www.w3.org/WAI/WCAG21/quickref/)
[![License](https://img.shields.io/badge/license-MIT-dc2626?style=flat-square)](#license)
[![Built with OpenCode](https://img.shields.io/badge/built%20with-OpenCode%20%2B%20skills-fbbf24?style=flat-square)](https://opencode.ai)

![Preview](./readme-preview.webp)

---

## Stack

- **React 19** + **TypeScript** (strict)
- **Vite 8**, **framer-motion 12**, **lucide-react**
- **Web3Forms** for the contact form
- **GitHub Actions** deploying to **GitHub Pages**

No CSS framework. Hand-written CSS with custom properties and `prefers-reduced-motion`
fallbacks. Source images bundled by Vite, emitted as WebP, lazy-loaded.

## How it was built

Built iteratively with **[OpenCode](https://opencode.ai)** and a library of curated
design skills. The design decisions, copy, accessibility choices, and final QA were
mine; the execution was accelerated by AI.

| Phase | Skill | What it did |
|---|---|---|
| Setup | `init` | Wrote `PRODUCT.md` and the `AGENTS.md` working agreement |
| Discovery | `shape` | Multi-round brief before any code |
| Build | `craft` | End-to-end build flow per section with brief gates |
| Quality | `audit` | 5-dimension technical scan, severity-tagged findings |
| Polish | `polish` | Final alignment and consistency pass |
| Hardening | `harden` | Edge cases, error states, i18n, rate limit |

Working agreement: [`AGENTS.md`](./AGENTS.md). All copy lives in three languages in
`src/data/portfolio.ts`; no JSX contains hardcoded strings.

## Quick start

```bash
npm install
echo "VITE_WEB3FORMS_KEY=your_key" > .env
npm run dev          # http://localhost:5173
npm run build        # tsc + vite build → dist/
```

## Deployment

Push to `main` → `.github/workflows/deploy.yml` runs `tsc && vite build` and deploys
`dist/` to GitHub Pages. No manual steps. Custom domain is a `CNAME` / `A` record
plus `base: '/'` in `vite.config.ts`.

## Contact

- Email: [vsanblasgomez@gmail.com](mailto:vsanblasgomez@gmail.com)
- GitHub: [@vsanblasgomez](https://github.com/vsanblasgomez)
- LinkedIn: [vsanbla](https://www.linkedin.com/in/vsanbla/)
- CV: [PDF](https://vsanblasgomez.github.io/vsanblasgomez-Portfolio/CV_Victor_SanBlas.pdf)

## License

MIT.
