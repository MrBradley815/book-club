// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: process.env.FIREBASE_API_KEY,
    public: {
      apiBase: process.env.FIREBASE_API_KEY
    }
  },
  css: [
    '@/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  components: [
    '~/components',
    '~/components/icons'
  ]
})
