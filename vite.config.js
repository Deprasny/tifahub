import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tifahub/',
  build: {
    outDir: 'build',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
})
