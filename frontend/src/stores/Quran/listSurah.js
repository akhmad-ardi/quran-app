import { defineStore } from 'pinia';
import axios from 'axios';

const ListSurah = defineStore('list-surah', {
  state() {
    return {
      listSurah: [], listSurahFilter: [], isLoading: true, msgError: null,
    };
  },
  actions: {
    async getListSurah() {
      try {
        const res = await axios.get('https://api.quran.gading.dev/surah');
        const { data } = res.data;
        this.listSurah = data;
      } catch (error) {
        this.msgError = error.response.data;
      } finally {
        this.isLoading = false;
      }
    },
    searchSurah(name) {
      this.listSurahFilter = this.listSurah.filter((surah) => surah.name.transliteration.id.toLowerCase().includes(name.toLowerCase()));
    },
    resetListSurah() {
      this.listSurah = [];
      this.listSurahFilter = [];
      this.isLoading = true;
      this.msgError = null;
    },
  },
});

export default ListSurah;
