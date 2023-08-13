import { defineStore } from 'pinia';
import axios from 'axios';

const GetJuz = defineStore('get-juz', {
  state() { return { juz: {}, isLoading: true, msgError: null }; },
  actions: {
    async getJuz(number) {
      this.resetStateJuz();
      try {
        const res = await axios.get(`https://api.quran.gading.dev/juz/${number}`);
        const { data } = res.data;
        this.juz = data;
      } catch (error) {
        this.msgError = error.response.data;
      } finally {
        this.isLoading = false;
      }
    },
    resetStateJuz() {
      this.juz = {};
      this.isLoading = true;
      this.msgError = null;
    },
  },
});

export default GetJuz;
