import { phoneLogin, loginStatus } from '@/api/user'
import customStorage from '@/utils/customStorage'

// initial state
const state = () => ({
  // 用户信息
  profile: null,
  // 帐号信息
  account: null,
  // 登录状态
  logined: false
})

// getters
const getters = {
  logined: (state) => {
    return state.logined
  }
}

// actions
const actions = {
  // 用户登录
  phoneLogin ({ commit }, params) {
    return new Promise((resolve, reject) => {
      console.log(params)
      phoneLogin(params).then(res => {
        commit('changeProfile', res.profile)
        commit('changeAccount', res.account)
        commit('changeLogined', true)
        customStorage.setItem('cookie', res.cookie)
        resolve(res)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  // 用户登录状态
  loginStatus ({commit}) {
    loginStatus().then(res => {
      if (res.data.account && res.data.profile) {
        commit('changeProfile', res.data.profile)
        commit('changeAccount', res.data.account)
        commit('changeLogined', true)
      }
    })
  },

  // 用户退出登录
  logout ({commit}) {
    customStorage.clear()
    commit('changeProfile', '')
    commit('changeAccount', '')
    commit('changeLogined', false)
  }
}

// mutations
const mutations = {
  changeProfile (state, profile) {
    state.profile = profile
  },
  changeAccount (state, account) {
    state.account = account
  },
  changeLogined (state, logined) {
    state.logined = logined
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
