<template>
  <section class="filters">
    <div class="container">
      <span class="filters__row">
        <filter-select
          label="Show me"
          class="select"
          name="type"
          :options="['work', 'rebrand']"
          @change="change"
        />
      </span>
      <span class="filters__row">
        <filter-select
          label="in"
          class="select"
          name="industry"
          :options="['fashion', 'ecom']"
          @change="change"
        />
      </span>
      <span class="filters__row">
        <filter-select
          label="as"
          class="select"
          name="grid"
          :all-value="false"
          :options="['grid', 'list']"
          @change="changeGridType"
        />
      </span>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import FilterSelect from './FilterSelect'
import { API_URL } from '@/helpers/api.js'

export default {
  name: 'Filters',
  components: {
    FilterSelect
  },
  methods: {
    getData() {
      this.$store.commit('cases/SET_LOADING')
      axios
        .get(`${API_URL}/api/v1/cases`, {
          params: this.$route.query
        })
        .then((res) => {
          this.$store.commit('cases/SET_CASES', res.data.cases)
          this.$store.commit('cases/UNSET_LOADING')
        })
    },
    change(e) {
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

  .filters__row {
    display: flex;
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
