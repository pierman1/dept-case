export const state = () => ({
  industry: 'all industry',
  type: 'all type',
  grid: 'grid'
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
    if (query.industry) {
      commit('SET_INDUSTRY', query.industry)
    }
  },
  setType({ commit }, query) {
    if (query.type) {
      commit('SET_TYPE', query.type)
    }
  },
  setGridType({ commit }, query) {
    if (query.grid) {
      commit('SET_GRID_TYPE', query.grid)
    }
  }
}
