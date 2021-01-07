import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "global" */ '@/views/Login/Login.vue')
  },
  {
    path: '/403',
    name: '403',
    component: () => import(/* webpackChunkName: "global" */ '@/views/Error/403.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "global" */ '@/views/Error/404.vue')
  },
  {
    path: '/*',
    redirect: '/404'
  }
]
export { routes }
