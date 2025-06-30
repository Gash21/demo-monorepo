/// <reference types="vitest" />
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import { federation } from '@module-federation/vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/apps/my-solid-app',

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
    devtools(),
    solidPlugin(),
    federation({
      name: 'solidRemote',
      filename: 'remoteEntry.js',
      exposes: {
        './SolidRemote': './src/App.tsx'
      },
      runtime: 'vite', // makes it use native module format
      format: 'esm'    // emit ESM (not UMD or var)
    })
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
