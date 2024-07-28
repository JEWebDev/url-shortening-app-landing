import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://jewebdev.github.io",
  base: "url-shortening-app-landing",
  integrations: [tailwind()],
});
