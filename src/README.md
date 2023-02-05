---
home: true
layout: BlogHome
icon: home
title: 主页
heroImage: maintitle.svg
heroText: 没有什么比实现自我更重要
bgImage: /bgPic.png
heroFullScreen: true
tagline: 即使需要偏离正常轨道
footer: — &nbsp &nbsp 专注 &nbsp &nbsp  &nbsp &nbsp 细致&nbsp &nbsp   &nbsp &nbsp 执着 &nbsp &nbsp —
---





<script>
  import { onMounted } from 'vue'
  export default {
    setup(){
      onMounted(()=>{
    let first = document.querySelector('.social-media:first-child')
    // first.onclick=test(
    //   ()=>{
    //     return false
    //   }
    // // )
    // first.addEventListener('click',()=>{
    // // console.log('test')
    // return false

    // })
      })
    }
  }
</script>
