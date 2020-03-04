<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form ref="form" class="form" @submit.prevent="handleSubmit(submit)">
      <slot />
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  name: 'Form',
  components: {
    ValidationObserver
  },
  methods: {
    submit(e) {
      console.log('hierooo', e)
      this.$emit('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;

  @include mq($from: tablet) {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
