export const themeData = JSON.parse("{\"lastUpdated\":true,\"lastUpdatedText\":\"更新时间\",\"navbar\":[{\"text\":\"react\",\"link\":\"../react/react.md\"},{\"text\":\"webpack\",\"link\":\"../webpack/webpack总结.md\"},{\"text\":\"CSDN博客\",\"link\":\"https://i.csdn.net/#/user-center/profile?spm=1000.2115.3001.5111\"},{\"text\":\"码云\",\"link\":\"https://gitee.com/LiupWX/uni-app-vue3-vite-ts.git\"}],\"contributors\":true,\"contributorsText\":\"贡献者\",\"smoothScroll\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
