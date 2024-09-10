// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@vueuse/nuxt',
  ],
  fonts: {
    local: {
      id: ['simplifica']
    },
  },
  colorMode: {
    // preference: 'system', // default theme
    // dataValue: 'theme', // activate data-theme in <html> tag
    // classSuffix: '',
    preference: 'cupcake', // default value of $colorMode.preference
    dataValue: 'theme',
  },
  tailwindcss: {
    exposeConfig: true 
  },
})