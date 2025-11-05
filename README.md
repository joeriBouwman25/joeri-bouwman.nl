# joeri-bouwman.nl

Personal portfolio website for Joeri Bouwman. Built with React + TypeScript and deployed to GitHub Pages.

## Tech Stack
- React 18
- TypeScript
- Create React App (react-scripts)
- PNPM for package management
- gh-pages for deployment

## Quick Start
Install deps (uses pnpm, but npm/yarn also work):

```bash
pnpm install
pnpm start
```
Open http://localhost:3000

## Scripts
- `pnpm start` – dev server with hot reload
- `pnpm build` – production build (outputs to `build/`)
- `pnpm test` – run test watcher
- `pnpm deploy` – build & publish to GitHub Pages (runs `predeploy` automatically)

If you need to customize tooling you can eject with `pnpm eject` (irreversible).

## Deployment
Configured to publish the `build/` folder to GitHub Pages at:
`https://joeribouwman25.github.io/joeri-bouwman.nl`

## Project Structure (high level)
```
src/
  components/  // Feature sections (hero, about, skills, projects, experiences, contact, footer)
  assets/      // Images & fonts
```

## License
MIT © 2025 Joeri Bouwman

