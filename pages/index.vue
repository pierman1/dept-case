<template>
  <main>
    <hero />
    <filters />
  </main>
</template>

<script>
import Hero from '~/components/hero/index.vue'
import Filters from '~/components/filters/index.vue'

export default {
  components: {
    Hero,
    Filters
  },
  data() {
    return {
      data: ''
    }
  }
}
</script>
