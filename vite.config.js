import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Set base path to the root since you're not using a subdirectory
  build: {
    outDir: "dist", // Ensure that this matches your output folder
  },
});
