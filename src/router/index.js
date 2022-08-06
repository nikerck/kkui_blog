import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '@/views/index/indexView'
import LoginRegisterView from '@/views/login/loginRegisterView'
import WirteView from '@/views/wirte/wirteView'
import Content from '@/views/content/contentView'
import Test from '@/views/testVue'



Vue.use(VueRouter)

const routes = [
  {
    path:'/test',
    name:'test',
    component: Test
  },
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
    component:Content
  },
  {
    path:'/about',
    name:'about',
    component:() => import("@/views/about/aboutMe")
  }

]

const router = new VueRouter({
  routes
})

export default router
