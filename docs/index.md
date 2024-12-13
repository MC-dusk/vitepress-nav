---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 这是谁的
  text: 前端导航模板
  tagline: 基于 VitePress 的个人前端导航页面模板
  image:
    src: /logo.jpg
    alt: 胸针
  actions:
    - text: 这是模板来源
      link: https://notes.fe-mm.com
    - text: 前端导航
      link: /nav/
      theme: alt
    - text: 测试页
      link: /test
      theme: alt
features:
  - icon: 📖
    title: 前端导航
    details: 这是第一行<small>（这是小字）</small><br />这是第二行
    link: /nav/
    linkText: 这是linkText
  - icon: 📘
    title: 这是测试
    details: 忆！悟！
    link: /test
    linkText: 1! 5!
  - icon: 🎷
    title: 音乐
    details: This is true music
    link: https://netease-music.fe-mm.com
    linkText: ~~~
  - icon: 💯
    title: 向之所欣，已为陈迹。
    details: '<small class="bottom-small">兰亭集序</small>'
    link: https://example.com
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
