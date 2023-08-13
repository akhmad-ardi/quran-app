<template>
<div
  :id="`modalAyat${dataAyat.number.inQuran}`"
  dir="ltr"
  class="modal fade"
  tabindex="-1"
  aria-labelledby="modalAyatLabel"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5
          id="modalAyatLabel"
          class="modal-title fw-bold"
        >
          Juz {{ dataAyat.meta.juz }} Surah {{ surahName }} Ayat {{ dataAyat.number.inSurah }}
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <h4 class="text-center">
          {{ dataAyat.translation.id }}
        </h4>

        <h4 class="text-center fw-bold">
          Tafsir:
        </h4>

        <p class="m-0 text-start text-indent">
          {{ dataAyat.tafsir.id.short }}
        </p>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-dismiss="modal"
          @click="saveBookmark"
        >
          Save Bookmark
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import GetSurah from '../../stores/Quran/getSurah';
import GetUser from '../../stores/Account/getUser';
import UpdateBookmark from '../../stores/Account/updateBookmark';

export default {
  props: {
    dataAyat: {
      type: Object,
      required: true,
    },
    surahName: {
      type: String,
      required: true,
    },
    numberSurah: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      GetSurah: GetSurah(),
      GetUser: GetUser(),
      UpdateBookmark: UpdateBookmark(),
    };
  },
  methods: {
    async saveBookmark() {
      const dataBookmark = {
        Number: this.dataAyat.number.inQuran,
        surah: {
          name: this.surahName,
          number: this.numberSurah,
        },
        juz: this.dataAyat.meta.juz,
        numberOfSurah: this.dataAyat.number.inSurah,
      };
      await this.UpdateBookmark.updateBookmark(dataBookmark);

      if (!this.UpdateBookmark.isLoading) {
        await this.GetUser.getUser();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.btn-close {
  box-shadow: 0 0 0 0;
}
</style>
