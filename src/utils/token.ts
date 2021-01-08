
// https://www.npmjs.com/package/js-cookie

import Cookies from 'js-cookie'
const ACCESS_TOKEN = 'accessToken'

export function getToken () {
  return Cookies.get(ACCESS_TOKEN)
}
export function setToken (token: string) {
  return Cookies.set(ACCESS_TOKEN, token)
}

export function rmToken () {
  return Cookies.remove(ACCESS_TOKEN)
}
