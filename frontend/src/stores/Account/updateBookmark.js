import axios from 'axios';
import { defineStore } from 'pinia';

const UpdateBookmark = defineStore('update-bookmark', {
  state() { return { msgSuccess: null, msgError: null, isLoading: true }; },
  actions: {
    async updateBookmark(dataBookmark) {
      this.resetStateUpdateBoookmark();
      try {
        const res = await axios.patch('/api/bookmark', dataBookmark, { xsrfCookieName: 'TokenUser' });
        const { data } = res;
        this.msgSuccess = data.message;
      } catch (error) {
        this.msgError = error.response?.data;
      } finally {
        this.isLoading = false;
      }
    },
    resetStateUpdateBoookmark() {
      this.msgSuccess = null;
      this.msgError = null;
      this.isLoading = true;
    },
  },
});

export default UpdateBookmark;
