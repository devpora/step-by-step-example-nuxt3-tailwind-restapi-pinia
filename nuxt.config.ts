// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@pinia/nuxt'
    ],
    layout: 'default',
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    middleware: [
        'isUser',
        'isAdmin',
        'isGuest'
    ],
    runtimeConfig: {
        public: {
            BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
            BASE_BE_URL: process.env.BASE_BE_URL || 'http://localhost:8000'
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
