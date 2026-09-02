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

## Project structure

- `src/components/` — portfolio sections and reusable UI components
- `src/hooks/` — reveal, typewriter, and canvas animation behavior
- `src/data/portfolio.js` — reusable portfolio content
- `src/styles.css` — global responsive styling
- `public/` — images, animation frames, and résumé PDF
