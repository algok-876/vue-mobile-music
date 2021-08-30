import customStorage from '@/utils/customStorage'

// initial state
const state = () => ({
  // 正在登录的手机号
  inputPhone: customStorage.getItem('inputphone') || ''
})

// getters
const getters = {
  /* cartProducts: (state, getters, rootState) => {
  } */
}

// actions
const actions = {
  /* example
  addProductToCart ({ state, commit }, product) {
  } */
}

// mutations
const mutations = {
  // 改变输入电话号码
  changeInputPhone (state, phone) {
    customStorage.setItem('inputphone', phone)
    state.inputPhone = phone
  },
  // 清空输入电话号码
  clearInputPhone (state) {
    state.inputPhone = ''
    customStorage.removeItem('inputphone')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
