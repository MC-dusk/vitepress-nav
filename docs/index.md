---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 无名的
  text: 个人主页
  tagline: 基于 VitePress 的导航页面
  image:
    src: /logo.png
    alt: 胸针
  actions:
    - text: 前端导航
      link: /nav/
      theme: alt
    - text: Markdown
      link: /csdn
      theme: alt
    - text: 菜鸟教程
      link: https://www.runoob.com/
features:
  - icon: 📘
    title: 博客
    details: Issue-Blog
    link: https://github.m416.asia/Issue-Blog/
    linkText: Go
  - icon: 📓
    title: 文档
    details: Docsify
    link: https://github.m416.asia/docsify/
    linkText: Go
  - icon: 🔖
    title: 书签
    details: Pintree
    link: https://github.m416.asia/pintree/
    linkText: Go
  - icon: 🎷
    title: 音乐
    details: SPlayer
    link: https://splayer.m416.asia
    linkText: This is true music
  - icon: 📖
    title: 前端导航
    details: 第一行<small>（小字）</small><br />第二行
    link: /nav/
    linkText: 链接文字
  - icon: 💯
    title: 向之所欣，已为陈迹。
    details: '<small class="bottom-small">兰亭集序</small>'
    link: https://m416.asia
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
