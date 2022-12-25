import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api': 'http://localhost:8080' // requests that start with /api forward to localhost:8080
    }
  },
  plugins: [react()]
})
