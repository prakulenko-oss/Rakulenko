# Pavlo Rakulenko — personal landing (JDG)

Static site: `index.html` + `styles.css` + `script.js`. No build step.

## Run in StackBlitz
1. Create a new **Static / Vanilla JS** project (or import this folder / GitHub repo).
2. Upload all files from this archive into the project root.
3. It starts via `npm start` (servor), same as the Sanvin project. (Local fonts live in `fonts/`.)

## Features
- Languages: **PL (default) / UA / EN**, remembered in localStorage.
- Contact form opens the visitor's e-mail app (mailto) — no backend needed.
  To collect submissions server-side later, swap the submit handler in `script.js`
  for a service like Formspree/Getform or your own API.
- Privacy (GDPR) dialog, business info (NIP/REGON, CEIDG link), responsive, reduced-motion friendly.

## Editing content
All texts for the three languages live in one place: the `I18N` object at the top of `script.js`.
