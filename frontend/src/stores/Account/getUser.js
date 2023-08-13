import axios from 'axios';
import { defineStore } from 'pinia';

const GetUser = defineStore('get-user', {
  state() {
    return {
      User: {}, Bookmark: {}, ToDoList: {}, isLoading: true, msgError: null,
    };
  },
  actions: {
    async getUser() {
      try {
        const res = await axios.get('/api/user', { xsrfCookieName: 'TokenUser' });
        const { data } = res.data;
        this.User = data.user;
        this.Bookmark = data.bookmark;
        this.ToDoList = data.todolist;
      } catch (error) {
        this.msgError = error.response.data.message;
      } finally {
        this.isLoading = false;
      }
    },
    resetStateUser() {
      this.User = {};
      this.Bookmark = {};
      this.ToDoList = {};
      this.isLoading = true;
      this.msgError = null;
    },
  },
});

export default GetUser;
