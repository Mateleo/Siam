import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Matéo-Siam Dominguez",
  description:
    "Hey, I'm Matéo-Siam Dominguez, student in Data Science. I'm a web dev fanatic. I'm an avid user of the Vue ecosystem.",
  lastUpdated: true,
  appearance: false,
  themeConfig: {
    siteTitle: "Matéo-Siam ✨",
    nav: [{ text: "Projects", link: "/projects/" }],
    socialLinks: [
      { icon: "github", link: "https://github.com/Mateleo" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/mat%C3%A9o-siam/" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Matéo-Siam Dominguez",
    },
    lastUpdatedText: "Updated Date",
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%22-.1em%22 y=%22.9em%22 font-size=%2280%22>🌊</text></svg>",
      },
    ],
    ["meta", { name: "title", content: "Matéo-Siam Dominguez" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://mateo-siam.com/" }],
    ["meta", { property: "og:image", content: "" }],
    ["meta", { property: "og:description", content: "Hey, I'm Matéo-Siam Dominguez, student in Data Science. I'm a web dev fanatic. I'm an avid user of the Vue ecosystem." }],
  ],
});
