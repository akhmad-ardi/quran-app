<template>
<main class="d-flex flex-row">
  <SidebarAccount />
  <section class="container-fluid ms-3 py-3 py-md-3 ps-md-5 ps-5">
    <div class="row">
      <div class="col-md-5 mb-3 mb-md-0">
        <CardBookmark
          :bookmark="GetUser.Bookmark"
          :is-loading="GetUser.isLoading"
        />
      </div>
      <div class="col-md-7">
        <CardToDoList
          :to-do-list="GetUser.ToDoList"
          :is-loading="GetUser.isLoading"
        />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <CardHadits />
      </div>
    </div>
  </section>
</main>
</template>

<script>
import GetUser from '../../stores/Account/getUser';
import SidebarAccount from '../Layouts/SidebarAccount.vue';
import CardBookmark from './ComponentsAccount/CardBookmark.vue';
import CardToDoList from './ComponentsAccount/CardToDoList.vue';
import CardHadits from './ComponentsAccount/CardHadits.vue';

export default {
  components: {
    SidebarAccount, CardBookmark, CardToDoList, CardHadits,
  },
  data() {
    return {
      GetUser: GetUser(),
    };
  },
  async created() {
    await this.GetUser.getUser();
  },
};
</script>

<style scoped lang="scss">
section {
  background-color: #F5F9FC;
  border-radius: 30px 0 0 30px;
}
</style>
