/*
 * @Descripttion:
 * @Author: liugang
 * @Date: 2022-08-21 15:18:49
 * @LastEditors: liugang
 * @LastEditTime: 2022-08-21 18:26:26
 */
import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'

import Button from '../../../packages/Button/index.vue'
import '../../../packages/Button/index.css'

import Wuxiang from '../../../packages/Wuxiang/index.vue'
import './styles/index.css'

import Pusa from '../../../packages/Pusa/index.vue'

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    app.component(Button.name, Button)
    app.component(Wuxiang.name, Wuxiang)
    app.component(Pusa.name, Pusa)
    registerComponents(app)
  },
}
