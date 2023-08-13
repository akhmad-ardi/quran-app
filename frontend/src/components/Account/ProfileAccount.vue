<template>
<main class="d-flex flex-row">
  <SidebarAccount />
  <section class="container-fluid ms-3 py-3 py-md-3 ps-md-5 ps-5">
    <div class="row justify-content-center">
      <div class="col-md-9">
        <router-view
          v-slot="{ Component }"
          :data-user="GetUser.User"
        >
          <transition
            name="fade"
            mode="out-in"
          >
            <Component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </section>
</main>
</template>

<script>
import GetUser from '../../stores/Account/getUser';
import SidebarAccount from '../Layouts/SidebarAccount.vue';

export default {
  components: {
    SidebarAccount,
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
// fade animation
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
// fade animation
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-out;
}

section {
  background-color: #F5F9FC;
  border-radius: 30px 0 0 30px;
}
</style>
