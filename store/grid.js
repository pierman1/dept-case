export const state = () => ({
  gridType: 'grid'
})

export const mutations = {
  SET_GRID_TYPE(state, payload) {
    state.gridType = payload
  }
}
