// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
    layout: 'default',
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    i18n: {
        locales: [
            { code: 'en', iso: 'en-US', file: 'en.js', name: 'English' },
            { code: 'sk', iso: 'sk-SK', file: 'sk.js', name: 'Slovak' },
        ],
        lazy: true,
        langDir: `locales`,
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        vueI18n: {
            fallbackLocale: 'en',
        },
        customRoutes: 'config',
        pages: {
            'auth/login': {
                en: '/auth/login',
                sk: '/auth/prihlasenie',
            },
            'auth/register': {
                en: '/auth/register',
                sk: '/auth/registracia',
            },
        }
    },
})