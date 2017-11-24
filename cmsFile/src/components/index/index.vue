<template>
<div id='contentBox'>
<header-bar></header-bar>
<el-container>
    <el-aside width='200px'>
      <side-bar></side-bar>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
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
  background-color: #f7f7f7;
}
#contentBox{
  position: relative;
  height: 100%;
}
.header-bar{
  position: absolute;
  left: 0;
  top:0;
}
.el-container{
  height: 100%;
  padding-top: 50px;
  background-color: #f7f7f7;
  .el-aside{
    background-color: #fff;
  }
  .el-main{
    padding-top:0;
  }
}
</style>
