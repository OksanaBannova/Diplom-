import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Diplom-/', // Должно совпадать с basename в React Router
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  
  server: {
    port: 3000
  }
})


