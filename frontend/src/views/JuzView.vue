<template>
<NavbarQuran />
<main class="container">
  <CardJuz
    v-if="GetJuz.isLoading"
    :loading="GetJuz.isLoading"
  />

  <div
    v-if="GetJuz.isLoading"
    class="container"
  >
    <h1 class="text-center mt-5">
      Loading...
    </h1>
  </div>

  <ul
    v-else
    dir="rtl"
    class="px-3 px-md-5 list-group list-group-flush"
  >
    <li
      v-for="(ayat, index) in GetJuz.juz.verses"
      :id="ayat.number"
      :key="index"
      class="list-group-item px-3 position-relative"
    >
      <CardJuz
        v-if="ayat.number.inSurah === 1 || index === 0"
        :number-in-surah="ayat.number.inSurah"
        :index="index"
        class="mb-3"
        style="width: 100%;"
      />
      <button
        v-if="ayat.numberInSurah !== 1"
        type="button"
        class="button-modal-ayat btn fs-3 p-0 m-0 position-absolute start-100 top-50 translate-middle"
        data-bs-toggle="modal"
        :data-bs-target="`#modalAyat${ayat.number}`"
      >
        <i class="bi bi-three-dots-vertical" />
      </button>
      <p class="m-0 fs-3 position-relative">
        {{ ayat.text.arab }}&nbsp;&nbsp;<span class="number-surah badge rounded-circle fs-5">{{ ayat.numberInSurah }}</span>
        <button
          v-if="ayat.numberInSurah === 1"
          type="button"
          class="button-modal-ayat btn fs-3 p-0 m-0 ms-3 position-absolute start-100 top-50 translate-middle"
          data-bs-toggle="modal"
          :data-bs-target="`#modalAyat${ayat.number}`"
        >
          <i class="bi bi-three-dots-vertical" />
        </button>
        <BookmarkCheck v-if="GetUser.Bookmark.Number === ayat.number" />
      </p>

      <ModalAyat
        :data-ayat="ayat"
        :surah-name="'al-quran'"
        :number-surah="1"
      />
    </li>
  </ul>
</main>

<FooterQuran :number="parseInt($route.params.number)" />
</template>

<script>
import VerifyToken from '../stores/Account/verifyToken';
import GetUser from '../stores/Account/getUser';
import GetJuz from '../stores/Quran/getJuz';
import NavbarQuran from '../components/Layouts/NavbarQuran.vue';
import FooterQuran from '../components/Layouts/FooterQuran.vue';
import CardJuz from '../components/Quran/CardJuz.vue';
import ModalAyat from '../components/Quran/ModalAyat.vue';
import BookmarkCheck from '../components/Quran/BookmarkCheck.vue';

export default {
  components: {
    NavbarQuran, FooterQuran, CardJuz, ModalAyat, BookmarkCheck,
  },
  data() {
    return {
      VerifyToken: VerifyToken(),
      GetUser: GetUser(),
      GetJuz: GetJuz(),
    };
  },
  async created() {
    await this.GetJuz.getJuz(this.$route.params.number);

    if (this.VerifyToken.isAuth) {
      await this.GetUser.getUser();
    }
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
