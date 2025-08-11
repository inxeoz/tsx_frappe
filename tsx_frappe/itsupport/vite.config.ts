import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    "process.env": {}, // avoid "process is not defined"
  },
  build: {
    outDir: "../public/static_ui",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: `main.js`, // fixed name for JS bundle, no hashing
        assetFileNames: `main.css`, // fixed name for CSS, no hashing
      },
    },
  },
});
