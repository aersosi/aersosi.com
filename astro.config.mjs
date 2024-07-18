import {defineConfig} from 'astro/config';


// https://astro.build/config
export default defineConfig(defineConfig(await import("astro/config")).defineConfig({
    srcDir: "./src",
    publicDir: "./assets",
    outDir: "./dist",
    // TODO: Place your site URL here
    // site: "",
    compressHTML: false,
    integrations: [
        // @ts-ignore
        import.meta.env.MODE === "production" ? (await import("astrojs-service-worker")).default() : null,
        (await import("@astrojs/sitemap")).default(),
        (await import("@astrojs/tailwind")).default(),
        (await import("@astrojs/prefetch")).default(),
        (await import("@playform/inline")).default({
            Logger: 1
        }), (await import("@playform/format")).default({
            Logger: 1
        }), (await import("@playform/compress")).default({
            Logger: 1
        })],
    experimental: {
        directRenderScript: true
    },
    vite: {
        build: {
            sourcemap: true
        }
    }
}));