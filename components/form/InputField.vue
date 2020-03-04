<template>
  <validation-provider class="input-field" rules="required" v-slot="{ errors }">
    <label :for="name">
      {{ name }}
    </label>
    <input
      class="input"
      :id="name"
      :type="type"
      :model="newValue"
      @input="update"
    />
    <span class="input__error text text--xs text--warning" v-if="errors">
      {{ errors[0] }}
    </span>
  </validation-provider>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required'
})

export default {
  name: 'InputField',
  components: {
    ValidationProvider
  },
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      newValue: ''
    }
  },
  methods: {
    update(e) {
      this.$emit(`update:value`, e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-field {
  font-family: 'Arial';
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.75rem;

  @include mq($from: tablet) {
    width: 50%;
    margin-bottom: 4.875rem;
    padding-right: 50px;
  }

  label {
    color: text-color-secondary;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  input {
    border: none;
    font-size: 1rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid $dept-border-color;
  }

  .input__error {
    margin-top: 0.6875rem;
    font-size: 0.875rem;
    color: $dept-warning-red;
  }
}
</style>
