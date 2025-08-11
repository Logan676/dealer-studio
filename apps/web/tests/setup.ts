import '@testing-library/jest-dom';
import { vi, beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mocks/server';

// Vitest's node runtime lacks `window.matchMedia`, which some components
// rely on. Define a minimal stub so tests can execute without throwing.

// Ensure a global `window` object exists when running in a pure Node
// environment.
// @ts-expect-error: define `window` for Node runtime
if (typeof window === 'undefined') global.window = {} as Window;

if (!window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
