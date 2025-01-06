// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      siteUrl: '', // Default empty, will be overwritten by NUXT_PUBLIC_SITE_URL
      siteImageUrl: '', // Default empty, will be overwritten by NUXT_PUBLIC_SITE_IMAGE_URL
      siteName: '',
      siteDescription: '',
      contactEmail: 'xx',
      contactPhone: '',
      contactPhoneDisplay: '',
      contactAddress: ''
    }
  },
  modules: [



    "@nuxtjs/tailwindcss",
    "nuxt-icon"
  ],

  css: [
    'flatpickr/dist/flatpickr.css',
    'flatpickr/dist/themes/light.css', // or any other theme you prefer
  ],
  plugins: [
    '~/plugins/flatpickr.client.js'
  ],

})
