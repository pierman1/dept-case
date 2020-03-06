<template>
  <button class="btn" :type="type" :class="color">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'button'
    },
    color: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  background-color: $dept-blue;
  color: $dept-white;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.75rem 3.75rem;
  min-height: 3.125rem;
  transition: 250ms background-color;

  &:focus {
    background-color: darken($dept-blue, 20);
    outline: 0;
  }

  &.dark {
    background-color: $brand-color;

    &:focus {
      background-color: $dept-blue;
    }
  }
}
</style>
