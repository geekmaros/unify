import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: "VueSplide",
      entry: "./src/main.js",
      formats: ["es", "cjs"],
      fileName: (format) => {
        let suffix = format;

        if (format === "es") {
          suffix = "esm";
        }

        return `js/vue-splide.${suffix}.js`;
      },
    },
    emptyOutDir: false,
    watch: {
      include: "src/**",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        exports: "named",
      },
    },
    minify: false,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
