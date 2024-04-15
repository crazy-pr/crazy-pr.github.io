export const data = JSON.parse("{\"key\":\"v-27fc758a\",\"path\":\"/testGroup/second.html\",\"title\":\"测试第二项\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"测试第二项\",\"order\":1},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1668590163000,\"contributors\":[{\"name\":\"mosowe\",\"email\":\"630834853@qq.com\",\"commits\":1}]},\"filePathRelative\":\"testGroup/second.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
