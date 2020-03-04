<template>
  <div class="contact-form-container">
    <Form>
      <input-field
        name="Name"
        :value.sync="firstName"
        @update="update($event)"
      />
      <input-field name="Email" :value.sync="email" />
      <input-field name="Message" :value.sync="message" />
    </Form>

    {{ firstName }}
    {{ email }}
    {{ message }}
  </div>
</template>

<script>
import Form from '@/components/form/Form.vue'
import InputField from '@/components/form/InputField.vue'

export default {
  name: 'ContactForm',
  components: {
    Form,
    InputField
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
    }
  }
}
</script>
