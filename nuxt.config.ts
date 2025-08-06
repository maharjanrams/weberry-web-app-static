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
    ssr: true
})