/// <reference types="vitest" />
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { federation } from '@module-federation/vite';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/apps/my-solid-app',

  server: {
    port: 4000,
  },

  build: {
    target: 'esnext',
  },

  plugins: [
    viteTsConfigPaths({
      root: '../../',
    }),
    devtools(),
    solidPlugin(),
    federation({
      name: 'hostSolid',
      remotes: {
        'solid-remote': { 
          entry: 'http://localhost:4001/remoteEntry.js',
          type: "esm"
        },
        // 'react-remote': 'http://localhost:4201/assets/remoteEntry.js',
      },
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest/apps/my-solid-app',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
