import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true
    })
  ],
  
  build: {
    minify: 'terser',
    target: 'es2015',
    
    // Оптимизация для ваших компонентов
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['react-router-dom'], // Учитывая что у вас есть роутинг
          charts: ['recharts'] // Если используете графики
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
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
  },


  // ... остальная конфигурация
  base: '/Diplom/', // Имя вашего репозитория
})
