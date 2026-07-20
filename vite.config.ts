import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    // @tailwindcss/vite processes CSS directly. An inline (empty) postcss
    // config bypasses Vite's upward filesystem search, which would otherwise
    // pick up unrelated postcss.config.js files from parent directories.
    postcss: {},
  },
  plugins: [
    viteTsConfigPaths(),
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
  ],
});
