import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Important: Use relative base path for static hosting (like Tencent Cloud COS)
  base: './', 
})