# OG Image placeholder

Social media platforms (LinkedIn, Twitter, WhatsApp, Slack, Discord) need a
1200 × 630 px image to display when the portfolio is shared.

This file is a placeholder. Generate the real one and save it here as
`og-image.png` (same name, replace the placeholder text).

## How to generate it

Option A — Figma / Canva (easiest):
1. Create a 1200×630 canvas
2. Dark background `#0c0805`
3. Add a big "VS" mark (orange→red gradient, like the favicon)
4. Add text: "Victor San Blas Gomez" + "Front-End Developer · React & Flutter"
5. Subtitle: "victorsanblas.dev"
6. Export as PNG, optimize with Squoosh.app (~150-200 KB target)

Option B — Quick placeholder SVG → PNG:
1. Design in Figma as above
2. Or use https://www.opengraph.xyz/ to generate from text
3. Or use https://og-playground.vercel.app/ to preview

## Verification

After saving as `public/og-image.png`:
1. `npm run build`
2. Open https://www.opengraph.xyz/ or https://www.heymeta.com/
3. Enter `https://victorsanblas.dev/` (or your deployed URL)
4. Confirm the preview shows your image
