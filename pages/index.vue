<template>
  <main>
    <hero />
  </main>
</template>

<script>
import Hero from '~/components/hero/index.vue'

export default {
  components: {
    Hero
  },
  data() {
    return {
      data: ''
    }
  }
}
</script>
