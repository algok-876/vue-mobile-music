// initial state
const state = () => ({
  // 是否显示tabbar
  tabbarVisible: true
})

// mutations
const mutations = {
  changeTabbarVisible (state, visible) {
    state.tabbarVisible = visible
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
