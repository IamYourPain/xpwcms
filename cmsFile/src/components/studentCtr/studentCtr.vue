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
                prop="name"
                label="所属班级"
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
                label="授课老师"
                >
                </el-table-column>
                 <el-table-column
                  align='center'
                prop="name"
                label="学员电话"
                >
                </el-table-column>
                <el-table-column
                align='center'
                label="操作"
                min-width='160'
                show-overflow-tooltip>
                <template slot-scope="scope">
                    <div class='allocation-time'>
                        <span class='iconBg table-Icon-7'></span>
                        <span>学员详情</span>
                    </div>
                </template>
                </el-table-column>
            </el-table>
        </template>
         <el-button type="text" @click="open3">点击打开 Message Box</el-button>
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
    },
    open3() {
      this.$prompt("班级名称", "修改班级名称", {
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
@import "~@/assets/scss/IconURL.scss";
@import "~@/assets/scss/ctrPage.scss";
.part-right{
    justify-content: flex-start !important;
}
.search{
    margin-left: 15px;
    background-color: #5dbd73;
    color: #fff !important;
    border-color:#5dbd73 !important;
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
