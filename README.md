# Diti Chhaproo Portfolio

A two-volume React/Vite portfolio for GitHub Pages. The fixed landing spread opens the Engineering and Product project indexes. Page turns, ribbon navigation, and book-cover interactions respect reduced-motion preferences.

## Development

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`

## Content

`src/data/portfolio.js` contains the Engineering and Product project lists, case-study copy, track introductions, and social links. `src/App.jsx` contains the shared navigation, footer, book covers, project cards, and case-study template. Styling is in `src/index.css`.

Hash routes support direct links and refreshes on GitHub Pages without server routing configuration. The existing GitHub Actions workflow deploys `dist` when changes reach `main`.

## Publish to GitHub

The files are already in the local clone at `/Users/ditichhaproo/Downloads/diti-chhaproo.github.io` and its remote is `https://github.com/diti-chhaproo/diti-chhaproo.github.io.git`.

Review the changes, then publish them with:

```bash
git add README.md index.html src public/assets/portfolio package-lock.json
git commit -m "Rebuild portfolio as two-volume site"
git push origin main
```

Pushing to `main` starts the existing GitHub Pages workflow.

## Content awaiting final assets

- Replace the illustrative SVGs in `public/assets/portfolio/` with original screenshots and artifact thumbnails. The site labels these as placeholders.
- Add the updated resume PDF and replace the Resume placeholder page/link.
- Supply missing project dates, currently labeled “Dates forthcoming.”
- Review the drafted reflective takeaways before publication.
