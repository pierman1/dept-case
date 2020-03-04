<template>
  <header
    class="base-header"
    :class="{ 'base-header--small': !showNavbar && !menuOpen }"
  >
    <div class="container">
      <div class="base-header__container">
        <logo class="logo" />
        <navigation-toggle />
      </div>
    </div>
    <base-navigation />
  </header>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '@/components/logo/BaseLogo.vue'
import NavigationToggle from '@/components/navigation/NavigationToggle.vue'
import BaseNavigation from '@/components/navigation/Navigation.vue'

export default {
  name: 'BaseHeader',
  components: {
    Logo,
    NavigationToggle,
    BaseNavigation
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollTriggerDistance: 100
    }
  },
  computed: mapState({
    menuOpen: (state) => state.menu.menuOpen
  }),
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop

      if (currentScrollPosition < 0) {
        return
      }

      if (
        Math.abs(currentScrollPosition - this.lastScrollPosition) <
        this.scrollTriggerDistance
      ) {
        return
      }

      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style lang="scss">
.base-header {
  background-color: $dept-white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  overflow: visible;

  @include mq($from: mobile) {
    background-color: transparent;
  }

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    transition: 250ms;

    @include mq($from: mobile) {
      padding: 3.75rem 0 1.5625rem 0;
      border-bottom: 2px solid $brand-color;
    }
  }
}
</style>

<style lang="scss">
@include mq($from: mobile) {
  .base-header {
    &--small {
      background-color: $dept-white;
      .base-header__container {
        padding: 1rem 0;
        border-bottom: 1px solid #f3f6f6;
      }

      .logo {
        .base-logo {
          width: 55px;
        }
      }
    }
  }
}
</style>
