<template>
  <div class="case-section" :class="{ 'case-section--rtl': rtl }">
    <div class="case-section__column">
      <slot />
    </div>
    <div class="case-section__column">
      <slot name="column" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaseSection',
  props: {
    rtl: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.case-section {
  width: 100%;
  display: flex;
  flex-direction: column;

  @include mq($from: mobile) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  &__column {
    @include mq($from: mobile) {
      width: 67%;

      &:nth-child(2) {
        padding-left: 42px;
        display: flex;
        flex-direction: column;
        width: 33%;
      }
    }
  }

  &--rtl {
    .case-section__column {
      order: 2;
      padding-right: 42px;

      &:nth-child(2) {
        order: 1;
        padding-left: 0;
      }
    }
  }
}
</style>

<style lang="scss">
.case-section {
  &__column {
    &:nth-child(2) {
      .case-base {
        border-top: 2px solid #dddddd;
        padding: 18px 0;
      }
    }
  }
}
</style>
