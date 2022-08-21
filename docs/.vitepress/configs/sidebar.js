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
      children: [
        {
          text: 'Button 按钮',
          link: '/components/button',
        },
        {
          text: 'Wuxiang 组件',
          link: '/components/wuxiang',
        },
        {
          text: 'Pusa 组件',
          link: '/components/pusa',
        },
      ],
    },
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '指南',
      children: [
        {
          text: '文档1',
          link: '/guide/',
        },
        {
          text: '文档2',
          link: '/guide/',
        },
      ],
    },
  ]
}
