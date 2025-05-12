import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://example.com', // Replace with your actual domain
  output: "static", // or "hybrid" / "server" if admin panel needs SSR
  // adapter: node({ // Uncomment if using SSR/hybrid mode for admin panel
  //   mode: "standalone"
  // }),
  vite: {
    ssr: {
      noExternal: ['@radix-ui/react-toast', '@radix-ui/react-slot'] // Add other problematic packages if needed
    }
  }
});