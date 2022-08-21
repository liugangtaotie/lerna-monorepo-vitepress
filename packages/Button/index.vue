<!--
 * @Descripttion: 
 * @Author: liugang
 * @Date: 2022-08-21 11:21:05
 * @LastEditors: liugang
 * @LastEditTime: 2022-08-21 12:28:56
-->
<template>
  <button :class="['xl-button', type ? 'xl-button--' + type : '']">
    <slot />
  </button>
</template>

<script>
export default {
  name: "XlButton",
  props: {
    type: { type: String, default: "default" },
  },
};
</script>

<style scoped>
</style>
