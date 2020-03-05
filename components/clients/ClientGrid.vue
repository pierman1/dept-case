<template>
  <div class="client-grid">
    <client-grid-item
      v-for="(client, index) in clients"
      :key="`client_${index}`"
      :client="client"
    />
  </div>
</template>

<script>
import ClientGridItem from './ClientGridItem'

export default {
  name: 'ClientGrid',
  components: {
    ClientGridItem
  },
  computed: {
    clients() {
      return this.$store.state.clients.allClients
    }
  },
  mounted() {
    setInterval(() => {
      this.$store.commit('clients/SHUFFLE')
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.client-grid {
  max-width: 1000px;
  display: grid;
  align-items: start;
  grid-template-columns: 1fr 1fr;

  @include mq($from: mobile) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
  }
}
</style>
