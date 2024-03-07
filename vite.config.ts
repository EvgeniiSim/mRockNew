import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteWebp from "vite-plugin-webp-generator";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      react(),
      // ViteWebp({
      //    extensions: ["png", "jpg"],
      // }),
   ],
});
