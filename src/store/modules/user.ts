import { getToken, setToken, rmToken } from '@/utils/token'
const state = {
  accessToken: getToken(),
  username: ''
}
type stateType = typeof state;

const getters = {
  accessToken: (state: stateType) => state.accessToken,
  username: (state: stateType) => state.username
}
const mutations = {
  setAccessToken (state: stateType, accessToken: string) {
    state.accessToken = accessToken
    setToken(accessToken)
  },
  clearAccessToken (state: stateType) {
    state.accessToken = ''
    rmToken()
  },
  setUsername (state: stateType, username: string) {
    state.username = username
  }
}
const actions = {
  async LOGIN ({ commit }: { commit: Function }) {
    // TODO 这里访问接口，获取登录信息
    const { data } = { data: { token: 'xxxxx-xxxxx-xxxxxx', username: 'chaos' } }
    console.log('LOGIN', data.token)
    commit('setAccessToken', data.token)
  },
  async GET_USER_INFO ({ commit }: { commit: Function }) {
    // TODO 这里访问接口，获取登录用户信息
    const { data } = { data: { username: 'chaos', roles: [/* 权限信息 */] } }
    commit('setUsername', data.username)
  },
  async LOGOUT ({ commit }: { commit: Function }) {
    // TODO 这里访问接口，登出
    commit('clearAccessToken')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
