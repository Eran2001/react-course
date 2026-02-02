import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// vite.config.js
export default defineConfig({
  plugins: [tailwindcss(), react()],
});
