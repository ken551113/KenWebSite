
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "Ken Lee",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "I'm Ken Lee"
      },
      {
        hid: "description",
        name: "description",
        content:
          "I'm Ken Lee"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Ken Lee"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: `https://kenlee.com.tw/`
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://kenlee.com.tw/avatar.jpg"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href:"https://fonts.googleapis.com/css?family=Noto+Serif+TC:400,500,600,700,900"},
      { rel: "stylesheet", href:"https://fonts.googleapis.com/css?family=Comfortaa:700"},
      { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",integrity:"sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS",crossorigin:"anonymous"}
    ],
    script: [
      {src:"https://kit.fontawesome.com/49aa3cf392.js" ,crossorigin:"anonymous"},
      {src:"https://code.jquery.com/jquery-3.2.1.slim.min.js" ,integrity:"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",crossorigin:"anonymous"},
      {src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",integrity:"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",crossorigin:"anonymous"},
      {src:"https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js",integrity:"sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k",crossorigin:"anonymous"}
   ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-typed', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  loading: {
    color: 'rgba(0,0,0,0.5)',
    height: '4px'
  }
}
