---
icon: edit
date: 2022-11-11
category:
  - Vue
tag:
  - Vue Router3
  - 导航解析
  - 导航守卫
star: true
---

# Vue Router3 导航解析流程

## 概述

本文结合完整的导航解析流程分析各类导航守卫的**调用时机**，若不熟悉导航守卫及其种类，可参考 [Vue Router3 导航守卫种类](/技术博文/Vue/VueRouter3导航守卫种类.html)

<!-- more -->

## 导航解析流程步骤

1. 导航被触发
2. 在**失活**的组件里调用：<i>组件离开守卫</i> `beforeRouteLeave`
3. 调用：<i>全局前置守卫</i> `beforeEach`
4. 在**重用**的组件里调用：<i>组件更新守卫</i> `beforeRouteUpdate`
5. 在**路由配置**里调用：<i>路由独享守卫</i> `beforeEnter`
6. 解析路由组件，包含异步组件
7. 在**被激活**的组件里调用：<i>组件进入守卫</i> `beforeRouteEnter`
8. 调用：<i>全局解析守卫</i> `beforeResolve`
9. 导航被**确认**
10. 调用：<i>全局后置钩子</i> `afterEach`
11. 触发 DOM 更新
12. 调用<i>组件进入守卫</i> `beforeRouteEnter` 中传给 `next` 的回调函数，创建好的组件实例会作为回调函数的参数传入

## 导航解析流程图片

![](/articles/vue/导航解析流程.webp)

## 导航解析流程细节

### <i>页面初始化</i>

页面初始化时，会以当前页面设置的**根路径**作为导航，直接触发所有存在的守卫

**默认情况**下根路径为 `/`，可通过**重定向**定义新的页面根路径，则页面初始化时就会以重定向后的路径触发全局钩子、该路径的路由守卫及该路径映射的组件内守卫

### <i>路由组件</i>

谨记在组件中设置的守卫，生效的前提是该组件是**通过路由展示**的，即为路由组件

### <i>next 函数</i>

结合导航解析流程可知 `next` 函数的意义是为了进入下一个流程，就像一个管道，直到最后一个才没有 `next` 函数，也就是全局后置钩子 `afterEach`

## 关于触发

Vue Router3 官方文档的 [导航守卫](https://v3.router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB) 中提到：

> 参数或查询的改变并不会触发进入/离开的导航守卫，可通过观察 `$route` 对象来应对这些变化，或使用 `beforeRouteUpdate` 的组件内守卫

#### <i>个人解读</i>

1. 参数指的是**动态路径参数**，查询指的是**路径所携带的查询参数**

2. 无论是动态路径参数、查询参数、或 `hash` 的改变，它们都是基于**被复用**的组件的路由上进行路径导航，渲染所映射的路由组件

3. 进入/离开类守卫即抛开全局类守卫，有三种：路由独享守卫、组件进入守卫、组件离开守卫

因此，官网所提的不会触发进入/离开类守卫的**主体**，是被复用的组件，它只能通过操作 `$route` 对象或设置组件复用守卫 `beforeRouteUpdate`，同时也会触发全局类守卫

基于 `params`、`query`、`hash` 改变的路径所映射的组件，是能**正常触发**所有类的守卫

## 应用场景

<i>全局前置守卫</i> `beforeEach` （常用）  
通常用来进行路由跳转的一些信息判断，例如判断是否登录，是否拿到对应的路由权限等等，对于验证登录，可结合**路由元信息**，即 `meta` 属性使用

<i>全局后置钩子</i> `afterEach`  
对于分析、更改页面标题、声明页面等辅助功能以及许多其他事情都很有用

<i>组件离开守卫 </i> `beforeRouteLeave`  
通常用来预防用户在还未保存修改前突然离开，该导航可以通过返回 `false` 来取消

<style lang="scss">
i {
  color: #2cb2c2;
  font-style:normal;
}
</style>
