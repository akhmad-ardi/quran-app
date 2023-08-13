import axios from 'axios';
import { defineStore } from 'pinia';

const SignOut = defineStore('sign-out', {
  state() { return { isLoading: true, msgSuccess: null, msgError: null }; },
  actions: {
    async singOut() {
      this.resetSignOutState();
      try {
        const res = await axios.delete('/api/token', { xsrfCookieName: 'TokenUser' });
        this.msgSuccess = res.data;
      } catch (error) {
        this.msgError = error.response.data;
      } finally {
        this.isLoading = false;
      }
    },
    resetSignOutState() {
      this.isLoading = true;
      this.msgSuccess = null;
      this.msgError = null;
    },
  },
});

export default SignOut;
