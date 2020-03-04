export const state = () => ({
  allCases: null,
  loading: false
})

export const mutations = {
  SET_CASES(state, payload) {
    state.allCases = payload
  },
  SET_LOADING(state) {
    state.loading = true
  },
  UNSET_LOADING(state) {
    state.loading = false
  }
}
