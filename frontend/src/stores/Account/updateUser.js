import axios from 'axios';
import { defineStore } from 'pinia';

const UpdateUser = defineStore('update-user', {
  state() { return { msgSuccess: null, msgError: null, isLoading: true }; },
  actions: {
    async updateUser(dataUser) {
      this.resetStateUpdateUser();
      try {
        const res = await axios.put('/api/user', dataUser, {
          xsrfCookieName: 'TokenUser',
        });
        this.msgSuccess = res.data.message;
      } catch (error) {
        this.msgError = error.response.data.message;
      } finally {
        this.isLoading = false;
      }
    },
    resetStateUpdateUser() {
      this.msgSuccess = null;
      this.msgError = null;
      this.isLoading = true;
    },
  },
});

export default UpdateUser;
