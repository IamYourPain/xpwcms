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
@import "~@/assets/scss/addPage.scss";
</style>

