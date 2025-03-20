import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://acupunturaurbana.com.br',
  output: 'static',
  compressHTML: true
});