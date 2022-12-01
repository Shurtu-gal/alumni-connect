import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
  template: {
    transformAssetUrls: {
      includeAbsolute: false,
    },
  },
  base: "/vite-deploy-demo/",
});
