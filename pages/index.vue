<template>
  <main>
    <hero />
    <contact />
    <filters />
  </main>
</template>

<script>
import axios from 'axios'
import Hero from '~/components/hero/index.vue'
import Filters from '~/components/filters/index.vue'
import Contact from '~/components/contact/ContactSection.vue'

export default {
  components: {
    Hero,
    Filters,
    Contact
  },
  data() {
    return {
      data: ''
    }
  },
  asyncData({ params, query, store }) {
    return axios
      .get('http://localhost:3000/api/v1/cases', {
        params: query
      })
      .then((res) => {
        console.log('response', res.data.cases)
        store.commit('cases/SET_CASES', res.data.cases)
        return {
          cases: res.data.cases
        }
      })
      .catch((err) => {
        console.log('err', err)
      })
  }
}
</script>
