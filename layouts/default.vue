<template>
  <div>
    <base-header />
    <transition name="fade">
      <nuxt />
    </transition>
    <base-footer />
  </div>
</template>

<script>
import BaseHeader from '@/components/header/BaseHeader.vue'
import BaseFooter from '@/components/footer/BaseFooter.vue'
import ogImage from '@/assets/images/share-image.jpg'

export default {
  name: 'DefaultLayout',
  components: {
    BaseHeader,
    BaseFooter
  },
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.BASE_URL + ogImage
        }
      ]
    }
  }
}
</script>
