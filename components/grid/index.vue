<template>
  <div class="grid" :class="{ loading }">
    <div class="container container--flex" v-if="cases">
      <div class="wrapper">
        <case-base
          class="case-base"
          v-for="(item, index) in cases.slice(0, 4)"
          :key="`case_${index}`"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CaseBase from '@/components/case/CaseBase'

export default {
  name: 'Grid',
  components: {
    CaseBase
  },
  props: {
    items: {
      type: Array
    }
  },
  computed: {
    cases() {
      return this.$store.state.cases.allCases
    },
    loading() {
      return this.$store.state.cases.loading
    }
  }
}
</script>

<style lang="scss" scoped>
pre {
  color: $dept-blue;
}

.grid {
  width: 100%;
  margin: 30px 0 40px;

  @include mq($from: mobile) {
    margin: 60px 0 80px;
  }

  .wrapper {
    width: 100%;
    overflow: hidden;

    @include mq($from: mobile) {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-gap: 30px;
    }
  }

  .loading {
    opacity: 0.5;
    pointer-events: none;
  }
}

.container {
  &--flex {
    display: flex;
    flex-direction: column;

    @include mq($from: mobile) {
      flex-wrap: wrap;
      flex-direction: row;
    }
  }
}

.case-base {
  width: 100%;
}
</style>
