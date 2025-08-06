// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    
    devServer: {
        port: 5000, // Change this to your desired port
        host: 'localhost', // Or '0.0.0.0' to allow external access
    },

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxt/scripts',
        '@nuxt/test-utils'
    ],
    ssr: true,
    nitro: {
    preset: 'cloudflare_pages', // This preset is optimized for Cloudflare Pages
    prerender: {
      // If you have dynamic routes that you want to pre-render, list them here.
      // Otherwise, Nuxt will pre-render all static routes by default when running `nuxi generate`.
      // routes: ['/my-static-page', '/blog/post-1'],
      autoSubfolderIndex: false, // Recommended for Cloudflare Pages route matching
    },
  },
})