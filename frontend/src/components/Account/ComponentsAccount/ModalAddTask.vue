<template>
<form
  id="addtaskmodal"
  class="modal fade"
  tabindex="-1"
  aria-labelledby="AddTaskLabel"
  aria-hidden="true"
  @submit.prevent="addTask"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5
          id="AddTaskLabel"
          class="modal-title"
        >
          Add Task
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          @click="AddTask.resetStateAddTask()"
        />
      </div>
      <div class="modal-body m-0">
        <div class="row justify-content-center">
          <div class="col-md-7 text-start">
            <div
              v-if="AddTask.msgError"
              class="alert alert-danger text-capitalize"
              role="alert"
            >
              {{ AddTask.msgError }}
            </div>
            <label
              for="addtask"
              class="form-label m-0 w-100 text-start"
            >
              <input
                id="addtask"
                v-model="dataTask.text"
                type="text"
                class="form-control ps-3"
                placeholder="Add Task"
              >
            </label>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          type="submit"
          class="btn btn-primary"
          data-bs-dismiss="modal"
        >
          Add Task
        </button>
      </div>
    </div>
  </div>
</form>
</template>

<script>
import { Modal } from 'bootstrap';
import GetUser from '../../../stores/Account/getUser';
import AddTask from '../../../stores/ToDoList/addTask';

export default {
  data() {
    return {
      GetUser: GetUser(),
      AddTask: AddTask(),
      dataTask: {
        text: '',
      },
    };
  },
  methods: {
    async addTask() {
      const addTaskModel = new Modal(document.getElementById('addtaskmodal'));
      await this.AddTask.addTask(this.dataTask);

      if (this.AddTask.msgError) {
        addTaskModel.show();
        return;
      }
      this.GetUser.resetStateUser();
      await this.GetUser.getUser();
      addTaskModel.hide();
    },
  },
};
</script>

<style scoped lang="scss">
.modal {
  color: #000 !important;

  .form-control {
    border: none;
    border-bottom: 1px solid rgb($color: #000000, $alpha: 0.125) !important;
  }

  .form-control:focus {
    box-shadow: 0 0 0 0;
    border-bottom: 1px solid #000 !important;
  }
}
</style>
