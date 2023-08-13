<template>
<span class="position-absolute start-0 top-50 translate-middle">
  <i class="bi bi-bookmark-check-fill fs-3" />
</span>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: null,
    },
  },
};
</script>

<style scoped lang="scss">
.bi-bookmark-check-fill {
  background: #159E72;
  background: linear-gradient(to right, #159E72 0%, #3EAF59 69%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
