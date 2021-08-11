<template>
  <div>
    <div class="form-label">
      <span class="form-label-ttl">{{ title }}</span>
      <span class="form-label-op" :style="styles">{{ option }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    option: {
      type: String,
      default: '必須',
      validator: function(value) {
        return ['必須', '任意'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    styles() {
      if (this.option === '必須') {
        return {
          backgroundColor: '#d13636',
          color: '#fff',
        };
      } else {
        return {
          backgroundColor: '#757171',
          color: '#e0e0e0',
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-label {
  margin-top: 10px;

  &-ttl {
    font-size: 0.8rem;
    font-weight: bold;
    color: #333;
    margin-left: 10px;
  }

  &-op {
    font-size: 0.75rem;
    margin-left: 5px;
    padding: 4px 12px;
    border-radius: 6px;
  }
}
</style>
