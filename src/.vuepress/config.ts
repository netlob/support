import { defineUserConfig } from "vuepress-vite";
import type { DefaultThemeOptions, ViteBundlerOptions } from "vuepress-vite";

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  lang: "en-US",
  title: "Spotistats Support",
  description: "Work in progress",
  bundler: "@vuepress/vite",
  themeConfig: {
    logo: "/assets/icon.png",
    sidebar: [
      { link: "/permissions", text: "Permissions", children: [] },
      { link: "/faq", text: "FAQ", children: [] },
      {
        link: "/import",
        text: "Import",
        children: [
          {
            link: "/import/guide",
            text: "Guide",
            children: [
              { link: "/import/guide/beta", text: "Beta", children: [] },
            ],
          },
        ],
      },
    ],
  },
});
