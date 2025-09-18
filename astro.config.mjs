// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  //Production
  site: "https://salvadorvasqz.github.io",
  base: "/api-fetch-hooks/",
  //local
  // site: undefined,
  // base: "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
