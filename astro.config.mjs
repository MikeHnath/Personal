import { defineConfig } from 'astro/config';

export default defineConfig({
site: 'https://www.mikehnath.com',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
