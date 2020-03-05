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
      <option v-if="allValue" selected>all {{ name }}</option>
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
    },
    allValue: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    onChange(e) {
      if (e.target.value.includes('all')) {
        this.updateQueryString(this.name, '')
        this.$emit('change', '')
      } else {
        this.updateQueryString(this.name, e.target.value)
        this.$emit('change', e.target.value)
      }
    }
  },
  mounted() {
    this.selected = this.$store.state.filters[this.name]
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
}

.filter-select-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  border-bottom: 2px solid $brand-color;
  width: fit-content;

  &:after {
    content: '';
    width: 1rem;
    height: 1rem;
    background-image: url('../../assets/svg/icon-triangle-down.svg');
    background-repeat: no-repeat;
    background-position: center;
  }

  label {
    visibility: hidden;
    display: none;
  }
}
</style>
