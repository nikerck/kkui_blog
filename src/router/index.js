import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '@/views/index/indexView'
import LoginRegisterView from '@/views/login/loginRegisterView'
import WirteView from '@/views/wirte/wirteView'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path:'/login',
    name:'login',
    component:LoginRegisterView
  },
  {
    path:'/wirte',
    name:'wirte',
    component:WirteView
  },
  {
    path:'/content',
    name:'content',
    component:() => import('@/views/content/contentView')
  }

]

const router = new VueRouter({
  routes
})

export default router
