<template>
  <div class="footer-sub-menu">
    <ul class="footer-sub-menu__list">
      <li>
        Chamber of Commerce: 6346410
      </li>
      <li>
        VAT: NL 8552.47.502.B01
      </li>
      <li>
        Terms and conditions
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterSubMenu'
}
</script>

<style lang="scss" scoped>
.footer-sub-menu {
  font-family: 'Arial';
  color: $dept-darkgrey;
  font-size: 0.75rem;
  line-height: 1.6;

  @include mq($from: tablet) {
    padding-left: 250px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    li {
      margin-right: 2.5rem;
    }

    @include mq($from: mobile) {
      margin-top: 55px;
      flex-direction: row;
    }
  }
}
</style>
