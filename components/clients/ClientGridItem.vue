<template>
  <figure>
    <picture class="client-grid-image">
      <source
        :data-srcset="require(`~/assets/images/clients/${client.image}?webp`)"
        type="image/webp"
      />
      <source
        :data-srcset="require(`~/assets/images/clients/${client.image}`)"
        type="image/png"
      />
      <img
        class="lazyload image"
        :alt="client.name"
        :data-src="require(`~/assets/images/clients/${client.image}`)"
      />
    </picture>
  </figure>
</template>

<script>
export default {
  name: 'ClientGridItem',
  props: {
    client: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.client-grid-image {
  position: relative;
  width: 100%;

  img {
    object-fit: scale-down;
    width: 70%;
    max-height: 80px;
    max-width: 250px;
  }
}

.client-grid__client {
  &:nth-of-type(-n + 10) {
    display: none;
  }

  @include mq($from: tablet) {
    &:nth-of-type(-n + 10) {
      display: initial;
    }
  }
}
</style>
