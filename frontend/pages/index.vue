<template>
  <div>
    <h2>こんにちは</h2>
    <FormInput
      :rules="'required|max:10'"
      :type="'text'"
      :placeholder="'姓'"
      :value="firstName"
      @input="firstName = $event"
    />
    <Form />
  </div>
</template>

<script>
import Form from '@/components/Template/Form';
import FormInput from '@/components/Atoms/FormInput';

export default {
  components: {
    Form,
    FormInput,
  },
  data() {
    return {
      firstName: '',
    };
  },
  mounted() {
    window.liff.init({
      liffId: process.env.LIFF_ID,
    });
  },
};
