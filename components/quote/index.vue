<template>
  <blockquote>
    <div class="container">
      <p v-animate="'slide-in'">
        {{ quote }}
      </p>

      <div class="author" v-animate="'slide-in'">
        <span>
          {{ author.name }}
        </span>
        -
        <span>
          {{ author.role }}
        </span>
      </div>
    </div>
  </blockquote>
</template>

<script>
export default {
  name: 'Quote',
  props: {
    quote: {
      type: String,
      required: true
    },
    author: {
      name: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
blockquote {
  width: 100%;
  margin: 0 auto;
  border-top: $dept-border-color-light 2px solid;

  .container {
    margin-top: 2.25rem;
    margin-bottom: 3.75rem;
    max-width: 47.5rem;
    overflow: hidden;
    padding: 0;

    @include mq($from: mobile) {
      margin-top: 5rem;
      margin-bottom: 5rem;
    }
  }

  p {
    color: $text-color-secondary;
    position: relative;
    font-size: 1.5rem;

    @include mq($from: mobile) {
      font-size: 2.25rem;
    }

    &:before {
      content: '“';
    }

    &:after {
      content: '”';
    }
  }

  .author {
    color: $text-color-secondary;
    font-family: 'Arial';
    font-size: 0.8125rem;
    font-weight: 600;
    text-transform: uppercase;
  }
}
</style>
