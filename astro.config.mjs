// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: isProd ? 'https://salvadorvasqz.github.io' : undefined,
  base: isProd ? '/api-fetch-hooks/' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});