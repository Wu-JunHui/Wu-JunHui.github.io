---
title: Projects
icon: repo
index: false
sidebar: false
comment: false
pageInfo: false
article: false
---

<SiteInfo 
name="Urban Weather Forecast in China" 
url="https://w-junhui.gitee.io/weather-forecast" 
desc="Provides a one-week weather forecasts for cities in China" 
preview="/cover/weather-cover.webp" 
logo="/logo.svg" 
repo="https://github.com/Wu-JunHui/Weather-Forecast" />

### Description:

1. A Vue 3 Web application built by [Vite](https://cn.vitejs.dev/).  
2. Organized the UI interface by using [Element Plus](https://element-plus.gitee.io/zh-CN/) and deconstructed it by three components: `CityPanel.vue`、`Days.vue`、`Footer.vue`. Enable the `responsive layout` by using `media query`.  
3. By comparing the city suffixes ('市', '县', '自治州', '岛'), the legal city name is determined to be a request parameter. To make the request easier, I set the `Axios` as the Vue global property `$http`，and request/response interceptor is also set at the same time.  
4. Used the `Less` to write the styles and applyed some icons from [阿里巴巴矢量图标库](https://www.iconfont.cn/)

#### Deploy in Gitee pages: https://w-junhui.gitee.io/weather-forecast

---