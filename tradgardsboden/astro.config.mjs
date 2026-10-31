// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tradgardsboden.se',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Sidor under uppbyggnad har noindex och ska inte ligga i sitemapen.
      filter: (page) => !page.includes('/admin/'),
    }),
  ],
});
