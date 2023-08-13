import axios from 'axios';
import { defineStore } from 'pinia';

const SignIn = defineStore('sign-in', {
  state() { return { msgSuccess: null, msgError: null, isLoading: true }; },
  actions: {
    async signIn(dataUser) {
      this.resetStateSignIn();
      try {
        const res = await axios.post('/api/user/signin', dataUser);
        this.msgSuccess = res.data;
      } catch (error) {
        this.msgError = error.response.data;
      } finally {
        this.isLoading = false;
      }
    },
    resetStateSignIn() {
      this.msgSuccess = null;
      this.msgError = null;
      this.isLoading = true;
    },
  },
});

export default SignIn;
