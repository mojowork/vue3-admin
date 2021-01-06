import { RouteRecordRaw } from 'vue-router'
import Loyout from '@/loyout/index.vue'
import { register, AppConfig } from '../index'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/user',
    component: Loyout,
    redirect: to => ({ name: 'userlist', query: { ...to.params } }),
    children: [
      {
        path: '/user/list',
        name: 'userlist',
        component: () => import(/* webpackChunkName: "users" */ '../Users/views/List.vue')
      }
    ]
  }
]

const app: AppConfig = {
  name: 'user',
  routes
}

export function install () {
  register(app)
}
