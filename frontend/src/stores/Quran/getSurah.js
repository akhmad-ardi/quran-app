import { defineStore } from 'pinia';
import axios from 'axios';

const GetSurah = defineStore('get-surah', {
  state() { return { surah: {}, isLoading: true, msgError: null }; },
  actions: {
    async getSurah(number) {
      this.resetStateSurah();
      try {
        const res = await axios.get(`https://api.quran.gading.dev/surah/${number}`);
        const { data } = res.data;
        this.surah = data;
      } catch (error) {
        this.msgError = error.response.data;
      } finally {
        this.isLoading = false;
      }
    },
    resetStateSurah() {
      this.surah = {};
      this.isLoading = true;
      this.msgError = null;
    },
  },
});

export default GetSurah;
