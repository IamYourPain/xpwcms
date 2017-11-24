import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//路由懒加载

//主页
const Index = (resolve) => {
  import('@/components/index/index').then((module) => {
    resolve(module)
  })
}
//班级管理 classCtr
const classCtr=(resolve)=>{
  import('@/components/classCtr/classCtr').then((module)=>{
    resolve(module)
  })
}
//新增学校
const addClass=(resolve)=>{
  import('@/components/classCtr/addClass/addClass').then((module)=>{
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
      path:'/index',
      component:Index,
      redirect: '/addClass',
      children: [
        {
          //学校管理
          path: '/classctr',
          component: classCtr
        },
        {
          //新增学校
          path: '/addClass',
          component: addClass
        }
      ]
    }
  ]
})
