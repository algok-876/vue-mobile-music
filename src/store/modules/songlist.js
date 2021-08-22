// initial state
const state = () => ({
  currentSongs: []
})

// getters
const getters = {
  currentSongs: (state, getters, rootState) => {
    return state.currentSongs.map(song => ({
      id: song.id,
      name: song.name,
      singer: song.ar[0].name,
      album: song.al.name
    }))
  }
}

// actions
const actions = {
  /* example
  addProductToCart ({ state, commit }, product) {
  } */
}

// mutations
const mutations = {
  pushCurrentSongs (state, songs) {
    state.currentSongs.push(...songs)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
