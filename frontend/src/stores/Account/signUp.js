import axios from 'axios';
import { defineStore } from 'pinia';

const SignUp = defineStore('sign-up', {
  state() { return { msgSuccess: null, msgError: null, isLoading: true }; },
  actions: {
    async signUp(dataUser) {
      this.resetSignUpState();
      try {
        const res = await axios.post('/api/user', dataUser);
        this.msgSuccess = res.data;
      } catch (error) {
        this.msgError = error.response.data;
      } finally {
        this.isLoading = false;
      }
    },
    resetSignUpState() {
      this.msgSuccess = null;
      this.msgError = null;
      this.isLoading = true;
    },
  },
});

export default SignUp;
