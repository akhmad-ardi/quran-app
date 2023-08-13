<template>
<div class="card py-3 position-relative">
  <img
    class="position-absolute top-0 start-0 ms-4"
    src="../../../assets/img/lentera-siluet6.png"
    alt="lentera-siluet4"
  >
  <img
    class="position-absolute top-0 end-0 me-2"
    src="../../../assets/img/lentera-siluet5.png"
    alt="lentera-siluet4"
  >
  <div class="card-body">
    <h3 class="text-center fw-bold text-decoration-underline">
      Bookmark
    </h3>
    <div class="py-2 row justify-content-evenly text-center">
      <div class="col-md-4 mb-2 mb-md-0">
        <div class="card card-surah-and-juz">
          <div class="card-body">
            <h5 class="text-decoration-underline">
              Surah
            </h5>
            <h5 class="fw-bold">
              <span v-if="isLoading">Loading...</span>
              <router-link
                v-else
                class="stretched-link text-light text-decoration-none"
                :to="{ path: `/quran/surah/${bookmark.surah.number}` }"
              >
                {{ bookmark.surah.number || '-' }}
              </router-link>
            </h5>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card card-surah-and-juz">
          <div class="card-body">
            <h5 class="text-decoration-underline">
              Juz
            </h5>
            <h5 class="fw-bold">
              <span v-if="isLoading">Loading...</span>
              <router-link
                v-else
                class="stretched-link text-light text-decoration-none"
                :to="{ path: `/quran/juz/${bookmark.juz}` }"
              >
                {{ bookmark.juz || '-' }}
              </router-link>
            </h5>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <div class="text-center card-body">
            <h5 class="fw-bold text-decoration-underline">
              Ayat
            </h5>
            <h5 class="fw-bold">
              <span v-if="isLoading">Loading...</span>
              <span v-else>{{ bookmark.numberOfSurah || '-' }} </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
    bookmark: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  color: #fff;
  background: rgb(21,158,114);
  background: linear-gradient(295deg, rgba(21,158,114,1) 0%, rgba(62,175,89,0.85) 100%);
  border-radius: 35px;

  .card {
    border: 0;
    background: rgb(62,175,89);
    background: linear-gradient(295deg, rgba(62,175,89,0.85) 0%, rgba(21,158,114,1) 100%);
    transition: transform .2s;
  }

  .card-surah-and-juz:hover {
    transform: scale(1.2);
  }
}
</style>
