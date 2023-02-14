import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  srcDir: 'src',
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      title: 'Bookie',
      titleTemplate: title => (title !== 'Bookie' ? `${title} · Bookie` : title),
      meta: [{ name: 'description', content: 'Bookie is a task manager.' }],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/task.png'
        }
      ]
    },
    pageTransition: {
      name: 'bounce',
      mode: 'out-in' // default
    }
  },
  modules: [
    // '@nuxtjs/i18n',
    '@nuxt/image-edge',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/device',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    'nuxt-icons'
  ],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false
  },
  alias: {
    images: fileURLToPath(new URL('./assets/images', import.meta.url)),
    fonts: fileURLToPath(new URL('./assets/fonts', import.meta.url)),
    style: fileURLToPath(new URL('./assets/style', import.meta.url)),
    data: fileURLToPath(new URL('./assets/other/data', import.meta.url))
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    globalName: '__COLOR_THEME__',
    classSuffix: '',
    storageKey: '__COLOR_THEME__'
  },
  nuxtIcons: {
    size: '24px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
    aliases: {
      nuxt: 'logos:nuxt-icon'
    }
  },
  image: {
    provider: 'proxy'
  },
  headlessui: {},
  postcss: {
    plugins: {
      'postcss-import': {},
      'postcss-focus-visible': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
