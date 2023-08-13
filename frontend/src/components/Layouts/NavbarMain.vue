<template>
<nav class="navbar navbar-expand-lg navbar-light px-md-5">
  <div class="container-fluid">
    <router-link
      class="navbar-brand fw-bold ms-md-5"
      :to="{ path:'/quran' }"
      @click="resetSurahAndJuz()"
    >
      Quran<span class="m-0">.app</span>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div
      id="navbarNav"
      class="collapse navbar-collapse"
    >
      <ul class="navbar-nav ms-auto">
        <li class="nav-item mx-2">
          <router-link
            v-if="$route.path !== '/'"
            class="nav-link fw-bold"
            :to="{ path: '/' }"
          >
            Home
          </router-link>
          <a
            v-else
            class="nav-link active fw-bold"
            href="#home"
          >Home</a>
        </li>
        <li class="nav-item mx-2">
          <router-link
            v-if="$route.path !== '/'"
            class="nav-link fw-bold"
            :to="{ path: '/about' }"
          >
            About
          </router-link>
          <a
            v-else
            class="nav-link fw-bold"
            href="#about"
          >About</a>
        </li>
        <li class="nav-item mx-2">
          <router-link
            class="nav-link fw-bold"
            :to="{ path: '/quran' }"
          >
            Quran
          </router-link>
        </li>
        <li
          v-if="!VerifyToken.isAuth"
          class="nav-item mx-2"
        >
          <a
            class="nav-link fw-bold"
            href="#"
          >FAQs</a>
        </li>
        <li
          v-if="!VerifyToken.isAuth"
          class="nav-item mx-2"
        >
          <router-link
            class="nav-link fw-bold"
            :class="$route.fullPath === '/auth/signup' ? 'active' : ''"
            :to="{ path: '/auth/signin' }"
          >
            Sign In
          </router-link>
        </li>
        <li
          v-if="VerifyToken.isAuth"
          class="nav-item"
        >
          <router-link
            class="nav-link fw-bold"
            :to="{ path: '/account/dashboard' }"
          >
            <i class="bi bi-person-circle" />
            Account
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import VerifyToken from '../../stores/Account/verifyToken';
import getTotalAyat from '../../stores/Quran/getTotalAyat';
import getSurah from '../../stores/Quran/listSurah';

export default {
  emits: ['isLoading'],
  data() {
    return {
      VerifyToken: VerifyToken(),
      getTotalAyat: getTotalAyat(),
      getSurah: getSurah(),
    };
  },
  methods: {
    resetSurahAndJuz() {
      this.getTotalAyat.resetTotalAyat();
      this.getSurah.resetListSurah();
      this.$emit('isLoading', this.getTotalAyat.isLoading || this.getTotalAyat.isLoading);
    },
  },
};
</script>

<style scoped lang="scss">
.navbar{
    background-color: #fff !important;
}
.navbar-brand {
   color: #31AA60 !important;
   font-size: 38px;
   span {
    color: #000;
    font-size: 12px;
   }
}

.nav-link {
    color: #202038 !important;
    font-size: 24px;
}
.active {
    color: #159E72 !important;
}
</style>
