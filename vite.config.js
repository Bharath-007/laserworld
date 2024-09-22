import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mylaserworld", // Add this line to ensure the correct base path for assets
  build: {
    outDir: "dist", // Ensure that this matches your output folder
  },
});
