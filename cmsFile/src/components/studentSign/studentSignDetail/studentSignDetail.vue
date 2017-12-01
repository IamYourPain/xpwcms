<template>
  <el-container class='content'>
    <el-header>
        <div class='top-line'>
            <div class='part-right'>
                <el-dropdown trigger="click" class='fl'>
                    <span class="el-dropdown-link">
                        全部<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>全部</el-dropdown-item>
                        <el-dropdown-item>学生姓名</el-dropdown-item>
                        <el-dropdown-item>所属班级</el-dropdown-item>
                        <el-dropdown-item>报名课程</el-dropdown-item>
                        <el-dropdown-item>授课老师</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <input type="text">
                <span class='search'>搜索</span>
            </div>
             <div class='part-right'>
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
                label="学员姓名"
                >
                <template  slot-scope="scope" >{{ scope.row.name }}</template>
                </el-table-column>
                <el-table-column
                 align='center'
                label="签到情况"
                >
                 <template slot-scope="scope">
                     --
                </template>
                </el-table-column>
                <el-table-column
                 align='center'
                prop="date"
                min-width='160'
                label="签到时间"
                >
                </el-table-column>
                 <el-table-column
                  align='center'
                label="签退情况"
                >
                <template slot-scope="scope">
                <span class='icon_2_Bg gou'></span>
                </template>
                </el-table-column>
                 <el-table-column
                  align='center'
                prop="date"
                label="签退时间"
                 min-width='160'
                 show-overflow-tooltip
                >
                </el-table-column>
               
            </el-table>
        </template>
    </el-main>
    <el-footer>
        <div class="block">
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
      multipleSelection: []
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
    }
  }
};
</script>

<style lang='scss' scoped>
@import "~@/assets/scss/reset.scss";
@import "~@/assets/scss/mixin.scss";
$main-iconBg: "../../../../static/MainIcon.png";
$icon_2_Bg: "../../../../static/sprite_2.png";
//图标精灵图
.iconBg {
  background: url($main-iconBg) no-repeat;
}
.icon_2_Bg {
  background: url($icon_2_Bg) no-repeat;
  background-size: 35px 155px;
}
.gou {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-position: -8px 3px;
}
.cha {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-position: -8px -30px;
}

@import "~@/assets/scss/ctrPage.scss";
.part-right {
  justify-content: flex-start !important;
}
.search {
  margin-left: 15px;
  background-color: #5dbd73;
  color: #fff !important;
  border-color: #5dbd73 !important;
}
.part-right:last-child {
  justify-content: flex-end !important;
  .back-btn {
    display: flex;
    width: 25px;
    height: 20px;
    background: url($main-iconBg) no-repeat;
    background-position: 2px -19px;
    margin-right: 15px;
  }
}
</style>
<style lang='scss'>
//为了覆盖组件的样式
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
