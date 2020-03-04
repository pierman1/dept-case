<template>
  <section class="contact-section">
    <div class="container">
      <contact-form />
    </div>
  </section>
</template>

<script>
import ContactForm from './ContactForm'

export default {
  name: 'ContactSection',
  components: {
    ContactForm
  }
}
</script>

<style lang="scss" scoped>
.contact-section {
}
</style>
