<template>
  <div class='index'>
      <header-bar></header-bar>
      <side-bar></side-bar>
  </div>
</template>

<script>
//引入头部
import HeaderBar from '@/components/base/header-bar/header'
//引入侧边导航栏
import SideBar from '@/components/base/Aside/Aside'


export default {
    data () {
      return {
      
      };
    },
    components: {
      HeaderBar,
      SideBar
    }
}
</script>

<style lang='scss' scoped>
@import '~@/assets/scss/reset.scss';
@import '~@/assets/scss/mixin.scss';
html,body{
  background-color: #fff;
}

</style>
