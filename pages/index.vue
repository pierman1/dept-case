<template>
  <main>
    <hero />
    <figure class="picture">
      <picture>
        <source src="~assets/images/florensis.png?webp" type="image/webp" />
        <source src="~assets/images/florensis.png" type="image/png" />
        <img
          src="~assets/images/florensis.png"
          class="lazyload"
          alt="Alternate text for the image"
        />
      </picture>
    </figure>
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
