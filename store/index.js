export const actions = {
  nuxtServerInit({ commit, dispatch }, ctx) {
    dispatch('filters/setGridType', ctx.query)
    dispatch('filters/setIndustry', ctx.query)
    dispatch('filters/setType', ctx.query)
  }
}
