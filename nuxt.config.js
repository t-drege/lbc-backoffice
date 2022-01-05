export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lbc-backoffice',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/lbc-icon.ico'}
    ],
    script: [
      {src : "https://www.paypal.com/sdk/js?client-id=AXc9bFu6DT80zQE-tuwjPS9U93F81ut0lZQIgNyhxcy52qSynu-ZT1bnTslnllYolzuMHIsVeN7qh5cq&vault=true"},
      {src: "https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome',
    '@nuxtjs/google-fonts',
    '@nuxtjs/router-extras'
  ],
  fontawesome: {
    icons: {
      solid: true,
    }
  },
  googleFonts: {
    families: {
      // a simple name
      Corinthia: true,
      Roboto: true,
      Lobster: true,

      // a name with spaces
      'Josefin+Sans': true,

      // specific font weights
      Lato: [100, 300],
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  bootstrapVue: {
    icons: true,
    tooltip: true
  },

  router: {
    middleware: []
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
  ]
}
