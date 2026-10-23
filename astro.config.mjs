import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ownpremise.com',
  integrations: [
    sitemap({
      // The 404 page is noindex and must not appear in the sitemap.
      filter: (page) => !/\/404\/?$/.test(page),
    }),
  ],
});
