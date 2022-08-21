# guide

组件发布指南

### 第一步 创建组件
在packages 下面创建 需要发布的组件，比如：pusa组件

![com-01](https://user-images.githubusercontent.com/22477383/185797226-a9f5ed74-fb50-41c8-8fa3-8e1d3b401f97.jpeg)

```vue
<template>
  <div>菩萨，救苦救难，救世主</div>
</template>

<script>
export default {
  name: 'Pusa',
}
</script>

<style scoped>
</style>
```

### 第二步 在docs下面注册组件

目标路径  docs/.vitepress/theme/index.js  下面注册pusa组件

![com-02](https://user-images.githubusercontent.com/22477383/185797240-330aa418-dd65-4500-8d36-1ccad51e8bc6.jpeg)

```javascript
...
import Pusa from '../../../packages/Pusa/index.vue'
...
export default {
  ...
  enhanceApp({ app, router, siteData }) {
    ...
    app.component(Pusa.name, Pusa)
    ...
  },
```

### 第三步 在components 下面创建pusa.md文件

![com-03](https://user-images.githubusercontent.com/22477383/185797250-cfe32e46-0272-4e1e-b86f-c641973daf6c.jpeg)

####  Pusa 业务组件

常用的操作。


:::demo

```vue
<pusa />
```

:::
