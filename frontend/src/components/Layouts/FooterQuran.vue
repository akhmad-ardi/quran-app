<template>
<footer
  class="card mx-auto my-3"
  style="width: 80%;"
>
  <div class="card-body py-2">
    <ul
      v-if="$route.fullPath.includes('/surah')"
      class="nav justify-content-between"
    >
      <li class="nav-item">
        <router-link
          v-if="number > 1"
          class="nav-link text-light fs-1"
          :to="{ path: `/quran/surah/${number - 1}` }"
          @click="beforeSurah()"
        >
          <i class="bi bi-arrow-left" />
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          v-if="number < 114"
          class="nav-link text-light fs-1"
          :to="{ path: `/quran/surah/${number + 1}` }"
          @click="nextSurah()"
        >
          <i class="bi bi-arrow-right" />
        </router-link>
      </li>
    </ul>

    <ul
      v-else
      class="nav justify-content-between"
    >
      <li class="nav-item">
        <router-link
          v-if="number > 1"
          class="nav-link text-light fs-1"
          :to="{ path: `/quran/juz/${number - 1}` }"
          @click="beforeJuz()"
        >
          <i class="bi bi-arrow-left" />
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          v-if="number < 30"
          class="nav-link text-light fs-1"
          :to="{ path: `/quran/juz/${number + 1}` }"
          @click="nextJuz()"
        >
          <i class="bi bi-arrow-right" />
        </router-link>
      </li>
    </ul>
  </div>
</footer>
</template>

<script>
import GetSurah from '../../stores/Quran/getSurah';
import GetJuz from '../../stores/Quran/getJuz';

export default {
  props: {
    number: {
      type: Number,
      required: true,
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      GetSurah: GetSurah(),
      GetJuz: GetJuz(),
    };
  },
  methods: {
    beforeSurah() {
      this.GetSurah.resetStateSurah();
      if (this.GetSurah.isLoading) this.GetSurah.getSurah(this.number - 1);
    },
    nextSurah() {
      this.GetSurah.resetStateSurah();
      if (this.GetSurah.isLoading) this.GetSurah.getSurah(this.number + 1);
    },
    beforeJuz() {
      this.GetJuz.resetStateJuz();
      if (this.GetJuz.isLoading) this.GetJuz.getJuz(this.number - 1);
    },
    nextJuz() {
      this.GetJuz.resetStateJuz();
      if (this.GetJuz.isLoading) this.GetJuz.getJuz(this.number + 1);
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  background: rgb(21,158,114);
  background: linear-gradient(295deg, rgba(21,158,114,1) 0%, rgba(62,175,89,1) 100%);
  border-radius: 20px;
}
</style>
