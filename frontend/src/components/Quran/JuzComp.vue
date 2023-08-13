<template>
<div class="card-body">
  <h2 class="text-center fw-bold">
    Juz {{ number }}
  </h2>
  <h4 class="text-center">
    Total Ayat: {{ getTotalAyat.TotalAyat[number] }}
  </h4>
</div>
</template>

<script>
import getTotalAyat from '../../stores/Quran/getTotalAyat';

export default {
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
  emits: ['isLoading'],
  data() {
    return {
      getTotalAyat: getTotalAyat(),
    };
  },
  async created() {
    const TotalAyatLength = Object.keys(this.getTotalAyat.TotalAyat).length;
    if (TotalAyatLength === 0) {
      await this.getTotalAyat.getTotalAyat(this.number);
    }
    this.$emit('isLoading', this.getTotalAyat.isLoading);
  },
};
</script>
<style scoped lang="scss">

</style>
