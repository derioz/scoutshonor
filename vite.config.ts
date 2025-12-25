import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setting base to './' ensures assets are linked relatively.
  base: './', 
  build: {
    outDir: 'docs', // Output to 'docs' folder for GitHub Pages
    emptyOutDir: true, // Clear the folder before building
  }
})