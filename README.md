# Mohamed Elesawy Portfolio

A modern React + Vite portfolio site built to showcase my software development work, projects, experience, and contact information.

## Live demo

https://el3sawy27.github.io/my-portfolio/

## Tech stack

- React
- Vite
- JavaScript
- CSS
- Lucide React icons
- GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173/
```

## Production build

```bash
npm run build
```

## Deploy to GitHub Pages

This project is already configured for GitHub Pages using a GitHub Actions workflow.

### Required setup

1. Make sure the repository name matches the Pages URL.
2. Push changes to the `main` branch.
3. In GitHub, open:
   - Settings
   - Pages
   - Source: GitHub Actions
4. Allow the workflow to build and deploy the site.

### Deployment URL

```bash
https://el3sawy27.github.io/my-portfolio/
```

## Project structure

```bash
src/
  components/
  data/
  App.jsx
  main.jsx
  styles.css
.github/workflows/deploy.yml
index.html
package.json
vite.config.js
```

## Notes

- The app uses `vite.config.js` with the `base` path set for the repository name.
- The deployment workflow triggers automatically on pushes to `main`.
- The site is intended to be a clean, professional portfolio for software engineering roles.
