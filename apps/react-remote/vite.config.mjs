/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { federation } from '@module-federation/vite';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/react-remote',
  server: {
    port: 4003,
    host: 'localhost',
  },
  preview: {
    port: 4003,
    host: 'localhost',
  },
  plugins: [
    federation({
      manifest: true,
      name: 'react-remote',
      filename: 'remoteEntry.js',
      exposes: {
        './ReactRemote': './src/app.tsx',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react/': {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
      },
      runtime: 'vite',
    }),
    react(),
  ],
  build: {
    target: 'esnext', // ✅ allow top-level await
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
