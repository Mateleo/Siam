import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "en-US",
  title: "Matéo-Siam Dominguez",
  description: "My portfolio.",
  lastUpdated: true,
  appearance: false,
  themeConfig: {
    siteTitle: "Matéo-Siam ✨",
    nav: [
      { text: "Projects", link: "/projects/" },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Matéo-Siam Dominguez",
    },
    lastUpdatedText: "Updated Date",
  },
  head : [
    ['link',{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%22-.1em%22 y=%22.9em%22 font-size=%2280%22>🌊</text></svg>"}]

  ]

  
});
