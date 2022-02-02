import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Auto launch browser: https://vitejs.dev/config/#server-open
  server: { open: '/' },
});
