<template>
  <div class="contact-form-container">
    <Form class="contact-form" @submit="submit">
      <div class="contact-form__row"></div>
      <input-field
        name="Name"
        :value.sync="firstName"
        @update="update($event)"
      />
      <input-field name="Email" :value.sync="email" />
      <input-field name="Message" :value.sync="message" tag="textarea" />
      <hr />
      <base-button title="Send" type="submit" />
    </Form>
  </div>
</template>

<script>
import Form from '@/components/form/Form.vue'
import BaseButton from '@/components/button/BaseButton.vue'
import InputField from '@/components/form/InputField.vue'

export default {
  name: 'ContactForm',
  components: {
    Form,
    InputField,
    BaseButton
  },
  data() {
    return {
      firstName: '',
      email: '',
      message: ''
    }
  },
  methods: {
    update(value) {
      console.log('update', value)
    },
    submit() {
      console.log('submitForm')
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-form-container {
  width: 100%;
}

hr {
  width: 100%;
  opacity: 0;
  visibility: hidden;
  height: 0;
  margin: 0;
}
</style>
