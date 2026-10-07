import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: './',
  // il plugin di ispezione resta solo in sviluppo, mai nella build di produzione
  plugins: [...(command === 'serve' ? [inspectAttr()] : []), react()],
  server: {
    port: 3000,
  },
  build: {
    sourcemap: false,
    minify: 'esbuild',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
