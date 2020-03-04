<template>
  <section class="contact-section">
    <div class="container container--flex">
      <div class="col">
        <h3 class="title title--xl">
          Question? We are here to help!
        </h3>
      </div>
      <div class="col">
        <contact-form />
      </div>
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
  margin: 2.5rem 0 4rem 0;

  @include mq($from: tablet) {
    margin: 4.875rem 0 5rem 0;
  }

  .title {
    max-width: 300px;
    line-height: 1;
    text-transform: uppercase;
    margin: 0;

    &--xl {
      font-size: 3.75rem;
      font-weight: 400;
    }
  }

  .container--flex {
    display: flex;
    flex-direction: column;

    @include mq($from: tablet) {
      flex-direction: row;
    }
  }

  .col {
    width: 100%;

    @include mq($from: tablet) {
      width: 50%;
      flex-direction: row;
    }
  }
}
</style>
