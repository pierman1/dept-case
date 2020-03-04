<template>
  <div class="filter-select-container">
    <label :for="name">
      {{ name }}
    </label>
    <select
      class="filter-select"
      :id="name"
      v-model="selected"
      @change="onChange($event)"
    >
      <!-- Let's go for an empty value -->
      <option value="">all {{ name }}</option>
      <option
        v-for="(option, index) in options"
        :value="option"
        :key="`options_${index}`"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import queryStringMixin from '@/mixins/QueryStringMixin.js'

export default {
  name: 'FilterSelect',
  mixins: [queryStringMixin],
  props: {
    name: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    onChange(e) {
      this.updateQueryString(this.name, e.target.value)
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-select {
  font-family: $text-font-stack;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  border: none;
  font-size: inherit;
  border-bottom: 2px solid $brand-color;

  option {
    font-size: 1rem;
  }
}

.filter-select-container {
  display: flex;
  flex-direction: row;

  label {
    visibility: hidden;
    display: none;
  }
}
</style>
