import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// IMPORTANT: change `site` to your real domain before going live —
// it is used for the sitemap, canonical URLs and Open Graph tags.
export default defineConfig({
  site: 'https://www.venusholidays.co.in',
  integrations: [sitemap()],

  build: {
    inlineStylesheets: 'auto',
  },

  // Prefetch page HTML for links as they enter the viewport — navigation feels
  // instant. Only the small HTML is prefetched, never images/videos.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  adapter: cloudflare()
});