import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
  base: '/',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'OUTOFF ORBIT',
      description: '前端技术经验分享、个人生活博客'
    },
    '/en/': {
      lang: 'en-US',
      title: 'OUTOFF ORBIT',
      description: 'A blog about my life and front-end'
    }
  },

  theme,

  shouldPrefetch: false
})