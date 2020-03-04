<template>
  <div>
    <base-header />
    <nuxt />
  </div>
</template>

<script>
import BaseHeader from '@/components/header/BaseHeader.vue'

export default {
  name: 'DefaultLayout',
  components: {
    BaseHeader
  }
}
</script>
