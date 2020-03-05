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
          type="image/png"
        />
        <img
          class="lazyload image"
          :alt="data.caseParty"
          :data-src="require(`~/assets/images/${data.caseImage}`)"
        />
      </picture>
    </figure>
    <div class="container">
      <!-- <h2 class="title">
        A summer island in the Netherlands
        {{ data.caseDescription }}
      </h2> -->
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
  background-image: url('~assets/images/florensis.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 0;
  }

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

  .title {
    font-size: 100px;
    font-weight: 400;
    width: 50%;
    line-height: 1;
  }

  .container {
    padding: relative;
    z-index: 1;
  }
}
</style>
