<template>
<div class="row sign-up py-5">
  <ImageQuran class="col-md-6 mt-5 pt-5" />
  <div class="col-md-6">
    <h1 class="mt-3 mb-4 text-center fw-bold">
      Sign Up
    </h1>
    <form
      class="row flex-column align-items-center my-3"
      @submit.prevent="signup"
    >
      <div
        v-if="messageError"
        class="col-md-9 mb-3"
      >
        <div
          class="alert alert-danger py-1 d-flex fw-normal text-capitalize"
          role="alert"
        >
          <i class="ms-1 bi bi-exclamation-circle fs-2" />
          <p class="fs-6 m-0 ms-2 align-self-center">
            {{ messageError }}
          </p>
        </div>
      </div>
      <div class="col-md-9 mb-3 d-flex flex-column flex-md-row">
        <label
          for="firstname"
          class="form-label w-100 me-3 position-relative"
        >
          First Name
          <input
            id="firstname"
            type="text"
            class="form-control mt-2 ps-5"
            placeholder="First Name"
          >
          <i class="bi bi-person fs-5 position-absolute start-0 top-50 ms-3" />
        </label>
        <label
          for="lastname"
          class="form-label w-100"
        >
          Last Name
          <input
            id="lastname"
            type="text"
            class="form-control mt-2 ps-3"
            placeholder="Last Name"
          >
        </label>
      </div>
      <div class="col-md-9 mb-3">
        <label
          for="username"
          class="form-label w-100 position-relative"
        >
          Username
          <input
            id="username"
            type="text"
            class="form-control ps-5 mt-2"
            placeholder="Username"
          >
          <i class="bi bi-person-fill fs-5 position-absolute start-0 top-50 ms-3" />
        </label>
      </div>
      <div class="col-md-9 mb-3">
        <label
          for="email"
          class="form-label w-100 position-relative"
        >
          E-mail
          <input
            id="email"
            type="email"
            class="form-control ps-5 mt-2"
            placeholder="Email@example.com"
          >
          <i class="bi bi-envelope fs-5 position-absolute start-0 top-50 ms-3" />
        </label>
      </div>
      <div class="col-md-9 mb-3">
        <label
          for="password"
          class="form-label w-100 position-relative"
        >
          Password
          <input
            id="password"
            type="password"
            class="form-control ps-5 mt-2"
            placeholder="*******"
          >
          <i class="bi bi-key fs-5 position-absolute start-0 top-50 ms-3" />
        </label>
      </div>
      <div class="col-md-9 mb-3">
        <label
          for="verifypassword"
          class="form-label w-100 position-relative"
        >
          Verify Password
          <input
            id="verifypassword"
            type="password"
            class="form-control ps-5 mt-2"
            placeholder="*******"
          >
          <i class="bi bi-key-fill fs-5 position-absolute start-0 top-50 ms-3" />
        </label>
      </div>
      <div class="col-md-9 mb-3">
        <button
          class="btn text-light"
          type="submit"
        >
          Sign Up
        </button>
      </div>
      <div class="col-md-9 my-3">
        <p class="m-0 text-center">
          Please <router-link
            class="text-decoration-none"
            :to="{ path: '/auth/signin' }"
            style="color: #159E72;"
          >
            Sign In
          </router-link>, if you have account!!!
        </p>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import SignUp from '../../stores/Account/signUp';
import ImageQuran from '../Layouts/ImageQuran.vue';

export default {
  components: { ImageQuran },
  data() {
    return {
      SignUp: SignUp(),
      messageError: null,
    };
  },
  methods: {
    async signup(e) {
      const newDataUser = {
        firstName: e.target.firstname.value,
        lastName: e.target.lastname.value,
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        verifyPassword: e.target.verifypassword.value,
      };

      await this.SignUp.signUp(newDataUser);
      if (this.SignUp.msgError) {
        const { message } = this.SignUp.msgError;
        this.messageError = message;
        return;
      }

      this.$router.push({ path: '/auth/signin' });
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/custom.scss';
@import '../../../node_modules/bootstrap/scss/mixins/breakpoints';

.sign-up {
  background-image: url('../../assets/img/masjid-siluet3.png');
  background-size: 60vw 100vh;
  background-repeat: no-repeat;
  background-position: 5% bottom;
  @include media-breakpoint-down(md) {
    background-size: 100%;
    background-position: bottom;
  }
}

input {
  border-color: #000;
}

input:focus {
  border-color: #000;
  box-shadow: 0 0 0 0.15rem rgba(0,0,0,0.3);
}

.btn {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background: rgb(21,158,114);
  background: linear-gradient(295deg, rgba(21,158,114,1) 0%, rgba(62,175,89,1) 100%);
}

.btn:focus {
  box-shadow: 0 0 0 0.15rem rgba(21,158,114,0.3);
}

</style>
