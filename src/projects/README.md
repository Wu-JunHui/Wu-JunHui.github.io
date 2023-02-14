---
title: 项目展示
icon: repo
index: false
sidebar: false
comment: false
pageInfo: false
article: false
---

<SiteInfo 
name="中国天气预报" 
url="https://w-junhui.gitee.io/weather-forecast" 
desc="提供全国城市当天往后一周的天气预报" 
preview="/cover/weather-cover.webp" 
logo="/logo.svg" 
repo="https://github.com/Wu-JunHui/Weather-Forecast" />

### 项目说明：

1. 使用 [Vite](https://cn.vitejs.dev/) 构建的 Vue 3 Web 应用
2. 基于 [Element Plus](https://element-plus.gitee.io/zh-CN/) 构建项目 UI 界面，并将界面进行组件化拆分，封装了 `CityPanel.vue`、`Days.vue`、`Footer.vue` 三个组件，同时通过**媒体查询**设置不同视口的页面布局，实现**响应式布局**
3. 通过比对城市后缀（'市', '县', '自治州', '岛'），判断出合法城市名后，将 `Axios` 设置为全局属性 `$http` 以方便发起数据请求，同时设置了**请求/响应拦截器**
4. 项目中使用 `Less` 编写样式，同时使用了 [阿里巴巴矢量图标库](https://www.iconfont.cn/)

#### 部署于 Gitee pages: https://w-junhui.gitee.io/weather-forecast

---
