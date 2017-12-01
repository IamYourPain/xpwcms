<template>
  <div class='side-bar'>
   <el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      text-color="#58666e"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
           <template slot="title">
            <i class="titleIcon icon_1"></i>
            <span>班级管理</span>
           </template>
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
  mounted() {
    let elList = document.querySelectorAll(".el-submenu__title");
    for (var i = 0; i < elList.length; i++) {
      //修改鼠标移入事件,如果这个元素被点击过不添加鼠标移入样式(通过class名active判断)
      elList[i].onmouseenter = () => {
        let el = event.target;
        while (el.className.indexOf("el-submenu__title") == -1) {
          el = el.parentNode;
        }
        if (el.className.indexOf("active") == -1) {
          el.style =
            "background-Color:#efefef;height:40px;line-height:40px;color:#58666e;";
        } else {
          el.style =
            "background-Color:#31a9f7;height:40px;line-height:40px;color:#fff;";
          el.getElementsByTagName("i")[1].style = "color:#fff;";
        }
      };
      //增加菜单点击样式、覆盖默认样式
      elList[i].onclick = function() {
        let el = event.target;
        while (el.className.indexOf("el-submenu__title") == -1) {
          el = el.parentNode;
        }
        //判断当前点击菜单是否激活(class是否包含active)
        if (el.className.indexOf("active") == -1) {
          //不包含active增加class名active，并添加点击样式
          el.className = "el-submenu__title active";
          el.style =
            "background-Color:#31a9f7;height:40px;line-height:40px;color:#fff;";
          el.getElementsByTagName("i")[1].style = "color:#fff;";
           el.getElementsByTagName("i")[0].style = "background-image:url('../../../../static/sprite_3.png'); ";
        } else {
          //包含active去除class名active，并添加未激活样式
          el.className = "el-submenu__title";
          el.style =
            "background-Color:#fff;color:#58666e;height:40px;line-height:40px;";
          el.getElementsByTagName("i")[1].style = "color:$txt-color;";
          el.getElementsByTagName("i")[0].style = "background-image:url('../../../../static/sprite_3_gary.png');";
        }
      };
      //element-ui组件带有的事件暂时无法解绑，通过判断class名中是否有active(active已在click事件中添加)加上相对应样式
      elList[i].onmouseleave = function() {
        let el = event.target;
        while (el.className.indexOf("el-submenu__title") == -1) {
          el = el.parentNode;
        }
        if (el.className.indexOf("active") == -1) {
          el.style =
            "background-Color:#fff;color:#58666e;height:40px;line-height:40px;";
          el.getElementsByTagName("i")[1].style = "color:$txt-color;";
        } else {
          el.style =
            "background-Color:#31a9f7;height:40px;line-height:40px;color:#fff;";
          el.getElementsByTagName("i")[1].style = "color:#fff;";
        }
      };
      elList[i].style =
        "background-Color:#fff;color:#58666e;height:40px;line-height:40px;";
      elList[i].getElementsByTagName("i")[1].style = "color:$txt-color;";
    }
    //给子菜单添加点击事件
    let elChildList = document.querySelectorAll(".el-menu-item");
    for (var j = 0; j < elChildList.length; j++) {
      elChildList[j].onclick = function() {
        let elChildListActive = document.querySelectorAll(
          ".el-menu-item .is-active"
        );
        elChildListActive.className = "el-menu-item";
        event.target.className = "el-menu-item is-active";
      };
    }
  },
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
      i {
        color: #fff;
      }
    }
    .el-menu-item {
      height: 40px;
      line-height: 40px;
      position: relative;
      color: #686c6f !important;
      background-color: #fff;
    }
    .el-menu-item:hover {
      background-color: #efefef;
    }
    .el-menu-item.is-active {
      background-color: #efefef;
      @include single-arrow("right",#595d60);
    }
  }
}
//菜单TITLE图标
.titleIcon {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  background: url("img/sprite_3_gary.png") no-repeat;
  background-size: 23px 74px;
  width: 30px;
  height: 30px;
}
.titleColor.gray {
  .titleIcon {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    background: url("img/sprite_3.png") no-repeat;
    background-size: 23px 74px;
    width: 30px;
    height: 30px;
  }
}

.icon_1 {
  background-position: 3px 5px;
}
.icon_2 {
  background-position: 3px -22px;
}
.icon_3 {
  background-position: 3px -50px;
}
</style>




