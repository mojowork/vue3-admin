import { RouteRecordRaw } from 'vue-router'
import Loyout from '@/loyout/index.vue'
import { register, AppConfig } from '../index'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashbord',
    meta: {
      hidden: true
    }
  },
  {
    path: '/dashbord',
    component: Loyout,
    meta: {
      icon: 'el-icon-monitor',
      title: '概览',
      isleaf: true
    },
    redirect: '/dashbord',
    children: [
      {
        path: '/dashbord',
        name: 'Dashbord',
        components: {
          default: () => import(/* webpackChunkName: "dashbord" */ './views/List.vue')
        }
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
