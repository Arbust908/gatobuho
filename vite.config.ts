import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import Components from 'unplugin-vue-components/vite';
// import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 6969,
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
