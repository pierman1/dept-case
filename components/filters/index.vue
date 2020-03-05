<template>
  <section class="filters">
    <div class="container">
      <span>
        Show me
      </span>
      <filter-select
        class="select"
        name="type"
        :options="['work', 'rebrand']"
        @change="change"
      />
      <span>
        in
      </span>
      <filter-select
        class="select"
        name="industry"
        :options="['fashion', 'ecom']"
        @change="change"
      />
      <span>as</span>
      <filter-select
        class="select"
        name="grid"
        :options="['grid', 'list']"
        @change="changeGridType"
      />
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import AOS from 'aos'
import FilterSelect from './FilterSelect'

export default {
  name: 'Filters',
  components: {
    FilterSelect
  },
  methods: {
    getData() {
      this.$store.commit('cases/SET_LOADING')
      axios
        .get('http://localhost:3000/api/v1/cases', {
          params: this.$route.query
        })
        .then((res) => {
          this.$store.commit('cases/SET_CASES', res.data.cases)
          this.$store.commit('cases/UNSET_LOADING')
        })
        .finally(() => {
          AOS.refreshHard()
        })
    },
    change(e) {
      console.log('change', e)
      setTimeout(() => {
        this.getData()
      }, 200)
    },
    changeGridType(value) {
      this.$store.commit('filters/SET_GRID_TYPE', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.filters {
  font-size: 1.5rem;
  color: $dept-darkgrey;
  margin: 30px 0;

  @include mq($from: mobile) {
    margin: 60px 0;
    font-size: 1.875rem;
  }

  .select {
    margin: 0 0.5rem;
  }
}

.container {
  display: flex;
  flex-direction: column;

  @include mq($from: mobile) {
    flex-direction: row;
    justify-content: flex-end;
  }
}
</style>
