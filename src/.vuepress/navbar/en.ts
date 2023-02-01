import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  { text: 'Resume', icon: 'profile', link: '/en/resume/' },
  { text: 'Projects', icon: 'repo', link: '/en/projects/' },
  {
    text: 'Blogs',
    icon: 'advance',
    prefix: '/en',
    children: [
      {
        text: 'HTML',
        icon: 'html',
        link: '/category/html/'
      },
      {
        text: 'CSS',
        icon: 'css',
        link: '/category/css/'
      },
      {
        text: 'JavaScript',
        icon: 'javascript',
        link: '/category/javascript/'
      },
      {
        text: 'Vue',
        icon: 'vue',
        link: '/category/vue/'
      },
      {
        text: 'browser',
        icon: 'chrome',
        link: '/category/browser/'
      },
      {
        text: 'All',
        icon: 'storage',
        link: '/article/'
      },
    ]
  }
]);
