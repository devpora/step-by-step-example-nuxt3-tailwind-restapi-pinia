// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
  ],
  plugins: [{ src: '~/plugins/fontawesome.js', mode: 'client' }],
  layout: 'default',
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  middleware: ['isUser', 'isAdmin', 'isGuest'],
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
      BASE_BE_URL: process.env.BASE_BE_URL || 'http://localhost:8000',
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || 'xxx',
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID || 'xxx',
      GITLAB_CLIENT_ID: process.env.GITLAB_CLIENT_ID || 'xxx',
      GITLAB_CHALLENGE: process.env.GITLAB_CHALLENGE || 'xxx',
    },
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', name: 'English' },
      { code: 'sk', iso: 'sk-SK', file: 'sk.js', name: 'Slovak' },
    ],
    lazy: true,
    langDir: 'locales',
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
    },
  },
})
