<template>
  <form @formsubmit.prevent="submit">
    <slot />
  </form>
</template>

<script>
export default {
  name: 'Form',
  methods: {
    submit() {
      console.log('submit')
    }
  }
}
</script>
