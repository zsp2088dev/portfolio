export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Zu’s Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '静岡大学 大学院 総合科学技術研究科 情報学専攻修士1年。' +
          '大学院卒業後はWeb系企業に就職したいと考えており、' +
          'ソフトウェア技術について幅広く学んでいる最中です。'
      }
    ],
    link: [
      {
        rel: 'icon',
        sizes: '48x48',
        type: 'image/png',
        href: '/favicon.png'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  styleResources: {
    scss: ['~/assets/scss/variables.scss']
  }
}
