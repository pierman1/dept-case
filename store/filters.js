export const state = () => ({
  industry: '',
  type: '',
  grid: ''
})

export const mutations = {
  SET_INDUSTRY(state, payload) {
    state.industry = payload
  },
  SET_TYPE(state, payload) {
    state.type = payload
  },
  SET_GRID_TYPE(state, payload) {
    state.grid = payload
  }
}

export const actions = {
  setIndustry({ commit }, query) {
    commit('SET_INDUSTRY', query.industry)
  },
  setType({ commit }, query) {
    commit('SET_TYPE', query.type)
  },
  setGridType({ commit }, query) {
    commit('SET_GRID_TYPE', query.grid)
  }
}
