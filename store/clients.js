// import Vue from 'vue'

export const state = () => ({
  allClients: null
})

function arrayMove(arr, oldIndex, newIndex) {
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0])
  return arr
}

export const mutations = {
  SET_CLIENTS(state, payload) {
    state.allClients = payload
  },
  SHUFFLE(state) {
    console.log(Math.floor(Math.random() * state.allClients.length))

    arrayMove(
      state.allClients,
      Math.floor(Math.random() * state.allClients.length),
      Math.floor(Math.random() * state.allClients.length)
    )
  }
}
