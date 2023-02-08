import { hopeTheme } from 'vuepress-theme-hope'
import { enNavbar, zhNavbar } from './navbar/index.js'
import { enSidebar, zhSidebar } from './sidebar/index.js'
import { getDirname, path } from '@vuepress/utils'
export default hopeTheme({
  hostname: 'https://wu-junhui.github.io/',

  author: {
    name: 'Wu-JunHui'
    // url: 'https://mrhope.site'
  },

  iconAssets: 'iconfont',

  logo: '/logo.svg',

  logoDark: '/logoDark.svg',

  favicon: '/favicon.ico',

  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: 'docs',

  blog: {
    avatar: '/avatar.jpg',
    medias: {
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Email: 'ht',
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      Gitee: 'https://gitee.com/W-JunHui',
      GitHub: 'https://github.com/Wu-JunHui',
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
      Foxmail: [
        'https://mrhope.site',
        '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">  <image id="image0" width="256" height="256" x="0" y="0" href="data:image/png;base64,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" /></svg>'
      ]
    }
  },

  locales: {
    '/en/': {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: 'CONCENTRATION &nbsp &nbsp — &nbsp &nbsp METICULOSITY &nbsp &nbsp — &nbsp &nbsp PERSEVERANCE',

      displayFooter: true,

      blog: {
        description: 'A Front-End programmer'
        // intro: "/intro.html",
      },

      metaLocales: {
        editLink: 'Edit this page on GitHub'
      }
    },

    /**
     * Chinese locale config
     */
    '/': {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: '专注 &nbsp &nbsp — &nbsp &nbsp 细致 &nbsp &nbsp — &nbsp &nbsp 执着 ',

      displayFooter: true,

      blog: {
        description: '一个前端开发者'
        // intro: "/zh/intro.html",
      },

      // page meta
      metaLocales: {
        // editLink: "在 GitHub 上编辑此页",
      }
    }
  },

  encrypt: {
    config: {
      // '/demo/encrypt.html': ['1234'],
      // '/zh/demo/encrypt.html': ['1234']
    }
  },

  plugins: {
    blog: true,
    // 使用主题内置组件
    components: {
      components: ['SiteInfo']
    },
    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: 'Giscus',
      repo: 'vuepress-theme-hope/giscus-discussions',
      repoId: 'R_kgDOG_Pt2A',
      category: 'Announcements',
      categoryId: 'DIC_kwDOG_Pt2M4COD69'

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    // Disable features you don’t want here，主题提供的Markdown语法加强
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue']
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      },
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended'
              }
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    }

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
})
