<template>
<NavbarQuran />
<main class="container">
  <CardSurah
    class="my-3"
    style="width: 86.06%;"
  />

  <div
    v-if="GetSurah.isLoading"
    class="container-fluid mt-3"
  >
    <h1 class="text-center">
      Loading...
    </h1>
  </div>

  <ul
    v-else
    dir="rtl"
    class="px-3 px-md-5 list-group list-group-flush"
  >
    <li
      v-for="(ayat, index) in GetSurah.surah.verses"
      :id="ayat.number.inQuran"
      :key="index"
      class="list-group-item px-3 position-relative"
    >
      <button
        type="button"
        class="button-modal-ayat btn fs-3 p-0 m-0 position-absolute start-100 top-50 translate-middle"
        data-bs-toggle="modal"
        :data-bs-target="`#modalAyat${ayat.number.inQuran}`"
      >
        <i class="bi bi-three-dots-vertical" />
      </button>
      <p class="m-0 ps-3 pe-1 fs-3">
        {{ ayat.text.arab }}&nbsp;&nbsp;<span class="number-surah badge rounded-circle fs-5">{{ ayat.number.inSurah }}</span>
      </p>
      <BookmarkCheck
        v-if="GetUser.Bookmark.Number === ayat.number.inQuran"
        class="ms-3"
      />

      <ModalAyat
        v-if="!GetSurah.isLoading"
        :data-ayat="ayat"
        :surah-name="GetSurah.surah.name.transliteration.id"
        :number-surah="GetSurah.surah.number"
      />
    </li>
  </ul>
</main>

<FooterQuran :number="parseInt($route.params.number)" />
</template>

<script>
import VerifyToken from '../stores/Account/verifyToken';
import GetUser from '../stores/Account/getUser';
import GetSurah from '../stores/Quran/getSurah';
import NavbarQuran from '../components/Layouts/NavbarQuran.vue';
import FooterQuran from '../components/Layouts/FooterQuran.vue';
import CardSurah from '../components/Quran/CardSurah.vue';
import BookmarkCheck from '../components/Quran/BookmarkCheck.vue';
import ModalAyat from '../components/Quran/ModalAyat.vue';

export default {
  components: {
    NavbarQuran, FooterQuran, CardSurah, BookmarkCheck, ModalAyat,
  },
  data() {
    return {
      VerifyToken: VerifyToken(),
      GetUser: GetUser(),
      GetSurah: GetSurah(),
    };
  },
  async created() {
    await this.GetSurah.getSurah(this.$route.params.number);
  },
};
</script>

<style scoped lang="scss">
.number-surah {
  border-radius: 20px;
  background: rgb(21,158,114);
  background: linear-gradient(295deg, rgba(21,158,114,1) 0%, rgba(62,175,89,1) 59%);
}

.button-modal-ayat {
  box-shadow: 0 0 0 0;
}
</style>
