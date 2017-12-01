<template>
  <div class='content'>
      <el-container >
          <el-header>
               <div class='top-line'>
                    <span class='header-title'>新增授课老师</span>
                    <span class='back-btn'></span>
               </div>
          </el-header>
          <el-main class='formBox'>
              <div class='contentBox'>
                <div class='input-item'>
                      <div class='item-top'>
                        <span class='item-name'>授课老师名称</span>
                        <input class='item-input' type="text">
                      </div>
                      <div class='item-errormessage active'>* 必须填写</div>     
                </div>
                <div class='input-item'>
                      <div class='item-top'>
                        <span class='item-name'>老师职能</span>
                        <input class='item-input error' type="text">
                        <span class='item-tip'><span class='errorIcon'>*</span>案例 : 雅思IELTS | 严谨认真 | 耐心细致</span>
                      </div>
                      <div class='item-errormessage hide'>* 必须填写</div>     
                </div>
                <div class='input-item'>
                      <div class='item-top'>
                        <span class='item-name'>教龄</span>
                        <input class='item-input' type="text">
                        <span class='item-tip'><span class='errorIcon'>*</span></span>
                      </div>
                      <div class='item-errormessage hide'>* 必须填写</div>     
                </div>
                <div class='input-item'>
                      <div class='item-top'>
                        <span class='item-name'>教师图片</span>
                        <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <el-button size="small" type="">点击上传</el-button>
                        </el-upload>
                        <span class='item-tip'><span class='errorIcon'>*</span>  尺寸640x640像素以上，大小2M以下</span>
                      </div>
                      <div class='item-errormessage hide'>* </div>     
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
    return {
      fileList: []
    };
  },
  components: {},
  mounted: () => {
    //表单主体高度
    let fomrHeight = document.querySelector(".content").clientHeight - 101 - 40;
    document.querySelector(".contentBox").style = "height:" + fomrHeight + "px";
  },
  methods: {
    //上传图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length +
          fileList.length} 个文件`
      );
    }
  }
};
</script>

<style lang='scss' scoped>
@import "~@/assets/scss/reset.scss";
@import "~@/assets/scss/mixin.scss";
@import "~@/assets/scss/addPage.scss";
</style>

