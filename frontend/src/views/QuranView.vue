<template>
<NavbarMain @is-loading="getValue" />
<main
  class="container-fluid py-3"
  :class="{ bgImages: !isLoading }"
>
  <h1
    class="text-center fw-bold my-4"
    style="color: #31AA60;"
  >
    Quran<span
      class="fs-6"
      style="color: #202038;"
    >.app</span>
  </h1>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <router-link
        class="nav-link text-center fw-bold me-3"
        :to="{ path: '/quran/surah' }"
      >
        Surah
      </router-link>
    </li>
    <li class="nav-item">
      <router-link
        class="nav-link text-center fw-bold"
        :to="{ path: '/quran/juz' }"
      >
        Juz
      </router-link>
    </li>
  </ul>

  <div
    v-if="$route.path === '/quran/surah'"
    class="mt-4 text-center"
  >
    <label
      for="floatingInput"
      class="form-label position-relative"
    > <i class="bi bi-search position-absolute ms-3 start-0 top-50 translate-middle-y" />
      <button class="btn position-absolute me-3 p-0 end-0 top-50 translate-middle-y">
        <i class="bi bi-funnel" />
      </button>
      <input
        id="search"
        v-model="search"
        type="text"
        class="form-control rounded-lg py-2"
        placeholder="Search"
      >
    </label>
  </div>

  <h1
    v-show="$route.path === '/quran'"
    class="text-center display-1 my-5"
    style="color: #202038;"
  >
    Welcome to <span
      class="fw-bold"
      style="color: #31AA60;"
    >Quran</span><span class="fs-6 fw-bold">.app</span>
  </h1>

  <router-view @is-loading="getValue" />
</main>
<FooterMain />
</template>

<script>
import ListSurah from '../stores/Quran/listSurah';
import NavbarMain from '../components/Layouts/NavbarMain.vue';
import FooterMain from '../components/Layouts/FooterMain.vue';

export default {
  components: { NavbarMain, FooterMain },
  data() {
    return {
      listSurah: ListSurah(),
      search: '',
      isLoading: true,
    };
  },
  updated() {
    this.listSurah.searchSurah(this.search);
  },
  methods: {
    getValue(value) {
      this.isLoading = value;
    },
  },
};
</script>

<style scoped lang="scss">
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
@import '../../node_modules/bootstrap/scss/mixins/breakpoints';

.bgImages {
  background-image:
    url('../assets/img/masjid-siluet2.png'),
    url('../assets/img/lentera-siluet1.png'),
    url('../assets/img/lentera-siluet3.png'),
    url('../assets/img/lentera-siluet2.png'),
    url('../assets/img/lentera-siluet4.png');
  background-size: 100% 92%, 60px 120px, 120px 180px, 80px 120px, 80px 180px;
  background-repeat: no-repeat;
  background-position: left bottom, 100px top, 200px top, 1260px top, 1100px top;
}

main {
  background-color: #F5F9FC;
  background-image:
    url('../assets/img/lentera-siluet1.png'),
    url('../assets/img/lentera-siluet3.png'),
    url('../assets/img/lentera-siluet2.png'),
    url('../assets/img/lentera-siluet4.png');
  background-size: 60px 120px, 120px 180px, 80px 120px, 80px 180px;
  background-repeat: no-repeat;
  background-position: 100px top, 200px top, 1260px top, 1100px top;
  .nav-link {
    width: 150px;
    border-radius: 50px;
    @include media-breakpoint-up(md){
      width: 200px;
      font-size: 32px;
    }
    color: #202038;
    font-size: 28px;
  }

  .active, .nav-link:hover {
    color: #fff;
    border-radius: 50px;
    background-color: #159E72;
  }

  #search {
    width: 400px;
    padding-left: 50px;
    border: 1px solid #202038;
  }

  #search:focus {
    box-shadow: 1px 1px 5px 1px #202038;
  }

  .bi-search, .bi-funnel {
    font-size: 24px;
  }
}
</style>
