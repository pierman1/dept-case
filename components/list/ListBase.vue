<template>
  <div class="list">
    <span class="list__title" v-if="title">
      {{ title }}
    </span>
    <ul>
      <li
        class="list__item"
        v-for="(item, index) in items"
        :key="`item_${index}`"
      >
        <a :href="`/${item.target}`">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    title: {
      type: String
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  font-family: Arial;
  font-size: 0.75em;
  font-weight: 700;
  color: $dept-white;
  text-transform: uppercase;

  &__title {
    opacity: 0.5;
  }

  &__item {
    a {
      color: $dept-white;
      background-color: $brand-color;
      padding: 0 0.6875rem 0 0;
      position: relative;
      transition: 250ms padding;

      &:before {
        opacity: 0;
        content: '';
        background-image: url('../../assets/svg/icon-triangle.svg');
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        left: 0;
        height: 9px;
        width: 7px;
        transform: translate(-1rem, -50%);
        pointer-events: none;
        transition: 250ms all;
      }

      &:hover,
      &:focus {
        padding-left: 16px;

        &:before {
          opacity: 1;
          transform: translate(0, -50%);
        }
      }
    }
  }
}
</style>
