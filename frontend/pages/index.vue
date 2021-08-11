<template>
  <div>
    <h2>こんにちは</h2>
    <Form />
  </div>
</template>

<script>
import Form from '@/components/Template/Form.vue';
export default {
  components: {
    Form,
  },
  mounted() {
    window.liff.init({
      liffId: process.env.LIFF_ID,
    });
  },
};
