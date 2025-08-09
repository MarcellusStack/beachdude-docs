// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "BeachDude",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/styles/global.css",
      ],
      social: [],
      logo: {
        light: "./src/assets/logo.png",
        dark: "./src/assets/logo.png",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "docs/guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "docs/reference" },
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
