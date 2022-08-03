import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/Layout'),
    redirect: '/layout/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home')
      },
      {
        path: 'find',
        name: 'find',
        component: () => import('@/views/Find')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/views/News')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/My')
      }
    ]
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/Map')
  },
  {
    path: '/area',
    name: 'area',
    component: () => import('@/views/Area')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import('@/views/Info')
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import('@/views/Collect')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('@/components/Details')
  }
]
const router = new VueRouter({
  routes
})
export default router
