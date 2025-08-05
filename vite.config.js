import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom', // Important pour simuler le DOM
    globals: true,        // Pour ne pas avoir besoin d'importer describe/test/expect
  },
})
