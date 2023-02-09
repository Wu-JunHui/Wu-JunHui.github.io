<div align=center>

<img width="240" src="/src/.vuepress/public/logo.svg" >

</div>

<div align=center>

# OUTOFF ORBIT

</div>

---

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

---



## 我的第一个博客

![](/src/.vuepress/public/Chinese.webp)

部署于 GitHub pages: https://outofforbit.com

部署于 Gitee pages: https://w-junhui.gitee.io

基于 VuePress 2 搭建的个人博客，应用了主题 [VuePress Theme Hope](https://theme-hope.vuejs.press/zh/)，该主题由 VuePress 项目作者维护，这是他的 [个人网站](https://mrhope.site/)

## 开发模式

```sh
# 安装依赖
npm i
# 启用普通的开发环境
npm run dev
# （推荐）启用清理模式下的开发环境，该模式会在启动前清除.vuepress/下的缓存文件与临时文件
npm run dev-clean
```

## 部署博客

在完成自定义开发后，即可部署博客。

借助 GitHub Actions，当前仓库能在 `push` 主分支 `main` （可自定义）时，自动将博客部署至 GitHub pages 和 Gitee pages 的 `gh-pages` 分支

::: tip GitHub Actions
GitHub Actions 是一个持续集成 (Continuous integration)和持续交付 (Continuous delivery)的平台，如果你不熟悉 GitHub Actions，可参考[这篇文章](https://github.com/mqyqingfeng/Blog/issues/237)或 [GitHub Actions 官方中文文档](https://docs.github.com/zh/actions/learn-github-actions/understanding-github-actions)
:::

### 部署至 GitHub pages
主题 [vuepress-theme-hope](https://github.com/vuepress-theme-hope/vuepress-theme-hope) 通过 GitHub Actions，提供了部署至 GitHub pages 的便捷功能，需确保符合以下要求：

1. 确保在创建 vuepress-theme-hope 项目时勾选了创建自动部署文档的 GitHub 工作流
2. GitHub pages 分为个人页面与项目页面：
- 个人页面：如果你期望最终部署的网址为 `https://GitHub用户名.github.io/`，则必须将整个项目上传至 `https://github.com/GitHub用户名/GitHub用户名.github.io`，这意味着你在创建仓库时，仓库名必须为这种形式：`GitHub用户名.github.io`，每个 GitHub 账号只能部署一个个人页面

- 项目页面：不同于个人页面，没有数量限制，在创建仓库时随意命名，例如 `mysoul`，则在项目中需要在 config.ts 中配置好 base 选项，它表示项目部署的根路径，必须以 `/` 开头和结束，例如：`/mysoul/`，注意路径名必须与仓库名一致，包括大小写

如果是部署至 Gitee pages 的话，若 Gitee 仓库名使用了大写，则配置 base 时必须使用小写，因为 Gitee pages 在部署时会默认将部署仓库名转换为小写

### 部署至 Gitee pages

同样需要借助于 GitHub Actions，我使用的是 [yanglbme/gitee-pages-action](https://github.com/yanglbme/gitee-pages-action)，该作者的仓库下的 `README.md` 已有详细的使用教程，此处不再重复

### 部署基本原理

GitHub Actions 可粗略地理解为一个执行程序的平台，当你为项目创建了一个工作流，即一系列脚本指令后，在 push main 分支时，就开始执行这个工作流，即开始一系列在 GitHub Actions 的虚拟机运行器（runner）上执行脚本命令

不同的 Action 可执行不同的任务，因此可以使用别人创建好的 Action，回到部署博客中，参考我的博客[工作流代码](https://github.com/Wu-JunHui/Wu-JunHui.github.io/blob/main/.github/workflows/deploy-docs.yml)，每一步我都编写了详细的注释，因此我只列出大致流程：

1. 检查仓库代码
2. 安装 Node.js
3. 安装项目依赖
4. 构建文档，即 build
5. 部署文档至 GitHub pages
6. 同步当前仓库代码到 Gitee
7. 部署文档至 Gitee pages

### 参考：

[vuepress-theme-hope/部署项目](https://theme-hope.vuejs.press/zh/cookbook/tutorial/deploy.html)
复制文件actions：https://github.com/marketplace/actions/copy-file
## 静态资源

为尽可能提升博客的访问与运行速度，博客中的图片均使用 `.webp` 格式，而类似于 logo 的小图标则使用 `.svg` 格式

由于博客目前暂未有大量图片的管理需求，因此暂未使用图床（图片管理系统）

## 联系我

如果对该仓库的代码有任何疑问，可通过邮箱联系我：wu-junhui@foxmail.com  
或者你也可以创建一个 [Issues](https://github.com/Wu-JunHui/Wu-JunHui.github.io/issues)

## 开源许可

[MIT](/LICENSE)
