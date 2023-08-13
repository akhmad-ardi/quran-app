<template>
<div
  class="card py-3 position-relative"
  style="height: 100%;"
>
  <img
    class="position-absolute top-0 start-0 ms-5"
    src="../../../assets/img/lentera-siluet7.png"
    alt="lentera-siluet7"
  >
  <img
    class="position-absolute top-0 end-0 me-4"
    src="../../../assets/img/lentera-siluet8.png"
    alt="lentera-siluet8"
  >
  <div class="card-body">
    <h3 class="text-center text-decoration-underline fw-bold">
      To Do List
    </h3>

    <div
      v-if="isLoading"
      class="text-center"
    >
      <h1>Loading...</h1>
    </div>

    <ul
      v-else
      class="mx-auto mt-3"
      :class="toDoList.tasks.length === 0 ? 'list-unstyled' : ''"
      style="width: 60%;"
    >
      <li
        v-for="(task, index) in toDoList.tasks"
        :key="index"
      >
        <h4
          class="m-0"
          :class="task.finished ? 'text-decoration-line-through': ''"
        >
          {{ task.text }}
        </h4>
      </li>
      <li
        v-if="toDoList.tasks.length === 0"
      >
        <h4 class="m-0 text-center">
          You don't have task!!!
        </h4>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
    toDoList: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  color: #fff;
  border-radius: 35px;
  background-color: #172542;
  background-image: url('../../../assets/img/bulan-masjid.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70% 90%;
}
</style>
