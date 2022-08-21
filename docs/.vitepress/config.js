/*
 * @Descripttion:
 * @Author: liugang
 * @Date: 2022-08-21 15:18:49
 * @LastEditors: liugang
 * @LastEditTime: 2022-08-21 16:47:35
 */
const nav = require('./configs/nav')
const sidebar = require('./configs/sidebar')

module.exports = {
  title: '业务组件库',
  description: 'Life is short, Keep it simple.',

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  base: '/h5-document-vite-web',

  themeConfig: {
    repo: 'https://github.com/liugangtaotie/lerna-monorepo-vitepress.git',
    logo: '/logo.svg',
    docsDir: 'docs',
    docsBranch: 'master',

    // algolia: {
    //   appId: 'X51HWTCQJJ',
    //   apiKey: 'ca20f15eb8a667898b65d13f4213ae3d',
    //   indexName: 'vitepress-demo',
    // },

    // nav
    nav,

    // sidebar
    sidebar,

    // page meta
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less',
      })
    },
  },
}
