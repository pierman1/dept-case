<template>
  <div class="contact-form-container">
    <Form>
      <input-field />
    </Form>
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
  }
}
</script>
