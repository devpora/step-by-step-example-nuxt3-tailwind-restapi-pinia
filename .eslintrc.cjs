module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': 'error',
  },
}
