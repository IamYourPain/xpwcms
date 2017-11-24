<template>
  <el-container class='content'>
    <el-header>
        <div class='top-line'>
        <div class='btn-group'>
            <span class='iconBg icon_1 icon'></span>
            <span class='iconBg icon_2 icon'></span>
        </div>
       <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                全部状态<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>全部状态</el-dropdown-item>
                <el-dropdown-item>开课中</el-dropdown-item>
                <el-dropdown-item>已结束</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <el-button class='addClassBtn' type="primary" icon="el-icon-plus">新建班级</el-button>
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
                label="班级名称"
                >
                <template  slot-scope="scope" >{{ scope.row.name }}</template>
                </el-table-column>
                <el-table-column
                  align='center'
                min-width='50'
                >
                 <template slot-scope="scope">
                    <span class='iconBg table-Icon-1'></span>
                </template>
                </el-table-column>
                <el-table-column
                 align='center'
                prop="name"
                label="当前状态"
               >
                </el-table-column>
                <el-table-column
                 align='center'
                prop="name"
                label="授课老师"
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
                    <span class='iconBg table-Icon-2'></span>
                    <span class='iconBg table-Icon-3'></span>
                    <span class='iconBg table-Icon-4'></span>
                    <div class='allocation-time'>
                        <span class='iconBg table-Icon-5'></span>
                        <span>分配时间</span>
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
        this.$prompt('班级名称', '修改班级名称', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPlaceholder:'班级标题，展示在页面中，请认真填写，最多10个字',
          inputErrorMessage: '请输入正确的班级名称',
          inputValidator:(value)=>{
            let reg=/^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]){1,10}$/;
              if(!value)
                return '请填写班级名称'
              if(reg.test(value))
                return true;
              else 
                return '班级名称可由字母、数字或汉字组成，最长10位';    
          }
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
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

.el-container {
  padding-top: 0;
}
.content {
  .top-line {
    background-color: #fff;
    box-shadow: 0px 0px 2px 0px rgba(84, 107, 107, 0.4);
    padding: 10px 20px;
    padding-right:0;
    border: 1px solid #d9d9d9;
    border-top: 0;
    @include child-center("x");
    .btn-group {
      display: inline-block;
      .icon {
        padding: 8px;
        border: 1px solid #dcdcdc;
        float: left;
      }
      .icon_1 {
        display: inline-block;
        width: 12px;
        height: 12px;
        background-position: 3px -38px;
      }
      .icon_2 {
        display: inline-block;
        width: 12px;
        height: 12px;
        background-position: 3px -61px;
        border-left: 0;
      }
    }
    .el-dropdown {
      margin-left: 5px;
      height: 30px;
      line-height: 30px;
      border: 1px solid #dcdcdc;
      box-sizing: border-box;
      padding: 0 5px;
    }
  }
}
.el-dropdown-menu {
  li {
    padding: 0 5px;
  }
}
.addClassBtn {
  background-color: #6ebb77;
  margin-left: 5px;
  padding: 0 5px;
  font-size: 14px;
  line-height: 30px;
}
.table-Icon-1{
    display: inline-block;
    width: 20px;
    height:20px;
    background-position:0 -106px;
}
.table-Icon-2{
    display: inline-block;
    width: 20px;
    height:20px;
    background-position:0 -130px;
}
.table-Icon-3{
    display: inline-block;
    width: 20px;
    height:20px;
    background-position:0 -175px;
}
.table-Icon-3.active{
    display: inline-block;
    width: 20px;
    height:20px;
    background-position:0 -153px;
}
.table-Icon-4{
    display: inline-block;
    width: 20px;
    height:20px;
    background-position:0 -85px;
}
.table-Icon-5{
    display: inline-block;
    width: 20px;
    height:20px;
    background-position:0 -198px;
}
.allocation-time{
    display: inline-block;
    cursor: pointer;
    padding:1px 8px 1px 5px;
    border-radius: 3px;
    border:1px solid #ddd;
    span:last-child{
       position: relative;
       top:-2px;
    }
}
.el-pagination{
    display: inline-block;
    float: right;
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

