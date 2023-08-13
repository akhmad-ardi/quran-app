<template>
<nav class="navbar navbar-expand-lg navbar-light py-2 px-md-5">
  <div class="container-fluid">
    <router-link
      v-if="$route.fullPath.includes('/juz/')"
      class="back text-decoration-none text-danger"
      :to="{ path: '/quran/juz' }"
      @click="GetJuz.resetStateJuz()"
    >
      <i class="bi bi-arrow-left" />
    </router-link>

    <router-link
      v-else
      class="back text-decoration-none text-danger"
      :to="{ path: '/quran/surah' }"
      @click="GetSurah.resetStateSurah()"
    >
      <i class="bi bi-arrow-left" />
    </router-link>

    <a
      v-if="VerifyToken.isAuth && !GetUser.isLoading"
      class="m-0 me-md-3 text-decoration-none text-dark my-bookmark"
      :class="GetUser.Bookmark.surah.number === $route.params.number ? 'd-none': ''"
      :href="`#${GetUser.Bookmark.Number}`"
    >
      <i class="bi bi-bookmark-fill fs-5" />
      My Bookmark
    </a>
  </div>
</nav>
</template>

<script>
import GetUser from '../../stores/Account/getUser';
import VerifyToken from '../../stores/Account/verifyToken';
import GetSurah from '../../stores/Quran/getSurah';
import GetJuz from '../../stores/Quran/getJuz';

export default {
  data() {
    return {
      GetUser: GetUser(),
      VerifyToken: VerifyToken(),
      GetSurah: GetSurah(),
      GetJuz: GetJuz(),
    };
  },
  async created() {
    await this.GetSurah.getSurah(this.$route.params.number);

    if (this.VerifyToken.isAuth) {
      await this.GetUser.getUser();
    }
  },
};
</script>

<style scoped lang="scss">
.my-bookmark {
  background: #159E72;
  background: linear-gradient(to right, #159E72 0%, #3EAF59 69%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.button-search {
  cursor: pointer;
}
.form-control:focus {
  border: 1px solid #202038;
  box-shadow: 0.5px 0.5px 0.5px #202038;
}
.back {
  font-size: 38px;
}
</style>
