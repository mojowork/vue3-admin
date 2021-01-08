import { createRouter, createWebHashHistory, RouteRecordRaw, RouteLocationNormalized } from 'vue-router'
import { install as appsInstall, gets as getApps } from '@/apps'
import { routes as baseRoutes } from './route-data'
import store from '../store'

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: baseRoutes
})

export const appRoutes: RouteRecordRaw[] = []
appsInstall()
getApps().forEach(app => {
  appRoutes.push(...app.routes)
})
appRoutes.forEach(route => {
  router.addRoute(route)
})
export const loginPage = '/login'
export const homePage = '/'
const errorPage = ['403', '/404']
const whitelist = [loginPage, ...errorPage] // 白名单
router.afterEach((to: RouteLocationNormalized) => {
  console.log('afterEach', store)
  if (store.getters['user/accessToken']) {
    if (to.path === loginPage) {
      router.push({ path: homePage })
    }
  } else {
    if (!~whitelist.indexOf(to.path)) {
      router.push({ path: loginPage })
    }
  }
})
// router.afterEach(() => {
// })

export default router
