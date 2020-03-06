<template>
  <section class="hero-large">
    <figure class="case-base__picture">
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
    <div class="container">
      <h2 class="title">
        Work
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    data: {
      type: Object
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
  // background-image: url('~assets/images/florensis.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  align-items: center;
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
}
</style>
