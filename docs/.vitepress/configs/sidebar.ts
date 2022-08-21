/*
 * @Descripttion:
 * @Author: liugang
 * @Date: 2022-08-21 12:51:40
 * @LastEditors: liugang
 * @LastEditTime: 2022-08-21 13:12:12
 */
const { getPath } = require('./utils')

module.exports = {
  [getPath('/api/')]: 'auto',
  [getPath('/components/')]: getComponentsSidebar(),
  [getPath('/guide/')]: getGuideSidebar(),
}

function getComponentsSidebar() {
  return [
    {
      text: '组件',
      items: [
        {
          text: 'Button 按钮',
          link: '/components/button',
        },
        {
          text: 'Tabs 标签页',
          link: '/components/tabs',
        },
        {
          text: 'Modal 对话框',
          link: '/components/modal',
        },
        {
          text: 'Tag 标签',
          link: '/components/tag',
        },
        {
          text: 'Vue 引用组件',
          link: '/components/vue',
        },
        {
          text: 'Vue Script',
          link: '/components/vue-script',
        },
      ],
    },
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '指南',
      items: [
        {
          text: '文档1',
          link: '/guide/button',
        },
        {
          text: '文档2',
          link: '/guide/modal',
        },
      ],
    },
    {
      text: '教程',
      items: [
        {
          text: '教程1',
          link: '/guide/button',
        },
        {
          text: '教程2',
          link: '/guide/modal',
        },
      ],
    },
  ]
}
