/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,                 // enables global `test`, `expect`, etc.
    setupFiles: ['./src/tests/setup.ts'],
    coverage: { provider: 'c8', reporter: ['text', 'html'] },
  },
});
