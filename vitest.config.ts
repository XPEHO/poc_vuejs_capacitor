import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()], // On travaille avec vue
    test: {
        environment: 'jsdom', // Important pour simuler le DOM
        globals: true,        // Pour ne pas avoir besoin d'importer describe/test/expect
    },
})
