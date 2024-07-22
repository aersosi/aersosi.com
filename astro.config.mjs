import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';
import inlinePlayform from '@playform/inline';
import formatPlayform from '@playform/format';
import compressPlayform from '@playform/compress';

// https://astro.build/config
export default defineConfig({
    srcDir: "./src",
    outDir: "./dist",
    site: "https://aersosi.com",
    compressHTML: false,
    integrations: [
        // @ts-ignore
        import.meta.env.MODE === "production" ? (await import("astrojs-service-worker")).default() : null,
        sitemap(),
        tailwind(),
        prefetch(),
        inlinePlayform({ Logger: 1 }),
        formatPlayform({ Logger: 1 }),
        compressPlayform({ Logger: 1 }),
    ],
    experimental: {
        directRenderScript: true
    },
    vite: {
        build: {
            sourcemap: true
        }
    }
});