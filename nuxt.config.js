export default {
  //target: 'static',

  head: {
    title: "Cifra",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Cifra" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [],
    css: [],
  },

  css: [],

  script: [],

  components: true,

  buildModules: ["@nuxtjs/moment"],

  modules: ["@nuxtjs/toast", "@nuxtjs/vuetify", "@nuxtjs/universal-storage"],

  toast: {
    position: "top-right",
    duration: 5000,
    closeOnClick: false,
  },

  server: {
    port: 3000,
  },
};
