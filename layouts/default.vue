<template>
  <div>
    <base-header />
    <nuxt />
    <base-footer />
  </div>
</template>

<script>
import BaseHeader from '@/components/header/BaseHeader.vue'
import BaseFooter from '@/components/footer/BaseFooter.vue'

export default {
  name: 'DefaultLayout',
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>
