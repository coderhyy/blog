export default defineAppConfig({
  alpine: {
    title: "Alpine",
    description: "The minimalist blog theme",
    image: {
      src: "/social-card-preview.png",
      alt: "An image showcasing my project.",
      width: 400,
      height: 300,
    },
    header: {
      position: "right", // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: "/logo.svg", // path of the logo
        pathDark: "/logo-dark.svg", // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: "alpine", // alt of the logo
      },
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: "https://www.github.com/nuxt-themes/alpine", // our github repository
      },
      navigation: false, // possible value are : true | false
      alignment: "left", // possible value are : 'none' | 'left' | 'center' | 'right'
      message: "Find me on", // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      github: "coderhyy",
      JueJin:{
        icon:'simple-icons:juejin',
        label:'掘金',
        href: 'https://juejin.cn/user/439456594660231',
        rel: 'me'
      }
    },
    form: {
      successMessage: "Message sent. Thank you!",
    },
  },
});
