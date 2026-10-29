# Pavlo Rakulenko — personal landing (JDG)

Vite (vanilla) project: `index.html` + `styles.css` + `script.js` + `public/fonts`. No framework.

## StackBlitz — exact steps
You already have a Vite starter project. Replace its contents with this one:
1. In the file tree, DELETE the starter files: the whole `src/` folder, `vite.config.ts`,
   `tsconfig*.json`, `_oxlintrc.json`, `public/*`, `index.html`, `package.json`, `package-lock.json`.
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
