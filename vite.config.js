import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Diplom/',
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    target: 'es2015',
    
    // Для лучшей совместимости с CSP
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['react-router-dom'],
          charts: ['recharts']
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    }
  },
  
  // Отключить встроенный dev server CSP для разработки
  server: {
    port: 3000,
    open: true,
    headers: {
      'Content-Security-Policy': "default-src 'self' 'unsafe-inline' 'unsafe-eval' https:;"
    }
  }
})

