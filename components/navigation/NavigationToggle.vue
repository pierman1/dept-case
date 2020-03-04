<template>
  <button
    class="navigation-toggle"
    :class="{
      'navigation-toggle--active': menuOpen
    }"
    @click="$store.commit('menu/TOGGLE_MENU')"
  >
    <span>Menu</span>
    <div class="toggle">
      <span class="toggle__bar"></span>
      <span class="toggle__bar"></span>
    </div>
  </button>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavigationToggle',
  computed: mapState({
    menuOpen: (state) => state.menu.menuOpen
  })
}
</script>

<style lang="scss" scoped>
.navigation-toggle {
  font-size: 1.125rem;
  font-family: inherit;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.5rem;
  position: relative;
  z-index: 99;

  .toggle {
    position: relative;
    width: 20px;
    height: 15px;

    &__bar {
      position: absolute;
      height: 2px;
      width: 100%;
      background-color: $brand-color;

      &:nth-child(2) {
        top: 7px;
      }
    }
  }

  &--active {
    color: $dept-white;

    .toggle {
      &__bar {
        background-color: $dept-white;

        &:nth-child(1) {
          transform: rotate(45deg);
          top: 5px;
        }

        &:nth-child(2) {
          transform: rotate(-45deg);
          top: 5px;
        }
      }
    }
  }
}
</style>
