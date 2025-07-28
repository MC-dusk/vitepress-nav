import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '主页',
    link: 'm416.asia',
  },
  {
    text: '导航',
    link: '/nav/',
    activeMatch: '^/nav',
  },
  {
    text: '测试',
    items: [
      {
        text: 'sumatra',
        link: '/sumatra',
        activeMatch: '^/sumatra',
      },
      {
        text: 'test',
        items: [
          {
            text: 't1',
            link: '/test1',
          },
          {
            text: 't2',
            link: '/test2',
          },
          {
            text: 'csdn',
            link: '/csdn',
          },
        ],
      },
      {
        text: '阵营九宫格',
        link: '/阵营九宫格',
      },
      {
        text: '在线markdown',
        link: 'https://markdown-it.github.io/',
      },
    ],
    activeMatch: '^/test',
  },
  {
    text: 'Worldle',
    link: 'https://worldle.teuteuf.fr/',
  },
  {
    text: 'Rainy Mood',
    link: 'https://rainymood.com/',
  },
  {
    text: '模板来源',
    link: 'https://notes.fe-mm.com',
  },
]
