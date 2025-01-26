import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://podzol.morrone.dev',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load',
  },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
