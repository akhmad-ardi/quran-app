<template>
<aside
  class="d-flex flex-column flex-shrink-0 pt-md-4 pb-md-3 px-md-3"
  style="height: 100vh;"
>
  <div class="mt-5 text-center">
    <img
      src="../../assets/img/Pict-User.png"
      alt="Picture User"
    >
  </div>
  <ul class="my-5 mx-auto nav nav-pills flex-column mb-auto">
    <li class="nav-item fw-bold">
      <router-link
        class="nav-link fs-6 link-dark"
        :to="{ path: '/account/dashboard' }"
      >
        <i class="bi bi-house-door-fill fs-5 me-2" />
        <span class="d-none d-md-inline">Dashboard</span>
      </router-link>
    </li>
    <li class="nav-item fw-bold">
      <router-link
        class="nav-link fs-6 link-dark"
        :to="{ path: '/account/profile' }"
      >
        <i class="bi bi-person-circle fs-5 me-2" />
        <span class="d-none d-md-inline">Profile</span>
      </router-link>
    </li>
    <li class="nav-item fw-bold">
      <router-link
        class="nav-link fs-6 link-dark"
        :to="{ path: '/account/todolist' }"
      >
        <i class="bi bi-list-check fs-5 me-2" />
        <span class="d-none d-md-inline">To Do List</span>
      </router-link>
    </li>
    <li class="nav-item fw-bold">
      <a
        href="#"
        class="nav-link fs-6 link-dark"
      >
        <i class="bi bi-gear-fill fs-5 me-2" />
        <span class="d-none d-md-inline">Settings</span>
      </a>
    </li>
    <li class="nav-item fw-bold">
      <router-link
        class="nav-link fs-6 link-dark"
        :to="{ path: '/' }"
      >
        <i class="bi bi-menu-app fs-5 me-2" />
        <span class="d-none d-md-inline">Main Menu</span>
      </router-link>
    </li>
  </ul>
  <hr class="mx-3">
  <div class="text-center fw-bold fs-6">
    <button
      class="btn text-decoration-none text-danger"
      @click="signOut"
    >
      <i class="bi bi-power fs-5" />
      <span class="d-none d-md-inline">Sign Out</span>
    </button>
  </div>
</aside>
</template>

<script>
import SignOut from '../../stores/Account/SignOut';
import VerifyToken from '../../stores/Account/verifyToken';
import GetUser from '../../stores/Account/getUser';

export default {
  data() {
    return {
      SignOut: SignOut(),
      VerifyToken: VerifyToken(),
      GetUser: GetUser(),
    };
  },
  methods: {
    async signOut() {
      await this.SignOut.singOut();

      if (this.SignOut.msgSuccess) {
        await this.VerifyToken.verifyToken();

        if (!this.VerifyToken.isAuth) {
          this.GetUser.resetStateUser();
          this.$router.push({ path: '/auth/signin' });
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/custom.scss';
@import '../../../node_modules/bootstrap/scss/mixins/breakpoints';

aside {
  width: 280px;
  background-color: #F5F9FC;
  @include media-breakpoint-down(md) {
    width: 60px;
    position: fixed;
    top: 0;
    left: 0;
  }
  background-color: #FFF;

  img {
    width: 120px;
    height: 120px;
    @include media-breakpoint-down(md) {
      width: 30px;
      height: 30px;
    }
  }

  .btn {
    width: 80%;
    box-shadow: 0 0 0 0;
  }

  .btn:hover {
    color: #fff !important;
    background-color: #DC3545;
  }

  .active, .nav-link:hover {
    background: #31AA60;
    background: linear-gradient(to right, #31AA60 0%, #159E72 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
