import { defineStore } from 'pinia';
import axios from 'axios';

const TotalAyat = defineStore('total-ayat', {
  state() {
    return {
      TotalAyat: {}, isLoading: true, msgError: null,
    };
  },
  actions: {
    async getTotalAyat(number) {
      try {
        const res = await axios.get(`/api/quran/juz/${number}`);
        const { data } = res.data;
        this.TotalAyat[data.number] = data.ayahs.length;
      } catch (error) {
        this.msgError = error.response.data;
      } finally {
        if (this.TotalAyat[30]) {
          this.isLoading = false;
        }
      }
    },
    resetTotalAyat() {
      this.TotalAyat = [];
      this.isLoading = true;
      this.msgEror = null;
    },
  },
});

export default TotalAyat;
