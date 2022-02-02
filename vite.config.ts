import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [vue()],

  // Auto launch browser: https://vitejs.dev/config/#server-open
  //   server: { open: '/' },
  // instead, currently using VSCode Extension: Vite, by Anthony Fu

  root: 'src',
  publicDir: 'assets/public',
  build: {
    outDir: '../wwwroot',
    emptyOutDir: true, // confirm because outDir jumps up from root
  },
});
