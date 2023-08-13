import axios from 'axios';
import { defineStore } from 'pinia';

const VerifyToken = defineStore('verify-token', {
  state() { return { isAuth: false, isLoading: true, msgError: null }; },
  actions: {
    async verifyToken() {
      this.resetVerifyTokenState();
      try {
        const res = await axios.get('/api/token', { xsrfCookieName: 'TokenUser' });
        const { isAuth } = res.data;
        this.isAuth = isAuth;
      } catch (error) {
        this.msgError = error.response.data;
      } finally {
        this.isLoading = false;
      }
    },
    resetVerifyTokenState() {
      this.isAuth = false;
      this.isLoading = true;
      this.msgError = null;
    },
  },
});

export default VerifyToken;
