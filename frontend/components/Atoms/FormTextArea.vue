<template>
  <div>
    <textarea
      class="form-textarea"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.form-textarea {
  resize: none;
  display: block;
  width: 100%;
  height: 200px;
  padding: 10px 10px;
  margin: 10px 0;
  color: #333;
  border: solid 1px #ccc;
  border-radius: 6px;
  outline: 0;
  transition: 0.3s;

  &:focus {
    border: 1px solid #00b5ad;
  }
}
</style>
