<template>
  <div class="filter-select-container-outer">
    <label :for="name">
      {{ label }}
    </label>
    <div class="filter-select-container">
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
    label: {
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
  padding: 0;

  &:focus {
    color: $dept-blue;
    outline: none;
  }
}

.filter-select-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  border-bottom: 2px solid $brand-color;
  width: fit-content;
  margin-right: 0.5rem;

  &:after {
    content: '';
    width: 1rem;
    height: 1rem;
    background-image: url('../../assets/svg/icon-triangle-down.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
}

.filter-select-container-outer {
  display: flex;
  align-items: baseline;

  label {
    margin-right: 0.5rem;
    border-bottom: 2px solid transparent;
  }
}
</style>
