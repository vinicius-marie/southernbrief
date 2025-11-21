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
- Every page imports those JSON files directly so updates remain in sync.

Use the content helper to add **either** an analysis article **or** a brief:

```bash
npm run add:article
```

The script walks through the required fields (section, country, etc.), lets you choose whether to feature or pin the entry, and prints a colorized preview before writing to disk. After it finishes, check `git status`, review the JSON diff, and commit.

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes the `build/` folder to GitHub Pages every time `main` is updated. After pushing, enable GitHub Pages in the repository settings ("GitHub Actions" source) and the workflow will take care of future deploys.
