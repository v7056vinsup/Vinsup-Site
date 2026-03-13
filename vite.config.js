import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/proxy': {
        target: 'https://script.google.com',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api/proxy', '/macros/s/AKfycbyDSKPUpL-31X6J_NfpBEPmyK0vSW9pIoPEAKvB_uB78-_oGmEolvQjZkMuoGdZkCdn/exec')
      }
    }
  }
})