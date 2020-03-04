<template>
  <button class="btn" :type="type">
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
}
</style>
