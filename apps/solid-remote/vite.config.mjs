/// <reference types="vitest" />
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { federation } from '@module-federation/vite';
// import devtools from 'solid-devtools/vite';

import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/apps/solid-host',

  server: {
    port: 4001,
  },

  build: {
    target: 'esnext',
  },

  plugins: [
    viteTsConfigPaths({
      root: '../../',
    }),
    solidPlugin(),
    federation({
      name: 'solid-host',
      filename: 'remoteEntry.js',
      exposes: {
        './SolidRemote': './src/app.tsx',
      },
      runtime: 'vite',
      format: 'esm',
    }),
  ],

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest/apps/solid-host',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
