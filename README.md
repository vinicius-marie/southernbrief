# Southern Brief

Modern React + Vite recreation of the Southern Brief newsroom experience shown in https://www.figma.com/design/IdTTKw11pZOW45rCGt4mpJ/News-Website-Redesign. The site ships several views (home, article, briefs, admin) that all pull from the same Southern Cone data set.

## Local development

```bash
npm install
npm run dev   # start Vite on http://localhost:3000
npm run build # optional sanity check before pushing
```

## Managing articles and briefs

- All long-form stories live in `src/data/articles.json`.
- News briefs live in `src/data/briefs.json`.
- The home, briefs, and admin pages import those JSON files directly so every update stays in sync.

To quickly scaffold a new analysis article run:

```bash
npm run add:article
```

The script will ask for the section, country, title, standfirst, author, date, and image URL. It also lets you flag an article as featured and decide whether it should appear at the top of the list. The command updates `src/data/articles.json`; review the diff and commit it along with any image assets.

(Briefs can be edited manually in `src/data/briefs.json`. A matching helper script can be added later following the same pattern.)

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes the `build/` folder to GitHub Pages every time `main` is updated. After pushing, enable GitHub Pages in the repository settings ("GitHub Actions" source) and the workflow will take care of future deploys.
