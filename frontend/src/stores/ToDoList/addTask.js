import axios from 'axios';
import { defineStore } from 'pinia';

const AddTask = defineStore('add-task', {
  state() { return { msgSuccess: null, msgError: null, isLoading: true }; },
  actions: {
    async addTask(dataTask) {
      this.resetStateAddTask();
      try {
        const res = await axios.post('/api/todolist', dataTask, {
          xsrfCookieName: 'TokenUser',
        });
        this.msgSuccess = res.data.message;
      } catch (error) {
        this.msgError = error.response.data.message;
      } finally {
        this.isLoading = false;
      }
    },
    resetStateAddTask() {
      this.msgSuccess = null;
      this.msgError = null;
      this.isLoading = true;
    },
  },
});

export default AddTask;
