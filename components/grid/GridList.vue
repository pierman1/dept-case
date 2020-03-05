<template>
  <section class="grid-list" :class="{ loading }">
    <div class="container container--flex" v-if="cases">
      <div class="wrapper">
        <case-base
          class="case-base"
          v-for="(item, index) in cases"
          :key="`case_${index}`"
          type="list"
          :data="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CaseBase from '@/components/case/CaseBase'

export default {
  name: 'GridList',
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
    display: flex;
    flex-direction: column;
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

.quote {
  width: 100%;
}

.wrapper {
  width: 100%;
}
</style>
