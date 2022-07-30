import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Find from '@/views/Find'
import News from '@/views/News'
import My from '@/views/My'
import Map from '@/views/Map'
import Area from '@/views/Area'
import Login from '@/views/Login'
import Info from '@/views/Info'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import("@/views/Layout"),
    redirect: '/layout/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import("@/views/Home")
      },
      {
        path: 'find',
        name: 'find',
        component: () => import("@/views/Find")
      },
      {
        path: 'news',
        name: 'news',
        component: () => import("@/views/News")
      },
      {
        path: 'my',
        name: 'my',
        component: () => import("@/views/My")
      }
    ]
  },
  {
    path: '/map',
    name: 'map',
    component: () => import("@/views/Map")
  },
  {
    path: '/area',
    name: 'area',
    component: () => import("@/views/Area")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/Login")
  },
  {
    path: '/info',
    name: 'info',
    component: () => import("@/views/Info")
  }
]
const router = new VueRouter({
  routes
})
export default router
