/*
 * @Descripttion:
 * @Author: liugang
 * @Date: 2022-06-12 22:32:22
 * @LastEditors: liugang
 * @LastEditTime: 2022-08-21 13:14:29
 */
import { defineConfig } from 'vitepress'
const nav = require('./configs/nav')
// const sidebar = require('./configs/sidebar')

export default defineConfig({
  title: 'Vite',
  description: 'Next Generation Frontend Tooling',
  base: '/h5-document-vite-web/',

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  vue: {
    reactivityTransform: true,
  },

  themeConfig: {
    logo: '/logo.svg',

    editLink: {
      repo: 'vitejs/vite',
      branch: 'main',
      dir: 'docs',
      text: 'Suggest changes to this page',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vitejs/vite' }],

    algolia: {
      apiKey: 'b573aa848fd57fb47d693b531297403c',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:en'],
      },
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present xxxx',
    },

    nav,

    sidebar: {
      '/components/': [
        {
          text: 'Components',
          items: [
            {
              text: 'Components Vite',
              link: '/components/',
            },
          ],
        },
      ],
    },

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
})
