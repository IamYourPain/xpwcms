<template>
  <div class='side-bar'>
   <el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <div slot="title" class='titleColor'>
           <template>
            <i class="titleIcon icon_1"></i>
            <span>班级管理</span>
        </template>
        </div>
        <el-menu-item index="1-1">班级管理</el-menu-item>
        <el-menu-item index="1-2">老师管理</el-menu-item>
      </el-submenu>
       <el-submenu index="2">
        <template slot="title">
             <i class="titleIcon icon_2"></i>
            <span>学生管理</span>
        </template>
        <el-menu-item index="2-1">全部学费</el-menu-item>
        <el-menu-item index="2-2">学员签到</el-menu-item>
        <el-menu-item index="2-3">发布作业</el-menu-item>
      </el-submenu>
       <el-submenu index="3">
        <template slot="title">
            <i class="titleIcon icon_3"></i>
            <span>权限管理</span>
        </template>
        <el-menu-item index="3-1">权限分配</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
  </el-row>
  </div>
</template>

<script>
//引入修改el-ui的样式文件
export default {
  data() {
    return {};
  },
  mounted(){
    //获取菜单的TITLE且更换背景色和箭头图标颜色
      let elList=document.querySelectorAll(".el-submenu__title");
      for(var i=0;i < elList.length; i++) { 
        elList[i].onmouseenter=this.changeTitleColor;
        elList[i].getElementsByTagName("i")[1].style='color:#fff;';
      } 
  },
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //用来覆盖element-ui组件中的默认mouseenter事件
    changeTitleColor(){
        let elList=document.querySelectorAll(".el-submenu__title");
        for(var i=0;i < elList.length; i++) { 
          elList[i].style ='background-Color:#31a9f7;color:#fff;';
        } 
    },
    //用来覆盖element-ui组件的focus事件
    changeFocus(){
      let el=event.target;
    }
  }
};
</script>

<style lang='scss' scoped>
@import "~@/assets/scss/reset.scss";
@import "~@/assets/scss/mixin.scss";
.side-bar {
  display: inline-block;
}
.el-col {
  display: inline-block;
  width: 200px;
  background-color: #fff;
  .el-menu {
    border: 0;
    li.el-submenu {
      background-color: #31a9f7;
      i {
        color: #fff;
      }
    }
    .el-menu-item {
      position: relative;
      color: #686c6f !important;
    }
    .el-menu-item:focus, .el-menu-item:hover{
      background-color: #efefef;
    }
     .el-menu-item:focus{
       @include single-arrow('right',#595d60);
     }
  }
}
//菜单TITLE图标
.titleIcon{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  background: url('img/sprite_3.png') no-repeat;
  background-size: 31px 111px;
  width: 30px;
  height: 30px;
}
.icon_1{
    background-position: -1px 0px;
}
.icon_2{
    background-position: -2px -41px;
  }
.icon_3{
    background-position: -1px -85px;
  }
</style>



