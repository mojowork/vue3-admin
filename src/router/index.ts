import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { install as appsInstall, gets as getApps } from '@/apps'
import { routes as baseRoutes } from './route-data'

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

export default router
