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
    v-if="GetSurah.isLoading"
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
    <h1 class="fw-bold text-center">
      {{ GetSurah.surah.name.transliteration.id }}
    </h1>
    <h1
      v-show="GetSurah.surah.name.transliteration.id !== 'Al-Fatihah' && GetSurah.surah.name.transliteration.id !== 'At-Taubah'"
      class="text-center"
    >
      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
    </h1>
  </div>
</section>
</template>

<script>
import GetSurah from '../../stores/Quran/getSurah';

export default {
  data() {
    return {
      GetSurah: GetSurah(),
    };
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
