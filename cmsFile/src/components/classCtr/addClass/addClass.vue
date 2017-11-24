<template>
  <div class='content'>
      <el-container >
          <el-header>
               <div class='top-line'>
                    <span class='header-title'>新增班级</span>
                    <span class='back-btn'></span>
               </div>
          </el-header>
          <el-main class='formBox'>
              <div class='contentBox'>
                <div class='input-item'>
                      <div class='item-top'>
                        <span class='item-name'>班级名称</span>
                        <input class='item-input' type="text">
                        <span class='item-tip'>班级标题，展示在页面中，请认真填写，最多10字</span>
                      </div>
                      <div class='item-errormessage'>* 必须填写</div>     
                </div>
                <div class='input-item'>
                      <div class='item-top'>
                        <span class='item-name'>班级代码</span>
                        <input class='item-input error' type="text">
                        <span class='item-tip'>数字、英文、符号</span>
                      </div>
                      <div class='item-errormessage hide'>* 必须填写</div>     
                </div>
                <div class='input-item'>
                      <div class='item-top'>
                        <span class='item-name'>课程名称</span>
                        <input class='item-input' type="text">
                        <span class='item-tip'><span class='errorIcon'>*</span>建议不超过15个字</span>
                      </div>
                      <div class='item-errormessage hide'>* 必须填写</div>     
                </div>
                <div class='input-item'>
                      <div class='item-top'>
                        <span class='item-name'>关联学员</span>
                        <div class='list'>
                            <div class='item-student'>
                             甘圆圆
                                <span class='fork'></span>
                            </div>
                            <div class='item-student'>
                                陆生
                                <span class='fork'></span>
                            </div>
                            <div class='item-student'>
                             曹蓬
                                <span class='fork'></span>
                            </div>
                        </div>
                        <div class='add-item'>
                            <div class='add-btn'>
                                <span class='plus'></span>
                                添加学员
                            </div>
                            <span class='add-tip'>最少一人</span>
                        </div>
                      
                      </div>
                      <div class='item-errormessage hide'>* 必须填写</div>     
                </div>
                 <div class='input-item'>
                      <div class='item-top'>
                        <span class='item-name'>授课老师</span>
                        <div class='list'>
                            <div class='item-student'>
                             甘圆圆
                                <span class='fork'></span>
                            </div>
                        </div>
                        <div class='add-item'>
                            <div class='add-btn'>
                                <span class='plus'></span>
                                添加老师
                            </div>
                            <span class='add-tip'>最多一人</span>
                        </div>
                      
                      </div>
                      <div class='item-errormessage hide'>* 必须填写</div>     
                </div>
              </div>
          </el-main>
          <el-footer>
               <div class='btn-save'>保存</div>
               <div class='btn-cancel'>取消</div>
          </el-footer>
      </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted: () => {
    //表单主体高度
    let fomrHeight = document.querySelector(".content").clientHeight - 101 - 40;
    document.querySelector(".contentBox").style = "height:" + fomrHeight + "px";
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
@import "~@/assets/scss/reset.scss";
@import "~@/assets/scss/mixin.scss";
$main-iconBg: "../../../../static/MainIcon.png";
header {
  height: auto !important;
}
.content {
  height: 100%;
}
main {
  padding-bottom: 0;
}
.top-line {
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(84, 107, 107, 0.4);
  padding: 10px 20px;
  padding-right: 0;
  border: 1px solid #d9d9d9;
  border-top: 0;
  justify-content: space-between;
  @include child-center("x");
  .header-title {
    display: inline-block;
    color: #222;
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
  }
  .back-btn {
    display: inline-block;
    width: 25px;
    height: 20px;
    background: url($main-iconBg) no-repeat;
    background-position: 2px -19px;
    margin-right: 15px;
  }
}
.contentBox {
  min-width: 800px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(84, 107, 107, 0.4);
  border: 1px solid #d9d9d9;
  .input-item {
    border-bottom: 1px solid #d9d9d9;
    padding: 15px 118px;
    @include child-center("x");
    flex-direction: column;
    .item-top {
      width: 100%;
      .item-name {
        font-size: 13px;
        color: $title-sub-color;
        margin-right: 20px;
      }
      .item-input {
        width: 250px;
        font-size: 13px;
        line-height: 20px;
        border: 1px solid #e5e5e5;
        box-shadow: none;
        outline: 0;
        color: $txt-color;
        padding: 5px;
        margin-right: 5px;
        border-radius: 3px;
      }
      .item-input.error {
        border-color: $border-error-color;
      }
      .item-tip {
        font-size: 13px;
        color: $title-sub-color;
        .errorIcon {
          color: $txt-error-color !important;
          margin-right: 3px;
        }
      }
      .add-item {
        display: inline-block;
        .add-btn {
          display: inline-block;
          font-size: 13px;
          border: 1px solid #e5e5e5;
          padding: 5px;
          color: $txt-color;
        }
        .add-tip {
          font-size: 13px;
          color: $txt-color;
          margin-left: 15px;
        }
      }
      .list {
        display: inline-block;
        .item-student {
          display: inline-block;
          font-size: 13px;
          border: 1px solid #e5e5e5;
          padding: 5px;
          color: $txt-color;
          margin-right: 8px;
          margin-bottom: 8px;
        }
      }
    }
    .item-errormessage {
      width: 100%;
      color: $txt-error-color;
      font-size: 13px;
      margin-left: 160px;
      margin-top: 8px;
    }
  }
}
.plus {
  @include plus();
}
.fork {
  @include fork();
}
footer {
  margin: 0 20px;
  background-color: #fff;
  box-shadow: 0px 0px 2px 0px rgba(84, 107, 107, 0.4);
  border: 1px solid #d9d9d9;
  border-top: 0;
  padding:15px 103px;
  div{
      display: inline-block;
      margin-right: 8px;
      padding: 6px 10px;
      border: 1px solid #d9d9d9;
      border-radius: 3px;
      font-size: 13px;
  }
  .btn-save{
      background-color: #66bc7b;
      color: #fff;
      border-color: #66bc7b;
  }
  .btn-cancel{
    box-shadow: 0px 0px 2px 0px rgba(84, 107, 107, 0.4);
  }

}
</style>

