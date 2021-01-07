import { RouteRecordRaw } from 'vue-router'
import { install as userInstall } from './Users'
import { install as dashbordInstall } from './Dashbord'

export interface AppConfig {
  name: string;
  routes: RouteRecordRaw[];
  module?: {};
  locales?: {};
}

const APPS: AppConfig[] = []

export function register (app: AppConfig) {
  APPS.push(app)
}

export function gets (): AppConfig[] {
  return APPS
}

let isInstall = false
export function install () {
  if (!isInstall) {
    dashbordInstall()
    userInstall()
  }
  isInstall = true
}
