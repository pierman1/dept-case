export const state = () => ({
  allClients: null
})

export const mutations = {
  SET_CLIENTS(state, payload) {
    state.allClients = payload
  }
}
