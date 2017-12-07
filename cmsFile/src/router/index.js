import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//路由懒加载

//主页
const Index = (resolve) => {
  import ('@/components/index/index').then((module) => {
    resolve(module)
  })
}
//班级管理 classCtr
const classCtr = (resolve) => {
  import ('@/components/classCtr/classCtr').then((module) => {
    resolve(module)
  })
}
//新增学校
const addClass = (resolve) => {
  import ('@/components/classCtr/addClass/addClass').then((module) => {
    resolve(module)
  })
}
//老师管理
const teacherCtr = (resolve) => {
  import ('@/components/teacherCtr/teacherCtr').then((module) => {
    resolve(module)
  })
}
//新增老师
const addTeacher = (resolve) => {
  import ('@/components/teacherCtr/addTeacher/addNewTeacher').then((module) => {
    resolve(module)
  })
}
//学生管理
const studentCtr = (resolve) => {
  import ('@/components/studentCtr/studentCtr').then((module) => {
    resolve(module)
  })
}
//学生详情
const studentDetail = (resolve) => {
  import ('@/components/studentCtr/studentDetail/studentDetail').then((module) => {
    resolve(module)
  })
}
//学员签到
const studentSign  = (resolve) => {
  import ('@/components/studentSign/studentSign').then((module) => {
    resolve(module)
  })
}
//学员签到详情
const studentSignDetail  = (resolve) => {
  import ('@/components/studentSign/studentSignDetail/studentSignDetail').then((module) => {
    resolve(module)
  })
}
//发布作业
const releaseHomework  = (resolve) => {
  import ('@/components/releaseHomework/releaseHomework').then((module) => {
    resolve(module)
  })
}
//学生分配
const alotStudent  = (resolve) => {
  import ('@/components/studentCtr/alotStudent/alotStudent').then((module) => {
    resolve(module)
  })
}
//分配时间
const allocateTime  = (resolve) => {
  import ('@/components/classCtr/allocateTime/allocateTime').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    //根路径
    {
      path: '/',
      redirect: '/index',
      component: Index,
    },
    //首页
    {
      path: '/index',
      component: Index,
      redirect: '/allocateTime',
      children: [{
          //学校管理
          path: '/classctr',
          component: classCtr
        },
        {
          //新增学校
          path: '/addClass',
          component: addClass
        },
        {
          //老师管理
          path: '/teacherCtr',
          component: teacherCtr
        },
        {
          //新增老师
          path: '/addTeacher',
          component: addTeacher
        },
        {
         //学生管理
          path: '/studentCtr',
          component: studentCtr
        },
        {
          //学生详情
          path: '/studentDetail',
          component: studentDetail
        },
        {
          //学生签到
          path: '/studentSign',
          component: studentSign
        },
        {
          //学生签到详情
          path: '/studentSignDetail',
          component: studentSignDetail
        },
        {
          //发布作业
          path: '/releaseHomework',
          component: releaseHomework
        },
        {
          //学生分配
          path: '/alotStudent',
          component: alotStudent
        },
        {
          //分配时间
          path: '/allocateTime',
          component: allocateTime
        }
      ]
    }
  ]
})
