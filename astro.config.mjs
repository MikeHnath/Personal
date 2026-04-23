import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mikehnath.github.io',
  base: '/Personal',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
