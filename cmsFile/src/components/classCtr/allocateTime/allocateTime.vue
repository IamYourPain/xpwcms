<template>
  <div class='content'>
      <el-container >
          <el-header>
               <div class='top-line'>
                    <span class='header-title'>分配时间-雅思精英班</span>
                    <span class='back-btn'></span>
               </div>
          </el-header>
          <el-main class='formBox'>
            <full-calendar :events="fcEvents" locale="zh" :firstDay='1' >
            <span  class='btn-save'   slot="fc-header-right">保存</span>
            <span  class='btn-save'   slot="fc-bottom-content">保存</span>
            </full-calendar>
          </el-main>
      </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fcEvents: []
    };
  },
  components: {
    "full-calendar": require("vue-fullcalendar")
  },
  methods: {
      test:()=>{
          alert(1)
      }
  },
  mounted: () => {
    /*let elList = document.querySelectorAll(".event-box");
    for (let i = 0; i < elList.length; i++) {
      elList[
        i
      ].innerHTML = `<p class='lessonTime start-time' style='text-align:center;font-size:13px;color:#888;margin-top:5px;'>上午 : 12:20:20</p>
                             <p class='lessonTime end-time' style='text-align:center;font-size:13px;color:#888;margin-top:5px;'>上午 : 12:20:20</p>
                             <div class='icon-box' style='position:absolute;right:5px;bottom:3px;'>
                             <span  style='display:inline-block;width:20px;height:20px;background:url(../../../../static/MainIcon.png) no-repeat;background-position: 0 -130px;'></span>
                             <span @click="test" style='display:inline-block;width:20px;height:20px;background:url(../../../../static/MainIcon.png) no-repeat;background-position: 0 -85px;'></span>
                             <div>`;
    }*/
  }
};
</script>

<style lang='scss' scoped>
@import "~@/assets/scss/reset.scss";
@import "~@/assets/scss/mixin.scss";
@import "~@/assets/scss/addPage.scss";
.btn-save {
  float: right;
  display: inline-block;
  margin-right: 8px;
  padding: 6px 10px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-size: 13px;
  cursor: pointer;
  background-color: #66bc7b;
  color: #fff;
  border-color: #66bc7b;
}
.lessonTime {
  text-align: center;
  font-size: 13px;
  color: #888;
}
</style>
<style lang='scss'>
.comp-full-calendar {
  min-width: 800px;
  max-width: 100%;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 0px 2px 0px rgba(84, 107, 107, 0.4);
}
.events-day {
  position: relative;
  box-sizing: border-box;
  border: 1px solid transparent;
  .day-number {
    padding: 3px 4px 4px 4px !important;
    opacity: 1 !important;
  }
}
.events-day:hover {
  border: 1px solid #5b9dbf !important;
}
.day-cell.active {
  background-color: #f7f7f7;
}
.day-cell.today {
  background-color: transparent !important;
}
.today {
  .day-number {
    color: #078ef7;
  }
}
</style>


