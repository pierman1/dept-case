<template>
  <transition name="fade">
    <div v-if="menuOpen" class="navigation">
      <div class="container container--scroll">
        <nav class="navigation__nav">
          <ul>
            <transition-group
              name="list"
              appear
              :style="{ '--total': menuItems.length }"
            >
              <li v-for="(item, index) in menuItems" :key="`item_${index}`">
                <nuxt-link :to="item.target">
                  <span>
                    {{ item.title }}
                  </span>
                </nuxt-link>
              </li>
            </transition-group>
          </ul>
        </nav>

        <div class="aside">
          <list-base
            class="socials"
            title="Landen"
            :items="[
              {
                title: 'Global',
                target: '/facebook'
              },
              {
                title: 'Nederland',
                target: '/twitter'
              },
              {
                title: 'United States',
                target: '/instagram'
              },
              {
                title: 'Ireland',
                target: '/linkedin'
              },
              {
                title: 'United Kingdom',
                target: '/linkedin'
              },
              {
                title: 'Deutschland',
                target: '/linkedin'
              },
              {
                title: 'Schweiz',
                target: '/linkedin'
              }
            ]"
          />
          <list-base
            class="socials"
            :items="[
              {
                title: 'Facebook',
                target: '/facebook'
              },
              {
                title: 'Twitter',
                target: '/twitter'
              },
              {
                title: 'Instagram',
                target: '/instagram'
              },
              {
                title: 'LinkedIn',
                target: '/linkedin'
              }
            ]"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import ListBase from '@/components/list/ListBase'

export default {
  name: 'Navigation',
  components: {
    ListBase
  },
  data() {
    return {
      showMenuItems: false,
      menuItems: [
        {
          title: 'Home',
          target: '/'
        },
        {
          title: 'Werk',
          target: '/work'
        },
        {
          title: 'Over',
          target: '/over'
        },
        {
          title: 'Diensten',
          target: '/diensten'
        },
        {
          title: 'Partners',
          target: '/partners'
        },
        {
          title: 'Stories',
          target: '/stories'
        },
        {
          title: 'Vacatures',
          target: '/vacatures'
        },
        {
          title: 'Events',
          target: '/events'
        },
        {
          title: 'Contact',
          target: '/contact'
        }
      ]
    }
  },
  computed: mapState({
    menuOpen: (state) => state.menu.menuOpen
  }),
  mounted() {
    document.addEventListener(
      'keyup',
      (e) => {
        if ((e.key === 'Escape') | (e.code === 'Escape')) {
          this.$store.commit('menu/CLOSE_MENU')
        }
      },
      true
    )

    this.$nextTick(() => {
      this.showMenuItems = true
    })
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  z-index: 11;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: $brand-color;
  overflow-y: scroll;

  @include mq($from: wide) {
    &:before {
      content: '';
      position: fixed;
      z-index: 9;
      min-height: 100vh;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      box-shadow: 0 0 0 20px #fff inset;
      pointer-events: none;
    }
  }

  &:before {
    content: '';
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    height: 100px;
    background: linear-gradient(
      to bottom,
      $brand-color 0%,
      rgba(0, 0, 0, 0) 200px
    );
    pointer-events: none;
  }

  &:after {
    content: '';
    position: fixed;
    z-index: 9;
    width: 100%;
    height: 100px;
    bottom: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(14, 14, 14, 1) 100%
    );
    pointer-events: none;
  }

  &__nav {
    margin: 100px 0;

    @include mq($from: mobile) {
      margin: 163px 0;
    }

    li {
      position: relative;
      display: flex;
      justify-content: flex-end;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        background-color: $dept-border-color;
        width: 100%;
        height: 1px;
      }

      a {
        font-size: 3.125rem;
        color: $dept-white;
        text-transform: uppercase;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        overflow: hidden;
        transition: 250ms opacity;

        span {
          line-height: 1;
          padding-top: 0.5rem;
          position: relative;

          &:before {
            opacity: 0;
            content: '';
            background-image: url('../../assets/svg/icon-triangle.svg');
            background-size: cover;
            background-repeat: no-repeat;
            position: absolute;
            top: 50%;
            left: -0.5em;
            height: 1.125rem;
            width: 0.875rem;
            transform: translate(-1rem, -50%);
            pointer-events: none;
            transition: 250ms all;

            @include mq($from: mobile) {
              height: 2.25rem;
              width: 1.75rem;
            }
          }
        }

        @include mq($from: mobile) {
          font-size: 6.875rem;
        }

        &.nuxt-link-exact-active {
          span {
            &:before {
              opacity: 1;
            }
          }
        }

        &:focus {
          border-bottom: inherit;
        }
      }

      &:last-of-type {
        &:after {
          display: none;
        }
      }
    }

    &:hover {
      a {
        opacity: 0.5;

        &:hover {
          opacity: 1;

          span {
            &:before {
              opacity: 1;
              transform: translate(0, -50%);
            }
          }
        }
      }
    }

    a {
      &:focus {
        opacity: 1;

        span {
          &:before {
            opacity: 1;
            transform: translate(0, -50%);
          }
        }
      }
    }
  }
}

.aside {
  display: none;
  position: fixed;
  z-index: 1000;
  height: 100%;
  top: 0;
  bottom: 0;
  padding-top: 118px;
  padding-bottom: 71px;

  @include mq($from: mobile) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-leave-active {
  transition-delay: calc(0.1s * (var(--total) - var(--i)));
}

.list-enter-active {
  transition-delay: calc(0.1s * var(--i));
}

.list-enter,
.list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
