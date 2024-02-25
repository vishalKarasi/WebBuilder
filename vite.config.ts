import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

export default defineConfig({
  plugins: [react()],
  base:'/home',
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@app": path.resolve(__dirname, "src/app"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@mock": path.resolve(__dirname, "src/mock"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
    },
  },
})
