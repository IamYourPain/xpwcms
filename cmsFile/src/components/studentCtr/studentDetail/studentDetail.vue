<template>
<div class='content'>
      <el-container >
          <el-header>
               <div class='top-line'>
                    <span class='header-title'>学生详情 甘圆圆</span>
                    <span class='back-btn'></span>
               </div>
          </el-header>
          <el-main class='formBox'>
              <div class='contentBox'>
                <div class='student-info'>
                    <div class='student-headPic'>
                        <img src="../../../../static/headPic.jpg" alt="">
                    </div>
                    <div class='student-detail'>
                        <div class='student-detail-item'>
                            <div class='item-left bigSize'>甘圆圆</div>
                            <div class='item-right'> 138122834147</div>
                        </div>
                        <div class='student-detail-item'>
                            <div class='item-left'>授课老师</div>
                            <div class='item-right'> : Akina</div>
                        </div>
                         <div class='student-detail-item'>
                            <div class='item-left'>报名课程</div>
                            <div class='item-right'> : 雅思</div>
                        </div>
                         <div class='student-detail-item'>
                            <div class='item-left'>所属班级</div>
                            <div class='item-right'> : 雅思精英培训班</div>
                            <div class='btn-allocation'>前去分配</div>
                        </div>
                    </div>
                    <div class='student-save'>
                        <div class='btn-save'>保存</div> 
                    </div>
                 </div>
                 <div class='class-evaluate'>
                    <div class='evaluate-title'>
                        <span>教学环境点评</span>
                        <div class='xingBg star_3'></div>
                    </div>
                    <div class='evaluate-content'>
                        <p class='evaluate-txt'>这里是评价内容这里是评价内容这里是评价内容这里是评价内容这里是评价内容这里是评价内容这里是评价内容这里是评价内容这里是评价内容</p>
                        <div class='list-pic'>
                          <div class='item-pic'>
                            <img src="../../../../static/headPic.jpg" alt="">
                          </div>
                           <div class='item-pic'>
                            <img src="../../../../static/headPic.jpg" alt="">
                          </div>
                           <div class='item-pic'>
                            <img src="../../../../static/headPic.jpg" alt="">
                          </div>
                        </div>
                    </div>
                 </div>
                 <div class='lesson-state'>
                   <div class='title'>上课状态</div>
                   <div class='lesson-state-list'>
                      <div class='list-title'>
                        <div class='lesson-time'>开课时间</div>
                        <div class='lesson-sign'>签到情况</div>
                        <div class='lesson-homework'>作业完成情况</div>
                        <div class='evaluate-homework'>作业点评</div>
                         <div class='operation'>操作</div>
                      </div>
                      <div class='lesson-list'>
                        <div class='lesson-item'>
                          <div class='first-line'>
                             <div class='first-line-time'>2017/10/01</div>
                             <div class='first-line-sign'>已签到</div>
                             <div class='first-line-homework'>已提交</div>
                             <div class='first-line-evaluate-homework'>作业完成的很好</div>
                             <div class='first-line-operation'>我要点评</div>
                          </div>
                          <div class='lesson-item-detail'>
                            <div class='lesson-item-detail-top'>
                              <div class='about-homework'>
                                <p class='title'>作业完成情况</p>
                                <p class='evaluate-txt'>评价作业评价作业评价作业评价作业评价作业评价作业</p>
                                  <div class="img-list " id='wrapper'>  
                                      <ul class='clearfix'>  
                                          <li>
                                            <img src="../../../../static/headPic.jpg" alt="">
                                          </li>  
                                         <li>
                                            <img src="../../../../static/headPic.jpg" alt="">
                                          </li>  
                                         <li>
                                            <img src="../../../../static/headPic.jpg" alt="">
                                          </li>  
                                          <li>
                                            <img src="../../../../static/headPic.jpg" alt="">
                                          </li>  
                                         <li>
                                            <img src="../../../../static/headPic.jpg" alt="">
                                          </li>  
                                         <li>
                                            <img src="../../../../static/headPic.jpg" alt="">
                                          </li>  
                                      </ul>  
                                  </div>  
                              </div>
                              <div class='evaluate-homework'>
                                <div class='title-box'>
                                  <p class='title'>作业点评</p><div class='xingBg star_3'></div>
                                </div> 
                                <el-input
                                  type="textarea"
                                  :maxlength="150"
                                  :minlength="1"
                                  :rows="4"
                                  placeholder="请输入内容"
                                 >
                                </el-input>
                              </div>
                            </div>
                            <div class='lesson-item-detail-bottom'>
                              <div class='evaluate-other'>
                                <div class='title-box'>
                                  <p class='title'>老师点评</p><div class='xingBg star_3'></div>
                                </div> 
                                <p class='evaluate-txt'>123</p>
                                <div class='title-box'>
                                  <p class='title'>课程点评</p><div class='xingBg star_3'></div>
                                </div> 
                                 <p class='evaluate-txt'>123</p>
                              </div>
                              <div class='evaluate-student'>
                                  <div class='title-box'>
                                  <p class='title'>学员课堂点评</p><div class='xingBg star_3'></div>
                                </div> 
                                <el-input
                                  type="textarea"
                                  :maxlength="150"
                                  :minlength="1"
                                  :rows="4"
                                  placeholder="请输入内容"
                                 >
                                </el-input>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class='lesson-item'>
                          <div class='first-line'>
                             <div class='first-line-time'>2017/10/01</div>
                             <div class='first-line-sign'>已签到</div>
                             <div class='first-line-homework'>已提交</div>
                             <div class='first-line-evaluate-homework'>作业完成的很好</div>
                             <div class='first-line-operation'>我要点评</div>
                          </div>
                        </div>
                        <div class='lesson-item'>
                          <div class='first-line'>
                             <div class='first-line-time'>2017/10/01</div>
                             <div class='first-line-sign error'>已签到</div>
                             <div class='first-line-homework'>已提交</div>
                             <div class='first-line-evaluate-homework'>作业完成的很好</div>
                             <div class='first-line-operation'>我要点评</div>
                          </div>
                        </div>
                        <div class='lesson-item'>
                          <div class='first-line'>
                             <p class='noData'>暂无数据</p>
                          </div>
                        </div>
                      </div>
                   </div>
                 </div>
              </div>
          </el-main>
      </el-container>
  </div>
</template>
<script>
import  '@/assets/js/iscroll';

export default {
  data() {
    return {};
  },
  components: {},
  mounted: function() {
    this.$nextTick(function() {
      var myScroll = new IScroll(".img-list", {
        mouseWheel: false,
        scrollbars: false,
        scrollX: true,
        scrollY: false
      });
    });
  },
  beforeCreate: () => {}
};
</script>

<style lang='scss' scoped>
@import "~@/assets/scss/reset.scss";
@import "~@/assets/scss/mixin.scss";
@import "~@/assets/scss/addPage.scss";
@import "~@/assets/scss/ctrPage.scss";
$xing_Bg: "../../../../static/xing.png";
.scroll-view {
  /* -- Attention: This line is extremely important in chrome 55+! -- */
  touch-action: none;
  /* -- Attention-- */
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  height: 30px;
}
.el-main {
  min-width: 800px;
  .contentBox {
    background-color: #fff;
    padding-bottom: 15px;
    .student-info {
      padding: 25px 15px;
      min-height: 30px;
      box-sizing: border-box;
      @include child-center("x");
      justify-content: flex-start;
      .student-headPic {
        display: inline-block;
        width: 100px;
        height: 100px;
        background-color: #586764;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .student-detail {
        flex-grow: 1;
        @include child-center("y");
        margin-left: 12px;
        flex-direction: column;
        height: 100px;
        .student-detail-item {
          position: relative;
          display: inline-block;
          height: 25px;
          line-height: 25px;
          font-size: 13px;
          color: $title-sub-color;
          .item-left {
            display: inline-block;
          }
          .item-right {
            display: inline-block;
          }
          .bigSize {
            font-size: 18px;
          }
        }
      }
      .student-save {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: flex-start;
        .btn-save {
          display: inline-block;
          width: 50px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          border-radius: 3px;
          background-color: #66be74;
          cursor: pointer;
          color: #fff;
          font-size: 13px;
        }
      }
    }
    .class-evaluate {
      margin-top: 20px;
      padding: 0 20px;
      .evaluate-title {
        @include child-center("x");
        height: 26px;
        line-height: 26px;
        font-size: 16px;
        color: $txt-color;
        vertical-align: middle;
        .xingBg {
          margin-left: 8px;
        }
      }
      .evaluate-content {
        margin-top: 10px;
        border: 1px solid #dcdcdc;
        padding: 12px;
        .evaluate-txt {
          font-size: 13px;
          color: $title-sub-color;
        }
        .list-pic {
          margin-top: 15px;
          .item-pic {
            display: inline-block;
            width: 76px;
            height: 76px;
            margin-left: 10px;
            img {
              height: 100%;
              width: 100%;
              background-color: #58676e;
            }
          }
        }
      }
    }
    .lesson-state {
      margin-top: 25px;
      padding: 0 20px;
      .title {
        @include child-center("x");
        height: 26px;
        line-height: 26px;
        font-size: 16px;
        color: $txt-color;
        vertical-align: middle;
      }
      .lesson-state-list {
        margin-top: 15px;
        .list-title {
          color: $txt-color;
          font-weight: 600;
          background-color: #f7f7f7;
          border: 1px solid #dcdcdc;
          font-size: 14px;
          height: 35px;
          display: flex;
          div {
            line-height: 35px;
            text-align: center;
          }
          .lesson-time {
            flex-basis: 200px;
          }
          .lesson-sign {
            flex-basis: 100px;
          }
          .lesson-homework {
            flex-basis: 150px;
          }
          .evaluate-homework {
            flex-basis: 300px;
          }
          .operation {
            flex-grow: 3;
          }
        }
        .lesson-list {
          .lesson-item {
            border: 1px solid #dcdcdc;
            border-top: 0;
            .first-line {
              display: flex;
              border: 1px soldi #dcdcdc;
              border-top: 0;
              background-color: #fff;
              height: 40px;
              font-size: 14px;
              color: $txt-color;
              .noData {
                width: 100%;
                text-align: center;
                line-height: 40px;
              }
              div {
                line-height: 40px;
                text-align: center;
              }
              .first-line-time {
                flex-basis: 200px;
                text-overflow: ellipsis;
              }
              .first-line-sign {
                flex-basis: 100px;
              }
              .first-line-sign.error{
                color:$txt-error-color;
              }
              .first-line-homework {
                flex-basis: 150px;
              }
              .first-line-evaluate-homework {
                flex-basis: 300px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .first-line-operation {
                flex-grow: 3;
              }
            }
            .lesson-item-detail {
              display: flex;
              flex-direction: column;
              border: 1px solid #dcdcdc;
              border-left: 0;
              border-right: 0;
              border-bottom: 0;
              .lesson-item-detail-top {
                display: flex;
                flex-grow: 1;
                border-bottom: 1px solid #dcdcdc;
                div {
                  display: inline-block;
                  width: 50%;
                  padding: 15px 20px;
                  box-sizing: border-box;
                }
                div:first-child {
                  border-right: 1px solid #dcdcdc;
                }
                .about-homework {
                  font-size: 14px;
                  color: $title-sub-color;
                  .img-list {
                    display: inline-block;
                    width: 100%;
                    height: 75px;
                    overflow: hidden;
                    padding: 0;
                    margin-top: 10px;
                    ul {
                      list-style: none;
                      width: 800px;
                      height: 75px;
                      li {
                        display: inline-block;
                        width: 75px;
                        height: 75px;
                        img {
                          width: 100%;
                          height: 100%;
                        }
                      }
                    }
                  }
                }
              }
              .lesson-item-detail-bottom {
                display: flex;
                flex-grow: 1;
                div {
                  display: inline-block;
                  width: 50%;
                  padding: 15px 20px;
                }
                div:first-child {
                  border-right: 1px solid #dcdcdc;
                }
                .evaluate-other{
                  div{
                    border-right: 0;
                  }
                  .title-box{
                    margin-bottom: 14px;
                  }
                  .evaluate-txt{
                    font-size: 13px;
                    color: $title-sub-color;
                    margin-bottom: 20px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                  }
                  .evaluate-txt:last-child{
                     margin-bottom: 0px;
                  }
                }
              }
              div {
                .title {
                  font-size: 14px;
                  font-weight: 600;
                }
                .title-box {
                  @include child-center("x");
                  width:100% !important;
                  height: 26px;
                  padding:0 !important;
                  .title {
                    display: inline-block;
                    font-size: 14px;
                    font-weight: 600;
                  }
                  .xingBg{
                    width:88px;
                    margin-left:10px;
                    padding:0;
                  }
                }
              }
              .el-textarea{
                width:100% !important;
                padding:0 !important;
                margin-top: 8px;
              }
            }
          }
        }
      }
    }
  }
}
.xingBg {
  background: url($xing_Bg) no-repeat;
  background-size: 88px 107px;
  display: inline-block;
  width: 88px;
  height: 26px;
}
.star_0 {
  background-position: 0px -1px;
}
.star_1 {
  background-position: 0px -28px;
}
.star_2 {
  background-position: 0px -55px;
}
.star_3 {
  background-position: 0px -82px;
}
.btn-allocation{
  display: inline-block;
  padding:0 10px;
  color:#fff;
  font-size: 13px;
  background-color: #66c279;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}
</style>
