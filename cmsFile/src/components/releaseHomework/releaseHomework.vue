<template>
  <el-container class='content'>
    <el-header>
        <div class='top-line'>
          <div class='part-left'>
            <span>发布作业-2017年11月24日</span>
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
                label="班级名称"
                >
                <template  slot-scope="scope" >{{ scope.row.name }}</template>
                </el-table-column>
                <el-table-column
                 align='center'
                prop="name"
                label="上课老师"
               >
                </el-table-column>
                 <el-table-column
                min-width='120'
                  align='center'
                prop="className"
                label="授课名称"
                >
                </el-table-column>
                 <el-table-column
                  align='center'
                prop="name"
                label="班级人数"
                >
                </el-table-column>
                 <el-table-column
                align='center'
                prop="date"
                label="最近上课时间"
                 min-width='160'
               >
                </el-table-column>
                <el-table-column
                align='center'
                label="操作"
                min-width='160'
                show-overflow-tooltip>
                <template slot-scope="scope">
                    <div class='allocation-time'>
                        <span class='iconBg table-Icon-6'></span>
                        <span>发布作业</span>
                    </div>
                </template>
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
          date: "--",
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
  }
     
};
</script>

<style lang='scss' scoped>
@import "~@/assets/scss/reset.scss";
@import "~@/assets/scss/mixin.scss";
@import "~@/assets/scss/IconURL.scss";
@import "~@/assets/scss/ctrPage.scss";
.top-line{
    height: 50px;
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
.el-pagination{
    margin-top:10px;
    button{
        border:1px solid #ddd;
         min-width: 28px;
    }
    ul{
        li{
            border:1px solid #ddd;
            border-left:0;
            color:#078ef7;
            font-weight:normal;
            min-width: 28px;
        }
        li:last-child{
            border-right:0;
        }
        li.active{
            background-color:#078ef7;
            color:#fff;
        }
    }
}
</style>

