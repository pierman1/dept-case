<template>
  <section class="hero-large">
    <transition name="fade">
      <figure class="hero-large__figure" v-if="visible">
        <picture>
          <source
            :data-srcset="require(`~/assets/images/${data.caseImage}?webp`)"
            type="image/webp"
          />
          <source
            :data-srcset="require(`~/assets/images/${data.caseImage}`)"
            type="image/jpg"
          />
          <img
            class="lazyload image"
            :alt="data.caseParty"
            :data-src="require(`~/assets/images/${data.caseImage}`)"
          />
        </picture>
      </figure>
    </transition>
    <transition name="fade">
      <div class="container" v-if="visible">
        <btn color="dark" title="View case" />
      </div>
    </transition>
  </section>
</template>

<script>
import Btn from '@/components/button/BaseButton.vue'

export default {
  name: 'Hero',
  components: {
    Btn
  },
  props: {
    data: {
      type: Object
    },
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-large {
  display: flex;
  position: relative;
  width: 100%;
  height: 375px;
  background-size: 100%;
  background-repeat: no-repeat;
  align-items: flex-end;
  overflow: hidden;

  @include mq($from: wide) {
    height: 100vh;

    &:before {
      content: '';
      position: absolute;
      z-index: 9;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      box-shadow: 0 0 0 20px #fff inset;
    }
  }

  .container {
    z-index: 1;
    display: flex;
    flex-direction: column;
    padding: 0;
    background-color: $dept-white;
    padding: 20px 20px 0;

    @include mq($from: mobile) {
      background-color: transparent;
      height: 100%;
      align-items: flex-end;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      padding-top: 20px;
      padding-bottom: 20px;
    }

    @include mq($from: wide) {
      padding-top: 80px;
      padding-bottom: 80px;
    }
  }

  $min_width: 320px;
  $max_width: 1200px;
  $min_font: 170px;
  $max_font: 400px;

  .title {
    font-size: 100px;
    font-weight: 400;
    text-transform: uppercase;
    width: 50%;
    line-height: 1;
    @include fluid-type($min_width, $max_width, $min_font, $max_font);
  }

  &__figure {
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    picture {
      display: flex;
      align-items: center;
      justify-content: center;

      @include mq($from: mobile) {
        display: initial;
      }
    }

    img {
      height: 375px;

      @include mq($from: mobile) {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
