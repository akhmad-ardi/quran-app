import axios from 'axios';
import { defineStore } from 'pinia';

const FinishTask = defineStore('finish-task', {
  state() { return { msgSuccess: null, msgError: null, isLoading: true }; },
  actions: {
    async finishTask(id) {
      try {
        const res = await axios.put(`/api/todolist/${id}`, {}, { xsrfCookieName: 'TokenUser' });
        this.msgSuccess = res.data.message;
      } catch (error) {
        this.msgError = error.response.data.message;
      } finally {
        this.isLoading = false;
      }
    },
    resetStateFinishTask() {
      this.msgSuccess = null;
      this.msgError = null;
      this.isLoading = true;
    },
  },
});

export default FinishTask;
