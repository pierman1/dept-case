<template>
  <div class="footer-menu">
    <ul class="footer-menu__list">
      <li v-for="(item, index) in items" :key="`footer_${index}`">
        <nuxt-link :to="`/${item.target}`">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Work',
          target: '/'
        },
        {
          title: 'Service',
          target: '/'
        },
        {
          title: 'Stories',
          target: '/'
        },
        {
          title: 'About',
          target: '/'
        },
        {
          title: 'Careers',
          target: '/'
        },
        {
          title: 'Contact',
          target: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-menu {
  font-size: 2rem;

  @include mq($from: mobile) {
    font-size: 1rem;
  }

  a {
    color: $dept-white;
    text-transform: uppercase;
  }

  &__list {
    display: flex;
    flex-direction: column;

    @include mq($from: mobile) {
      flex-direction: row;
    }

    li {
      margin-right: 1.625rem;
      margin-bottom: 4px;
    }
  }
}
</style>
