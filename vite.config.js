import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // 💡 THIS IS THE CRITICAL FIX for GitHub Pages 💡
  base: "/My-Portfolio-/",
  plugins: [react()],
  // (Your existing CSS/PostCSS configuration can remain)
});
