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

## Deploy to Netlify

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
