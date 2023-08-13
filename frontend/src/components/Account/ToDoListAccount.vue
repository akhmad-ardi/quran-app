<template>
<main class="d-flex flex-row">
  <SidebarAccount />
  <section class="container-fluid ms-3 py-3 py-md-3 ps-md-5 ps-5">
    <div class="row justify-content-center">
      <div class="col-md-9">
        <div class="card">
          <div class="card-body px-4 px-md-5 py-3">
            <h1 class="my-3 text-center fw-bold text-decoration-underline">
              To Do List
            </h1>

            <h3
              v-if="GetUser.isLoading"
              class="text-center"
            >
              Loading...
            </h3>

            <ul
              v-else
              class="mx-md-5 px-0 px-md-5 list-group list-group-flush"
            >
              <li
                v-show="GetUser.ToDoList.tasks.length === 0"
                class="list-group-item"
              >
                <h4 class="text-center">
                  No Task
                </h4>
              </li>
              <li
                v-for="(task, index) in GetUser.ToDoList.tasks"
                :key="index"
                class="px-md-2 fs-4 list-group-item d-flex justify-content-between"
              >
                <span :class="task.finished ? 'text-decoration-line-through':''">{{ task.text }}</span>
                <div clsss="d-flex">
                  <button
                    class="p-0 px-2 btn btn-action me-1"
                    :class="task.finished ? 'btn-warning':'btn-success'"
                    type="button"
                    @click="finishTask(task)"
                  >
                    <i
                      v-if="task.finished"
                      class="m-0 bi bi-x fs-5"
                    />
                    <i
                      v-else
                      class="m-0 bi bi-check fs-5"
                    />
                  </button>
                  <button
                    class="p-0 px-2 btn btn-action btn-danger"
                    type="button"
                    @click="deleteTask(task._id)"
                  >
                    <i class="m-0 bi bi-trash-fill fs-5" />
                  </button>
                </div>
              </li>
              <li class="px-md-4 list-group-item text-center">
                <button
                  type="button"
                  class="btn btn-success mt-1 px-4 py-2 button-add-task"
                  data-bs-toggle="modal"
                  data-bs-target="#addtaskmodal"
                >
                  Add Task
                </button>
                <ModalAddTask />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
</template>

<script>
import GetUser from '../../stores/Account/getUser';
import FinishStore from '../../stores/ToDoList/finishTask';
import DeleteTask from '../../stores/ToDoList/deleteTask';
import SidebarAccount from '../Layouts/SidebarAccount.vue';
import ModalAddTask from './ComponentsAccount/ModalAddTask.vue';

export default {
  components: { SidebarAccount, ModalAddTask },
  data() {
    return {
      GetUser: GetUser(),
      FinishStore: FinishStore(),
      DeleteTask: DeleteTask(),
    };
  },
  async created() {
    if (this.GetUser.isLoading) {
      await this.GetUser.getUser();
    }
  },
  methods: {
    async finishTask(task) {
      if (task.finished) {
        // eslint-disable-next-line no-restricted-globals, no-alert
        if (confirm('Are you not finish?')) {
          // eslint-disable-next-line no-underscore-dangle
          await this.FinishStore.finishTask(task._id);
          if (this.FinishStore.msgSuccess) this.GetUser.getUser();
        }
        return;
      }

      // eslint-disable-next-line no-restricted-globals, no-alert
      if (confirm('Are you finish?')) {
        // eslint-disable-next-line no-underscore-dangle
        await this.FinishStore.finishTask(task._id);
        if (this.FinishStore.msgSuccess) this.GetUser.getUser();
      }
    },
    async deleteTask(id) {
      // eslint-disable-next-line no-restricted-globals, no-alert
      if (confirm('Are you sure?')) {
        await this.DeleteTask.deleteTask(id);
        if (this.DeleteTask.msgSuccess) {
          await this.GetUser.getUser();
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
section {
  background-color: #F5F9FC;
  border-radius: 30px 0 0 30px;

  .card {
    color: #f5f5f5;
    background-color: #202038;
    border-radius: 35px;

    .list-group-item {
      color: #f5f5f5;
      background-color: rgba($color: #000000, $alpha: 0);
      border-bottom: 1px solid rgba($color: #f5f5f5, $alpha: 0.125);
    }

    .btn-action:focus {
      box-shadow: 0 0 0 0 !important;
    }

    .list-group-item:last-child {
      border-bottom: 0;

      .button-add-task {
        font-size: 20px;
        border-radius: 10px;
        background: rgb(62,175,89);
        background: linear-gradient(90deg, rgba(62,175,89,1) 0%, rgba(21,158,114,1) 100%);
      }
      .button-add-task:focus {
        box-shadow: 0 0 7px 1px #3eaf55;
      }
    }
  }
}
</style>
