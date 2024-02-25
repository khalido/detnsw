import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'detnsw.fyi',
    social: {
      github: 'https://github.com/withastro/starlight'
    }
  })],
  output: "server",
  adapter: vercel()
});