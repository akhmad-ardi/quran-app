<template>
<section class="card mx-auto py-5 position-relative">
  <img
    class="position-absolute start-0 top-0 ms-4"
    src="../../assets/img/lentera-siluet1.png"
    alt="lentera"
    width="40"
    height="90"
  >
  <img
    class="position-absolute end-0 top-0 me-4"
    src="../../assets/img/lentera-siluet3.png"
    alt="lentera"
    width="40"
    height="80"
  >

  <div
    v-if="loading"
    class="card-body"
  >
    <h1 class="text-center">
      Loading...
    </h1>
  </div>

  <div
    v-else
    class="card-body"
  >
    <h1
      v-show="index === 0"
      class="fw-bold text-center"
    >
      Juz {{ $route.params.number }}
    </h1>
    <!-- <h3 class="fw-bold text-center">
      {{ nameEnglish }}
    </h3> -->
    <h1
      v-show="numberInSurah === 1 && nameEnglish !== 'Al-Faatiha' && nameEnglish !== 'At-Tawba'"
      class="text-center"
    >
      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
    </h1>
  </div>
</section>
</template>
<script>
export default {
  props: {
    numberInSurah: {
      type: Number,
      default: 1,
    },
    loading: {
      type: Boolean,
      default: true,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 90%;
  color: #fff;
  background: rgb(21,158,114);
  background: linear-gradient(295deg, rgba(21,158,114,1) 0%, rgba(62,175,89,1) 100%);
  border-radius: 30px;
}
</style>
