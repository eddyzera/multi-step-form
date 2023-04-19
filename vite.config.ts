/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sassDts from 'vite-plugin-sass-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [sassDts(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html']
    },
    css: true,
  }
})
