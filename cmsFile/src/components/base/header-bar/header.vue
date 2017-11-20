<template>
  <div class="header-bar">
    <div class='header-left'>
       <div class='header-logo'></div>
       <div class='header-title' >{{HeaderTitle}}</div>
    </div>
   <div class='header-right'>
    <span class='header-userName'>{{HeaderUserName}}</span>
    <div class='header-userHeadPic'>
      <img :src="UserHeadPic" alt="">
    </div>
   </div>
  </div>
</template>

<script>

export default {
    data () {
      return {
       
      };
    },
    props: {
      HeaderTitle:{
        type:String,
        default:'管理平台'
      },HeaderUserName:{
        type:String,
        default:'此处显示该机构名称'
      },UserHeadPic:{
        type:String,
        default:'../../../../static/default-head.png'
      }
    },
    components: {}
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/reset.scss';
@import '~@/assets/scss/mixin.scss';

.header-bar{
  @include child-center('x');
  justify-content:space-between;
  width: 100%;
  height: 50px;
  background-color: $highlight-color;
  vertical-align: middle;
  .header-left{
      @include child-center('x');
      margin-left: 15px;
    .header-logo{
      display: inline-block;
      width: 77px;
      height: 25px;
      background: url('./img/logo.png')no-repeat;
      background-size: 77px 25px;
    }
    .header-title{
      display: inline-block;
      font-size: 20px;
      color: #fff;
      margin-left: 10px;
    }
  }
  .header-right{
     @include child-center('x');
     margin-right: 15px;
    .header-userName{
          display: inline-block;
          font-size: 13px;
          color: #fff;
          @include arrow-down('down');
          margin-right: 10px;
    }
    .header-userName.active{
        @include arrow-down('top');
    }
    .header-userHeadPic{
      @include clearImgBorder(36px,36px,38px,38px);
      display: inline-block;
      border-radius: 100%;
      img{
         border-radius: 100%;
      }
    }
   
  }  
}
</style>

