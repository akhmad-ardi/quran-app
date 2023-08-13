import axios from 'axios';
import { defineStore } from 'pinia';

const UpdatePassword = defineStore('update-password', {
  state() { return { msgSuccess: null, msgError: null, isLoading: true }; },
  actions: {
    async updatePassword(dataPassword) {
      this.resetStateUpdatePassword();
      try {
        const res = await axios.put(
          '/api/user/password',
          dataPassword,
          { xsrfCookieName: 'TokenUser' },
        );
        this.msgSuccess = res.data.message;
      } catch (error) {
        this.msgError = error.response.data.message;
      } finally {
        this.isLoading = false;
      }
    },
    resetStateUpdatePassword() {
      this.msgSuccess = null;
      this.msgError = null;
      this.isLoading = true;
    },
  },
});

export default UpdatePassword;
