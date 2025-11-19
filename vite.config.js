import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer() // Опционально для анализа бандла
  ],
  
  base: '/Diplom-/', // Убедитесь, что это имя вашего репозитория
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    target: 'es2015',
    
    // Оптимизация для ваших компонентов
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['react-router-dom'],
          charts: ['recharts'] // Если используете графики
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    
    chunkSizeWarningLimit: 800
  },
  
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },
  
  server: {
    port: 3000,
    open: true
  }
})

