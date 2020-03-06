<template>
  <main>
    <hero :visible="visible" :data="featuredCase" />
    <filters />
    <grid v-if="$store.state.filters.grid === 'grid'" />
    <grid-list v-else />
    <clients />
    <contact />
  </main>
</template>

<script>
import axios from 'axios'
import Hero from '~/components/hero/index.vue'
import Filters from '~/components/filters/index.vue'
import Contact from '~/components/contact/ContactSection.vue'
import Grid from '~/components/grid/index.vue'
import GridList from '~/components/grid/GridList.vue'
import Clients from '~/components/clients/ClientSection.vue'
import { API_URL } from '@/helpers/api.js'

export default {
  components: {
    Hero,
    Filters,
    Contact,
    Grid,
    GridList,
    Clients
  },
  data() {
    return {
      data: '',
      visible: false
    }
  },
  asyncData({ params, query, store }) {
    return axios
      .all([
        axios.get(`${API_URL}/api/v1/cases`),
        axios.get(`${API_URL}/api/v1/clients`)
      ])
      .then(
        axios.spread((cases, clients) => {
          store.commit('cases/SET_CASES', cases.data.cases)
          store.commit('cases/SET_CASES', cases.data.cases)
          store.commit('clients/SET_CLIENTS', clients.data.clients)

          return {
            featuredCase: cases.data.featured,
            cases: cases.data.cases
          }
        })
      )
      .catch((err) => {
        console.error('err', err)
      })
  },
  mounted() {
    this.visible = true
  }
}
</script>
