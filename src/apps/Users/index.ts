import { RouteRecordRaw } from 'vue-router'
import Loyout from '@/loyout/index.vue'
import { register, AppConfig } from '../index'
const routes: Array<RouteRecordRaw> = [

  {
    path: '/user',
    component: Loyout,
    meta: {
      icon: 'el-icon-user',
      title: '用户'
    },
    redirect: '/user/list',
    children: [
      {
        path: '/user/list',
        name: 'userlist',
        meta: {
          title: '用户列表'
        },
        component: () => import(/* webpackChunkName: "users" */ './views/List.vue')
      },
      {
        path: '/user/detail',
        name: 'userdetail',
        meta: {
          title: '用户详情'
        },
        component: () => import(/* webpackChunkName: "users" */ './views/Detail.vue')
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
