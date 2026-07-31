// @ts-check
import { defineConfig } from 'astro/config';

// 靜態輸出（預設），Build 後的 dist/ 可直接部署到 Cloudflare Pages
export default defineConfig({
  site: 'https://www.o3carspa0363.com',
  output: 'static',
  build: {
    format: 'directory',
  },
});
