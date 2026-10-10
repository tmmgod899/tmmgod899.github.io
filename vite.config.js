import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep bundled files out of /assets so it stays reserved for your own files
    // (profile photo, CV) placed in public/assets.
    assetsDir: 'static',
  },
});
