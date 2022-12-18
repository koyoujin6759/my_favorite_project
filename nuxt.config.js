export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my_favorite_project',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/scss/_index.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  buildModules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: ["@/assets/scss/_variables.scss"],
  },


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBO9nuKNMACJywhlf98ro-N-0VkMxxPKqw",
          authDomain: "my-favorite-project-a9c00.firebaseapp.com",
          projectId: "my-favorite-project-a9c00",
          storageBucket: "my-favorite-project-a9c00.appspot.com",
          messagingSenderId: "110466443471",
          appId: "1:110466443471:web:7d9c9d5c554ebe391aafba",
          measurementId: "G-B9JYE9HR4J"
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          firestore: true,
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
