<template>
<section class="container py-3">
  <h1 class="text-center fw-bold mt-2 mb-3">
    Surah
  </h1>

  <div
    v-if="ListSurah.isLoading || ListSurah.msgError"
    class="mt-5"
  >
    <h1 class="text-center">
      Loading...
    </h1>
  </div>

  <div
    v-else-if="ListSurah.listSurahFilter.length !== 0"
    class="row row-cols-1 row-cols-md-4 g-2"
  >
    <div
      v-for="(surah, index) in ListSurah.listSurahFilter"
      :key="index"
      class="col position-relative"
    >
      <router-link
        class="stretched-link"
        :to="{ path: `/quran/surah/${surah.number}` }"
        @click="ListSurah.listSurahFilter = []"
      />
      <div class="card">
        <div class="card-body d-flex">
          <div>
            <span class="badge py-2 px-3 fs-6">{{ surah.number }}</span>
          </div>
          <div class="ms-3">
            <p class="m-0 fs-6 fw-bold">
              {{ surah.name.transliteration.id }}
            </p>
            <p class="translate-english m-0 fw-bold">
              {{ surah.name.translation.id }}
            </p>
            <p
              class="m-0"
              style="font-size: 12px;"
            >
              Total Ayat: {{ surah.numberOfVerses }}
            </p>
          </div>
        </div>
        <button
          type="button"
          class="btn p-0 me-1 mt-1 position-absolute stretched-link position-relative end-0"
          data-bs-toggle="modal"
          :data-bs-target="`#surah${surah.number}`"
        >
          <i class="bi bi-three-dots-vertical fs-3" />
        </button>
        <ModalSurah
          :data-surah="surah"
        />
      </div>
    </div>
  </div>

  <div
    v-else
    class="row row-cols-1 row-cols-md-4 g-2"
  >
    <div
      v-for="(surah, index) in ListSurah.listSurah"
      :key="index"
      class="col position-relative"
    >
      <div class="card">
        <div class="card-body d-flex">
          <div>
            <router-link
              class="stretched-link"
              :to="{ path: `/quran/surah/${surah.number}` }"
            />
            <span class="badge py-2 px-3 fs-6">{{ surah.number }}</span>
          </div>
          <div class="ms-3">
            <p class="m-0 fs-6 fw-bold">
              {{ surah.name.transliteration.id }}
            </p>
            <p class="translate-english m-0 fw-bold">
              {{ surah.name.translation.id }}
            </p>
            <p
              class="m-0"
              style="font-size: 12px;"
            >
              Total Ayat: {{ surah.numberOfVerses }}
            </p>
          </div>
        </div>
        <button
          type="button"
          class="btn p-0 me-1 mt-1 position-absolute stretched-link position-relative end-0"
          data-bs-toggle="modal"
          :data-bs-target="`#surah${surah.number}`"
        >
          <i class="bi bi-three-dots-vertical fs-3" />
        </button>
        <ModalSurah
          :data-surah="surah"
        />
      </div>
    </div>
  </div>
</section>
</template>

<script>
import ListSurah from '../../stores/Quran/listSurah';
import ModalSurah from './ModalSurah.vue';

export default {
  components: { ModalSurah },
  emits: ['isLoading'],
  data() {
    return {
      ListSurah: ListSurah(),
    };
  },
  async created() {
    if (this.ListSurah.listSurah.length === 0) {
      await this.ListSurah.getListSurah();
    }

    if (!this.ListSurah.isLoading) {
      this.$emit('isLoading', this.ListSurah.isLoading);
    }
  },
};
</script>

<style scoped lang="scss">
.badge {
  background-color: #737780;
}

.translate-english {
  font-size: 12px;
  color: #737780;
}
</style>
