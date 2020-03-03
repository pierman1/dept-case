<template>
  <section class="hero-large">
    <div class="container">
      <!-- <h1>
        Work
      </h1> -->
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

  @include mq($from: wide) {
    height: 940px;

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
}
</style>
