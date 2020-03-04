<template>
  <section class="contact-section">
    <div class="container">
      <div class="inner">
        <div class="col">
          <h3 class="title title--xl">
            Question? We are here to help!
          </h3>
        </div>
        <div class="col">
          <contact-form />
        </div>
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
    line-height: 1;
    text-transform: uppercase;
    margin: 0;
    text-align: center;
    margin-bottom: 1.75rem;

    @include mq($from: tablet) {
      text-align: left;
    }

    &--xl {
      font-size: 1.875rem;
      font-weight: 400;

      @include mq($from: tablet) {
        font-size: 3.75rem;
      }
    }

    @include mq($from: tablet) {
      max-width: 300px;
    }
  }

  .inner {
    display: flex;
    flex-direction: column;

    @include mq($from: tablet) {
      flex-direction: row;
      max-width: 1000px;
    }
  }

  .col {
    width: 100%;

    @include mq($from: tablet) {
      width: 35%;
      flex-direction: row;

      &:nth-child(2) {
        width: 65%;
      }
    }
  }
}
</style>
