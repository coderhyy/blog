export default defineNuxtConfig({
  extends: ["@nuxt-themes/alpine"],

  nitro: {
    preset: "netlify",
  },

  devtools: {
    timeline: {
      enabled: true,
    },
  },
});
