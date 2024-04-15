import {
    defineUserConfig
} from 'vuepress'
import {
    defaultTheme
} from 'vuepress'
import {
    searchPlugin
} from '@vuepress/plugin-search'
import { containerPlugin } from '@vuepress/plugin-container'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
    base: '/',
    lang: 'zh-CN',
    title: '我们的成长之路',
    description: '三年组长五年主管',
    theme: defaultTheme({
        // logo: 'https://static-c3d2938e-a10f-4b38-b1d5-791a37326313.bspapp.com/mosoweLogo.png',
        lastUpdated: true, // string | boolean
        lastUpdatedText: '更新时间',
        // 默认主题配置
        navbar: [
            {
                text: "react",
                link: "../react/react.md"
            },
            {
                text: "webpack",
                link: "../webpack/webpack总结.md"
            },
            {
                text: "CSDN博客",
                link: "https://i.csdn.net/#/user-center/profile?spm=1000.2115.3001.5111"
            },
            {
                text: "码云",
                link: "https://gitee.com/LiupWX/uni-app-vue3-vite-ts.git"
            },
        ],
        // sidebar: require("../../utils/sidebar"),
        contributors: true,
        contributorsText: '贡献者',
        smoothScroll: true,
    }),
    markdown: {
        importCode: {
            handleImportPath: (str) =>
                str.replace(/^@/, path.resolve(__dirname, './components')),
        },
    },
    plugins: [
        searchPlugin(),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
        containerPlugin({
            type: "demo",
            before: (info) => `
          <ClientOnly>
            <codeShow>
              <template #examples>
                ${info}
              </template>
          `,
            after: () => `</codeShow></ClientOnly>`
        })
    ],
})