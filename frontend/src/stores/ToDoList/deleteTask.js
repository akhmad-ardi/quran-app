import axios from 'axios';
import { defineStore } from 'pinia';

const DeleteTask = defineStore('delete-task', {
  state() { return { msgSuccess: null, msgError: null, isLoading: true }; },
  actions: {
    async deleteTask(id) {
      try {
        const res = await axios.delete(`/api/todolist/${id}`, { xsrfCookieName: 'TokenUser' });
        this.msgSuccess = res.data.message;
      } catch (error) {
        this.msgError = error.response.data.message;
      } finally {
        this.isLoading = false;
      }
    },
    resetStateDeleteTask() {
      this.msgSuccess = null;
      this.msgError = null;
      this.isLoading = null;
    },
  },
});

export default DeleteTask;
