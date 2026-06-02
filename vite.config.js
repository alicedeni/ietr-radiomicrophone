import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoBase = process.env.VITE_BASE_PATH || "/ietr-radiomicrophone/";

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? repoBase : "/",
  build: {
    outDir: "dist",
  },
});
