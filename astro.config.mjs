import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';
import inlinePlayform from '@playform/inline';
import formatPlayform from '@playform/format';
import compressPlayform from '@playform/compress';

// https://astro.build/config
export default defineConfig({
    site: "https://aersosi.com",
    integrations: [
        sitemap(),
        tailwind(),
        prefetch(),
        inlinePlayform({
            Logger: 1
        }), formatPlayform({
            Logger: 1
        }), compressPlayform({
            Logger: 1
        })]
});