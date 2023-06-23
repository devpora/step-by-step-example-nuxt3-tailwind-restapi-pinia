// https://v3.nuxtjs.org/api/configuration/nuxt.config
const DAY = 60 * 60 * 24 * 1000
const WEEK = DAY * 7
const MONTH = WEEK * 30

export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
  ],
  plugins: [
    { src: '~/plugins/fontawesome.js', mode: 'client' },
    { src: '~/plugins/toastification.js', mode: 'client' },
  ],
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
  serverMiddleware: [
    '~/middleware/is-admin.ts',
    '~/middleware/is-user.ts',
    '~/middleware/is-guest.ts',
  ],
  privateRuntimeConfig: {
    aha: process.env.COOKIE_SECRET,
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
      BASE_BE_URL: process.env.BASE_BE_URL || 'http://localhost:8000',
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || 'xxx',
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID || 'xxx',
      GITLAB_CLIENT_ID: process.env.GITLAB_CLIENT_ID || 'xxx',
      GITLAB_CHALLENGE: process.env.GITLAB_CHALLENGE || 'xxx',
    },
    private: {
      cookieName: process.env.COOKIE_NAME || '__session',
      cookieSecret: process.env.COOKIE_SECRET || 'd3-Fau1t+8e*3t',
      cookieExpires: parseInt(
        process.env.COOKIE_REMEMBER_ME_EXPIRES || WEEK.toString(),
        10,
      ),
      cookieRememberMeExpires: parseInt(
        process.env.COOKIE_REMEMBER_ME_EXPIRES || MONTH.toString(),
        10,
      ),
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
