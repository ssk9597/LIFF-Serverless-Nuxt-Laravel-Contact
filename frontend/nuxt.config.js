require('dotenv').config();
const { API_URL, LIFF_ID } = process.env;

export default {
  target: 'static',
  head: {
    title: 'LIFFで作ったお問い合わせフォーム',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    script: [{ src: 'https://static.line-scdn.net/liff/edge/2/sdk.js' }],
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
    LIFF_ID,
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
