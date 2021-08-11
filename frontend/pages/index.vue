<template>
  <div>
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
