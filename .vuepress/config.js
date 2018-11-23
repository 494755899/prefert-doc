module.exports = {
    base: '/prefert-doc/',
    title: '成昆',
    description: '成昆后台管理系统架构',
    themeConfig: {
        sidebar: {
          '/layout/': [
            'layout', /* 布局 */
            'mokuai' /* 文件模块方式 */
          ],
        },
        nav: [
          { text: 'Home', link: '/' },
          { text: 'concepts(概念)', link: '/concepts/howInstall' },
          // {
          //   text: 'Languages',
          //   items: [
          //     { text: 'Chinese', link: '/language/chinese' },
          //     { text: 'Japanese', link: '/language/japanese' }
          //   ]
          // },
          // { text: 'External', link: 'https://google.com' },
        ]
      }
  }