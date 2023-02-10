<div align=center>

<img width="240" src="/src/.vuepress/public/logo.svg" >

</div>

<div align=center>

# OUTOFF ORBIT

&nbsp;

</div>
&nbsp;

## My first blog

![](/src/.vuepress/public/English.webp)
This is my first blog website based on VuePress 2. And I start it by applying a VuePress theme called [VuePress Theme Hope](https://theme-hope.vuejs.press/zh/). It's maintained by one of the group members of VuePress Project. Here is his [personal website](https://mrhope.site/).

## Start Dev mode

```sh
# start the normal dev mode
npm run dev
# start the dev clean mode, it will clean cache and temp file before start dev mode
npm run dev-clean
```

## Static resources

In order to make my blog as faster as possible, all pictures are using the `.webp` format. However, the icon such as logo, is using `.svg` format.

&nbsp;
&nbsp;

---

&nbsp;
&nbsp;

## 我的第一个博客

![](/src/.vuepress/public/Chinese.webp)

基于 VuePress 主题 [VuePress Theme Hope](https://theme-hope.vuejs.press/zh/) 搭建的个人博客，该主题由 [VuePress 2](https://v2.vuepress.vuejs.org/zh/) 项目作者维护，这是他的 [个人网站](https://mrhope.site/)

部署于 GitHub pages: https://outofforbit.com

部署于 Gitee pages: https://w-junhui.gitee.io

## 开发模式

```sh
# Fork仓库后，安装依赖
npm i
# 启用普通的开发环境
npm run dev
# （推荐）启用清理模式下的开发环境，该模式会在启动前清除.vuepress/下的缓存文件与临时文件
npm run dev-clean
```

## 构建并部署博客

借助 [GitHub Actions](https://docs.github.com/zh/actions)，当前博客能在构建项目的同时，自动部署至 [GitHub Pages](https://docs.github.com/zh/pages) 和 [Gitee Pages](https://gitee.com/help/articles/4136#article-header0)。同时，构建项目也不再需要手动执行脚本命令（npm run docs:build ），而是使用 GitHub Actions，在工作流中增加构建项目的任务步骤即可  

换言之，在配置好工作流后，每次更新博客都只需执行 `git push`，让工作流进行项目的构建与自动部署，实现博文自动更新

更多部署细节，可参考我的博客文章 [《我的博客部署之路》](https://w-junhui.gitee.io/%E6%8A%80%E6%9C%AF%E5%8D%9A%E6%96%87/VuePress/%E6%88%91%E7%9A%84%E5%8D%9A%E5%AE%A2%E9%83%A8%E7%BD%B2%E4%B9%8B%E8%B7%AF.html)  
CSDN：[我的 VuePress 博客部署之路](https://blog.csdn.net/INT_FUTURE/article/details/128975977)

::: tip GitHub Actions
GitHub Actions 是一个持续集成 (Continuous integration)和持续交付 (Continuous delivery)的平台，如果你不熟悉 GitHub Actions，可参考[这篇文章](https://github.com/mqyqingfeng/Blog/issues/237)或 [GitHub Actions 官方中文文档](https://docs.github.com/zh/actions/learn-github-actions/understanding-github-actions)
:::

## 静态资源

为尽可能提升博客的访问与运行速度，博客中的图片均使用 `.webp` 格式，而类似于 logo 的小图标则使用 `.svg` 格式

由于博客目前暂未有大量图片的管理需求，因此暂未使用图床（图片管理系统）

## 评论系统

当前博客使用基于 [GitHub Discussions](https://docs.github.com/en/discussions) 的 [Giscus](https://giscus.app/zh-CN) 评论系统

## 联系我

如果对该仓库的代码有任何疑问，可通过邮箱联系我：wu-junhui@foxmail.com  
或者你也可以创建一个 [Issues](https://github.com/Wu-JunHui/Wu-JunHui.github.io/issues)

## 开源许可

[MIT](/LICENSE)
