/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { federation } from '@module-federation/vite';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/react-remote-2',
  server: {
    port: 4002,
    host: 'localhost',
  },
  preview: {
    port: 4002,
    host: 'localhost',
  },
  plugins: [
    react(),
    federation({
      manifest: true,
      name: 'react-remote-2',
      filename: 'remoteEntry.js',
      exposes: {
        './ReactRemote2': './src/app.tsx',
      },
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: './dist',
    target: 'esnext',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
