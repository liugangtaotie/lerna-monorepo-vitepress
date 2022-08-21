/*
 * @Descripttion:
 * @Author: liugang
 * @Date: 2022-08-21 12:51:40
 * @LastEditors: liugang
 * @LastEditTime: 2022-08-21 13:01:06
 */
const { getPath } = require('./utils')

module.exports = [
  {
    text: 'Components',
    link: '/components/',
    activeMatch: getPath('^/components/'),
  },
]
