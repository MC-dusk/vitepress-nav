import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '测试',
    items: [
      {
        text: '导航',
        link: '/nav/',
        activeMatch: '^/nav',
      },
      {
        text: 'test',
        items: [
          {
            text: 't1',
            link: '/test',
          },
          {
            text: 't2',
            link: '/test2',
          },
        ],
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
]
