import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Trial--3/',  // ✅ This tells Vite to use the correct base path for GitHub Pages
});
