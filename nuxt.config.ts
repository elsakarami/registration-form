export default defineNuxtConfig({
  components:true,
  imports: {
    autoImport: true
  },

  devtools: { enabled: false },
  ssr: false,
  pages:true,
  modules: [ '@nuxtjs/i18n', '@nuxtjs/color-mode', '@nuxt/ui', '@nuxtjs/tailwindcss'],


  i18n: {
    vueI18n: './i18n.config.ts',
  },

  css: [
    '~/assets/scss/_general.scss',
    '~/assets/scss/_typography.scss',
  ],

  tailwindcss: {
    cssPath: '../assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: { level: 1 },
    viewer: true,
  },

  vite: {
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: '~/tests/setup.ts', 
      coverage: {
        reporter: ['text', 'json', 'html']
      }
    }
  },

  plugins:['~/plugins/axios.ts'],

  app: {
    head: {
      title: "Services | acb.studio ",
      htmlAttrs: { lang: 'de'  },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index' },
        { name: 'theme-color', content: '#fff' },
        { name: 'google-site-verification', content: 'SBZXN_5kktUlEr6d38v35ChNgLERx_27zxh1D9c6UJ4' },
        { name: 'description', content: 'Nachhaltige Digitale Produkte ✓ analyse, create and build ✓ Digital Product Design ✓ Hier mehr erfahren ➥' },
        { name: 'keywords', content: 'Nachhaltige digitale Produkte' },
        { name: 'author', content: '' },
        { property: 'og:title', content: 'Welcome / acb.studio' },
        { property: 'og:site_name', content: 'acb.studio' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://acb.studio/media/site/0d8bb1a5a4-1688548650/acb-og-img-16x9.png' },
        { property: 'og:image:secure_url', content: 'https://acb.studio/media/site/0d8bb1a5a4-1688548650/acb-og-img-16x9.png' },
        { property: 'og:description', content: 'Nachhaltige Digitale Produkte ✓ analyse, create and build ✓ Digital Product Design ✓ Hier mehr erfahren ➥' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Welcome' },
        { name: 'twitter:description', content: 'Nachhaltige Digitale Produkte ✓ analyse, create and build ✓ Digital Product Design ✓ Hier mehr erfahren ➥' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      script: []
    },
  },

  compatibilityDate: '2024-12-09',
});