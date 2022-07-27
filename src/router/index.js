import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Find from '@/views/Find'
import News from '@/views/News'
import My from '@/views/My'
import Map from '@/views/Map'
import Area from '@/views/Area'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    name:"layout",
    component: Layout,
    redirect: '/layout/home',
    children: [
      {
        path: 'home',
        name:"home",
        component: Home,
       
      },
      {
        path: 'find',
        name:"find",
        component: Find
      },
      {
        path: 'news',
        name:"news",
        component: News
      },
      {
        path: 'my',
        name:"my",
        component: My
      }
    ]
  },
  {
    path:"/map",
    name:"map",
    component: Map
  },
  {
    path:"/area",
    name:"area",
    component: Area
  }
]
const router = new VueRouter({
  routes
})
export default router

