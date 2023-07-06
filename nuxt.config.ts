export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page' },
    layoutTransition: { name: 'layout' }
  },
  runtimeConfig: {
    public: {
      baseApiUrl: process.env.API_BASE_URL,
      nodeEnv: process.env.NODE_ENV
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
             @import "@/assets/styles/global/colors.scss";
             @import "@/assets/styles/global/vars.scss";
             @import "@/assets/styles/global/mixins.scss";
           `
        }
      }
    }
  },
  css: [{ src: '~/assets/styles/index.scss', lang: 'scss' }],
  modules: [
    '@nuxtjs/stylelint-module',
    '@nuxtjs/eslint-module',
    ['@pinia/nuxt', { disableVuex: false }],
    'nuxt-icons',
    [
      'nuxt-lazy-load',
      {
        loadingClass: 'isImageLoading',
        directiveOnly: true
      }
    ]
  ]
})
