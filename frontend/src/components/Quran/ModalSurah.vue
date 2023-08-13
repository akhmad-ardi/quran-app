<template>
<div
  :id="`surah${dataSurah.number}`"
  class="modal fade"
  tabindex="-1"
  aria-labelledby="modalSurah"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-scrollable ">
    <div class="modal-content">
      <div class="modal-header">
        <h5
          id="modalSurah"
          class="modal-title"
        >
          Tentang Surah {{ dataSurah.name.transliteration.id }}
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <p class="m-0 mb-2 fw-bold fs-4">
          Tafsir:
        </p>
        <p class="text-indent">
          {{ dataSurah.tafsir.id }}
        </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    dataSurah: {
      type: Object,
      required: true,
    },
  },
};
</script>
