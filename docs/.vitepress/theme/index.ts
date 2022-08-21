/*
 * @Descripttion:
 * @Author: liugang
 * @Date: 2022-06-12 22:32:22
 * @LastEditors: liugang
 * @LastEditTime: 2022-08-21 11:22:52
 */
import { h } from 'vue'
import Theme from 'vitepress/theme'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'
import Button from '../../../packages/Button/Button.vue'
import '../../../packages/Button/index.css'
import './styles/vars.css'

export default {
  ...Theme,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    app.component(Button.name, Button)
    registerComponents(app)
  },
}
