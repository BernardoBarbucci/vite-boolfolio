import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import vitePluginSass from 'vite-plugin-sass'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vitePluginSass()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
