<template>
  <blockquote>
    <div class="container">
      <p>
        {{ quote }}
      </p>

      <div class="author">
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
  border-top: $dept-border-color 2px solid;

  .container {
    margin-top: 2.5rem;
    margin-bottom: 3.75rem;
    max-width: 47.5rem;

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
}
</style>
