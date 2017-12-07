<template>
  <el-container class='content'>
    <el-header>
        <div class='top-line'>
            <div class='part-left'>
                <span class='title'>关联学员</span>
                <div class='time-piceker-box'>
                    <span class='time-picker-title'>支付时间</span>
                    <div class="block time-picker">
                    <el-date-picker
                    v-model="value7"
                    type="daterange"
                    align="right"
                    unlink-panels
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :picker-options="pickerOptions2">
                    </el-date-picker>
                    </div>
                </div>
                <el-button class='addClassBtn' type="primary" icon="el-icon-plus">邀请学员</el-button>
            </div>
            <div class='part-right'>
                <el-dropdown trigger="click" class='fr'>
                    <span class="el-dropdown-link">
                        全部<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>全部</el-dropdown-item>
                        <el-dropdown-item>订单编号</el-dropdown-item>
                        <el-dropdown-item>手机号</el-dropdown-item>
                        <el-dropdown-item>学生姓名</el-dropdown-item>
                        <el-dropdown-item>报名课程</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <input type="text">
                <span class='search'>搜索</span>
                <span class='back-btn'></span>
            </div>
         </div>
    </el-header>
    <el-main>
        <template>
            <el-table
                ref="multipleTable"
                :data="tableData3"
                tooltip-effect="dark"
                max-height='100%;'
                @selection-change="handleSelectionChange">
                <el-table-column
                  align='center'
                type="selection"
                min-width='55'
                >
                </el-table-column>
                <el-table-column
                  align='center'
                label="学员姓名"
                >
                <template  slot-scope="scope" >{{ scope.row.name }}</template>
                </el-table-column>
                <el-table-column
                 align='center'
                prop="name"
                label="订单编号"
               >
                </el-table-column>
                <el-table-column
                 align='center'
                prop="name"
                label="报名课程"
               >
                </el-table-column>
                 <el-table-column
                min-width='120'
                  align='center'
                prop="className"
                label="实收款"
                >
                </el-table-column>
                 <el-table-column
                  align='center'
                prop="name"
                label="手机号"
                >
                </el-table-column>
                 <el-table-column
                align='center'
                prop="date"
                label="付费时间"
                 min-width='160'
               >
                </el-table-column>
            </el-table>
        </template>
         <el-button type="text" @click="open3">点击打开 Message Box</el-button>
    </el-main>
    <el-footer>
         <div class='btn-save'>保存</div>
        <div class="block" style='display:inline-block;float:right;'>
           <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="12"
            layout="total, prev, pager, next"
            :total="1000">
            </el-pagination>
        </div>
    </el-footer>
  </el-container>
</template>

   

<script>
export default {
  components: {},
  data() {
    return {
      isResizable: false,
      tableData3: [
        {
          date: "2016-05-02 12:00:00",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          className: "雅思精品1对11对1"
        },
        {
          date: "2016-05-02 12:00:00",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          className: "雅思精品1对11对1"
        },
        {
          date: "2016-05-02 12:00:00",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          className: "雅思精品1对11对1"
        },
        {
          date: "2016-05-02 12:00:00",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          className: "雅思精品1对11对1"
        },
        {
          date: "2016-05-02 12:00:00",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          className: "雅思精品1对11对1"
        },
        {
          date: "2016-05-02 12:00:00",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          className: "雅思精品1对11对1"
        },
        {
          date: "2016-05-02 12:00:00",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          className: "雅思精品1对11对1"
        },
        {
          date: "2016-05-02 12:00:00",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          className: "雅思精品1对11对1"
        },
        {
          date: "2016-05-02 12:00:00",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          className: "雅思精品1对11对1"
        },
        {
          date: "2016-05-02 12:00:00",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          className: "雅思精品1对11对1"
        },
        {
          date: "2016-05-02 12:00:00",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          className: "雅思精品1对11对1"
        },
        {
          date: "2016-05-02 12:00:00",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          className: "雅思精品1对11对1"
        }
      ],
      multipleSelection: [],
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value6: "",
      value7: ""
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //设置主体内容的高度
    tableHeight() {
      let winH = document.querySelector(".el-main").clientHeight;
      return winH - 66;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    open3() {
      this.$prompt("邀请学员", "学员帐号", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPlaceholder: "班级标题，展示在页面中，请认真填写，最多10个字",
        inputErrorMessage: "请输入正确的班级名称",
        inputValidator: value => {
          let reg = /^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]){1,10}$/;
          if (!value) return "请填写班级名称";
          if (reg.test(value)) return true;
          else return "班级名称可由字母、数字或汉字组成，最长10位";
        }
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的邮箱是: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "~@/assets/scss/reset.scss";
@import "~@/assets/scss/mixin.scss";
@import "~@/assets/scss/ctrPage.scss";
$main-iconBg: "../../../../static/MainIcon.png";
 .back-btn {
    display: inline-block;
    width: 25px;
    height: 20px;
    background: url($main-iconBg) no-repeat;
    background-position: 2px -19px;
    margin-left: 15px;
  }
.top-line {
  .part-left {
    .title {
      display: inline-block;
      color: #222;
      font-size: 13px;
      font-weight: 600;
      line-height: 20px;
    }
  }
}
.time-picker {
  float: left;
}
.time-piceker-box {
  margin-left: 15px;
  .time-picker-title {
    float: left;
    display: inline-block;
    font-size: 13px;
    background-color: #f7f7f7;
    padding: 0px 8px;
    border: 1px solid #dcdcdc;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
  }
}
.btn-save{
    display: inline-block;
    margin-left: 15px;
    padding: 6px 10px;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
    font-size: 13px;
    cursor: pointer;
    background-color: #66bc7b;
    color: #fff;
    border-color: #66bc7b;
    margin-top: 15px;
}
</style>
<style lang='scss'>
//为了覆盖组件的样式
.time-picker {
  display: inline-block;
  .el-date-editor {
    width: 250px;
    height: 30px;
    padding: 2px 10px;
    border-left: 0;
    border-radius: 0;
    .el-range-separator {
      line-height: 25px;
    }
    i {
      line-height: 25px;
    }
    .el-range__close-icon {
      width: 5px;
    }
  }
}
table {
  border-collapse: separate;
}
th {
  background-color: #f7f7f7;
}
.el-table {
  border: 1px solid #e6ebf5;
  border-bottom: 0;
}
.el-pagination {
  margin-top: 10px;
  button {
    border: 1px solid #ddd;
    min-width: 28px;
  }
  ul {
    li {
      border: 1px solid #ddd;
      border-left: 0;
      color: #078ef7;
      font-weight: normal;
      min-width: 28px;
    }
    li:last-child {
      border-right: 0;
    }
    li.active {
      background-color: #078ef7;
      color: #fff;
    }
  }
}
</style>
