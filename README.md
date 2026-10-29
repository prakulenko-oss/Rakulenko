# Pavlo Rakulenko — personal landing (JDG)

Vite (vanilla) project: `index.html` + `styles.css` + `script.js` + `public/fonts`. No framework.

## StackBlitz — exact steps
You already have a Vite starter project. Replace its contents with this one:
1. Clean the starter. Easiest — paste this in the StackBlitz terminal:
   `rm -rf src vite.config.ts tsconfig.json tsconfig.app.json tsconfig.node.json _oxlintrc.json public`
   (or delete the same items in the file tree), then also remove the starter's
   `index.html`, `package.json`, `package-lock.json`.
   Note: a leftover `vite.config.ts` is harmless now — this project ships its own
   `vite.config.js`, which Vite loads with higher priority.
2. Upload ALL files and folders from this archive into the project root
   (`index.html`, `styles.css`, `script.js`, `public/fonts/...`, `package.json`, `README.md`).
3. StackBlitz reinstalls dependencies and runs `npm run dev` automatically.
   If it doesn't, run `npm install && npm run dev` in the terminal.

(Alternatively: create a new project from the **Vite → Vanilla** template and upload the same files.)

## Deploy
`npm run build` → ready static site in `dist/` (works on any static hosting: Netlify, Vercel, Cloudflare Pages).

## Features
- Languages: PL (default) / UA / EN, switcher in the header, choice remembered.
- All texts for the three languages live in the `I18N` object at the top of `script.js`.
- Contact form opens the visitor's e-mail app with a prefilled message (mailto) — no backend.
  To collect submissions server-side later, replace the submit handler in `script.js`
  with a POST to Formspree/Getform or your own API.
- Privacy (GDPR) and business-info (NIP/REGON, CEIDG) dialogs, scroll-reveal animations,
  responsive, reduced-motion friendly.
