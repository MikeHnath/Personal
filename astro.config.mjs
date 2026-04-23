import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://michaelhnath.com',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
