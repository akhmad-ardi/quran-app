<template>
<section class="container py-3">
  <h1 class="text-center fw-bold">
    Juz
  </h1>

  <div
    class="row"
    :class="getTotalAyat.isLoading ? '' : 'row-cols-1 row-cols-md-3 g-4'"
  >
    <div
      v-if="getTotalAyat.isLoading || getTotalAyat.msgError"
      class="col"
    >
      <h1 class="text-center">
        Loading...
      </h1>
    </div>

    <div
      v-for="number in numbers"
      :key="number"
      class="col"
      :class="getTotalAyat.isLoading ? 'd-none': ''"
    >
      <div class="card">
        <router-link
          class="stretched-link"
          :to="{ path: `/quran/juz/${number}` }"
        />
        <JuzComp
          :number="number"
          @is-loading="getValue"
        />
      </div>
    </div>
  </div>
</section>
</template>

<script>
import getTotalAyat from '../../stores/Quran/getTotalAyat';
import JuzComp from './JuzComp.vue';

export default {
  components: { JuzComp },
  emits: ['isLoading'],
  data() {
    return {
      numbers: [],
      getTotalAyat: getTotalAyat(),
    };
  },
  async created() {
    for (let i = 1; i <= 30; i += 1) {
      this.numbers.push(i);
    }
  },
  methods: {
    getValue(value) {
      this.$emit('isLoading', value);
    },
  },
};
</script>
