// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 靜態輸出（預設），Build 後的 dist/ 可直接部署到 Cloudflare Pages
export default defineConfig({
  site: 'https://o3car.com',
  integrations: [sitemap()],
  output: 'static',
  build: {
    format: 'directory',
  },
});
