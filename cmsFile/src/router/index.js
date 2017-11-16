import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//路由懒加载
const Index = (resolve) => {
  import('@/components/index/index').then((module) => {
    resolve(module)
  })
}
export default new Router({
  routes: [
    //根路径
    {
      path: '/',
      name: '/index',
      component: Index
    },
    //首页
    {
      path:'/index',
      component:Index
    }
  ]
})
