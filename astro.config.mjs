// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import clerk from "@clerk/astro";
import { deDE } from "@clerk/localizations";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.beachdude.de",
  integrations: [clerk({
    localization: deDE,
    appearance: {
      elements: {
        button: {
          backgroundColor: "#002d55",
          color: "#fff",
        },
      },
    },
  }), starlight({
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
  }), sitemap(), react()],

  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare({ imageService: "compile" }),
  output: "server",
});