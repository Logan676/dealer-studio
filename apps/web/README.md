# Dealer Studio

Dealer Studio is a modern React and TypeScript application scaffolded with Vite. It provides a fast development environment, utility-first styling through Tailwind CSS, and a complete testing setup with Testing Library and Vitest.

## Tech Stack
- React
- TypeScript
- Vite
- Tailwind CSS
- Testing Library
- Vitest
- @tanstack/react-query
- @tanstack/react-query-devtools
- msw

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   By default the app is available at http://localhost:5173.
3. Lint the project:
   ```bash
   npm run lint
   ```
4. Serve the production build:
   ```bash
   npm run preview
   ```

## How to Test
Tests use MSW to mock network requests. Available commands:
- `npm test` – run the test suite once
- `npm run test:watch` – run tests in watch mode
- `npm run vitest:ui` – launch the Vitest UI

## How to Deploy
Build the production bundle:
```bash
npm run build
```
Host the contents of the `dist/` directory on any static file server.

