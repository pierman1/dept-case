<template>
  <section class="client-section">
    <div class="container container--flex">
      <h2 class="title">
        Clients
      </h2>
      <p>
        We value a great working relationship with our clients above all else.
        It’s why they often come to our parties. It’s also why we’re able to
        challenge and inspire them to reach for the stars.
      </p>
      <client-grid class="client-grid" />
    </div>
  </section>
</template>

<script>
import ClientGrid from '@/components/clients/ClientGrid'

export default {
  name: 'ClientSection',
  components: {
    ClientGrid
  }
}
</script>

<style lang="scss" scoped>
.client-section {
  text-align: center;
  background-color: $dept-light-blue;
  padding-bottom: 2.375rem;

  @include mq($from: tablet) {
    padding-bottom: 6.25rem;
  }

  .title {
    font-weight: 400;
    font-size: 1.875rem;
    text-transform: uppercase;
    margin-bottom: 1.125rem;

    @include mq($from: mobile) {
      font-size: 3.75rem;
    }
  }

  p {
    font-family: 'Arial';
    font-size: 1rem;
    max-width: 550px;
    margin: 0 auto;
  }

  .container--flex {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .client-grid {
    margin-top: 3.75rem;

    @include mq($from: mobile) {
      margin-top: 5.125rem;
    }
  }
}
</style>
