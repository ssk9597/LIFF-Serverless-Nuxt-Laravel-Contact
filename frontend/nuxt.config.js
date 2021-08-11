require('dotenv').config();
const { API_URL } = process.env;

export default {
  head: {
    target: 'static',
    title: 'LIFFで作ったお問い合わせフォーム',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [],

  watchers: {
    webpack: {
      poll: true,
    },
  },

  modules: ['@nuxtjs/axios', '@nuxtjs/proxy', '@nuxtjs/dotenv'],

  env: {
    API_URL,
  },

  proxy: {
    '/api': process.env.API_URL,
  },

  axios: {
    baseURL: process.env.API_URL,
    browserBaseURL: process.env.API_URL,
  },

  build: {},
};
