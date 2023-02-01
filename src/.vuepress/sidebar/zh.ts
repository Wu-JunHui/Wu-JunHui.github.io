import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/': [
    // "", 空字符串表示主页链接
    {
      text: 'HTML',
      icon: 'html',
      prefix: '技术博文/HTML/',
      children: 'structure',
      collapsible: true
    },
    {
      text: 'CSS',
      icon: 'css',
      prefix: '技术博文/CSS/',
      children: 'structure',
      collapsible: true
    },
    {
      text: 'JavaScript',
      icon: 'javascript',
      prefix: '技术博文/JS/',
      children: 'structure',
      collapsible: true
    },
    {
      text: 'Vue',
      icon: 'vue',
      prefix: '技术博文/Vue/',
      children: 'structure',
      collapsible: true
    },
    {
      text: '浏览器',
      icon: 'chrome',
      prefix: '技术博文/browser/',
      children: 'structure',
      collapsible: true
    }
  ]
})
