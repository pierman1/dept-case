<template>
  <section class="hero-large">
    <div class="container">
      <h2 class="title">
        A summer island in the Netherlands
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero'
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
}
</style>
