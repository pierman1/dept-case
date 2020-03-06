<template>
  <div class="client-grid">
    <client-grid-item
      class="grid-item"
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
  }
}
</script>

<style lang="scss" scoped>
.client-grid {
  max-width: 1000px;
  display: grid;
  align-items: start;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @include mq($from: tablet) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
  }

  .grid-item {
    display: none;

    &:nth-child(-n + 6) {
      display: initial;
    }

    @include mq($from: tablet) {
      display: initial;
    }
  }
}
</style>
