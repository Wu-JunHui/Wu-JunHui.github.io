import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
  base: '/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'OUTOFF ORBIT',
      // description: 'vuepress-theme-hope 的博客演示'
    },
    '/en/': {
      lang: 'en-US',
      title: 'OUTOFF ORBIT',
      // description: 'A blog demo for vuepress-theme-hope'
    }
  },

  theme,

  shouldPrefetch: false
})
