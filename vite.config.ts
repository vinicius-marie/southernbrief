import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // base para GitHub Pages (ajusta caminhos estáticos)
  base: "/southernbrief/",
  plugins: [react()],
  build: {
    target: "esnext",
    outDir: "dist",
    emptyOutDir: true,
  },
});