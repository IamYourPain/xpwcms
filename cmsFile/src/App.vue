<template>
  <div id="app">
      <!-- 为了某些页面的全屏效果，tab 栏放在各内容页 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss' >
@import '~@/assets/scss/reset.scss';
@import '~@/assets/scss/mixin.scss';
html,body{
  width: 100%;
  height: 100%;
  #app{
    width: 100%;
    height: 100%;
  }
}
</style>
