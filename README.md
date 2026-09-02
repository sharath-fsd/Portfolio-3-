# Sarath K Portfolio

A responsive portfolio built with React and Vite. The page includes a scroll-driven canvas
sequence, reveal-on-scroll transitions, a typewriter signature, project cards, credentials,
skills, and contact information.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deploy to GitHub Pages

In this repository's **Settings → Pages**, select **GitHub Actions** as the publishing
source. The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the
portfolio whenever changes are pushed to `main`. It can also be run manually from
the repository's **Actions** tab.

The expected project URL is `https://sharath-fsd.github.io/Portfolio-3-/`.
The `build:github` command sets the repository base path, including image, animation,
stylesheet, and résumé URLs. To check this version locally:

```bash
npm run build:github
npm run preview -- --base=/Portfolio-3-/
```

Open the preview URL with `/Portfolio-3-/` appended. The regular `npm run build`
command still builds for a domain's root path.

GitHub Pages requires an eligible GitHub plan for private repositories; on GitHub
Free, the repository must be public. See the
[GitHub Pages setup guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Optional: deploy to Netlify

Import this GitHub repository into Netlify and select the `main` branch.
The checked-in `netlify.toml` configures Node.js 22, the `npm run build` command,
and the `dist` publish directory. Leave the base directory at the repository root.
No environment variables are required for this static portfolio.

After the first deployment, pushes to `main` trigger a new production deployment
when continuous deployment is enabled for the linked repository.

See the [Netlify Vite setup guide](https://docs.netlify.com/build/frameworks/framework-setup-guides/vite/).

## Project structure

- `src/components/` — portfolio sections and reusable UI components
- `src/hooks/` — reveal, typewriter, and canvas animation behavior
- `src/data/portfolio.js` — reusable portfolio content
- `src/styles.css` — global responsive styling
- `public/` — images, animation frames, and résumé PDF
