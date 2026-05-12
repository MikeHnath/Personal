import { defineConfig } from 'astro/config';

export default defineConfig({
site: 'https://mikehnath.com',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
