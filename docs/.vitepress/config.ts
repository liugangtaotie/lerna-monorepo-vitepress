/*
 * @Descripttion:
 * @Author: liugang
 * @Date: 2022-06-12 22:32:22
 * @LastEditors: liugang
 * @LastEditTime: 2022-08-21 10:49:01
 */
import { defineConfig } from 'vitepress'

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

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/vite_js' },
      { icon: 'discord', link: 'https://chat.vitejs.dev' },
      { icon: 'github', link: 'https://github.com/vitejs/vite' },
    ],

    algolia: {
      apiKey: 'b573aa848fd57fb47d693b531297403c',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:en'],
      },
    },

    localeLinks: {
      text: 'English',
      items: [
        { text: '简体中文', link: 'https://cn.vitejs.dev' },
        { text: '日本語', link: 'https://ja.vitejs.dev' },
      ],
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present xxxx',
    },

    nav: [{ text: 'Config', link: '/config/', activeMatch: '/config/' }],

    sidebar: {
      '/config/': [
        {
          text: 'Config',
          items: [
            {
              text: 'Configuring Vite',
              link: '/config/',
            },
          ],
        },
      ],
    },
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
