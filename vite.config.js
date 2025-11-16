import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  // 💡 THIS IS THE CRITICAL FIX for GitHub Pages 💡
  base: "/My-Portfolio-/",
  plugins: [react(), tailwindcss()],
  // (Your existing CSS/PostCSS configuration can remain)
});
