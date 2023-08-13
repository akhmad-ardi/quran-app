<template>
<div class="row sign-in py-5">
  <div class="col-md-7 pt-3 pb-5 py-md-3">
    <h1 class="mt-3 text-center fw-bold">
      Sign In
    </h1>
    <form
      class="row flex-column align-items-center mt-4"
      @submit.prevent="signin"
    >
      <div
        v-if="messageError"
        class="col-md-6"
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
      <div
        v-if="SignUp.msgSuccess"
        class="col-md-6"
      >
        <div
          class="alert alert-success alert-dismissible py-3 fw-normal text-capitalize fade show"
          role="alert"
        >
          {{ SignUp.msgSuccess.message }}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            @click="SignUp.resetSignUpState()"
          />
        </div>
      </div>
      <div class="col-md-6 text-center mb-3">
        <label
          class="form-label w-100 position-relative"
          for="email"
        >
          <p class="ms-2 mb-2 text-start">
            E-mail
          </p>
          <input
            id="email"
            v-model="dataUser.email"
            type="email"
            class="form-control ps-5"
            placeholder="Email@example.com"
          >
          <i class="fs-5 bi bi-envelope position-absolute start-0 top-50 ms-3" />
        </label>
      </div>
      <div class="col-md-6 text-center mb-3">
        <label
          class="form-label w-100 position-relative"
          for="password"
        >
          <p class="ms-2 mb-2 text-start">
            Password
          </p>
          <input
            id="password"
            v-model="dataUser.password"
            type="password"
            class="form-control ps-5"
            placeholder="*******"
          >
          <i class="fs-5 bi bi-key position-absolute start-0 top-50 ms-3" />
        </label>
      </div>
      <div class="col-md-6 text-center">
        <label
          for="rememberme"
          class="form-check-label mb-3"
        >
          <input
            id="rememberme"
            v-model="rememberMe"
            type="checkbox"
            class="form-check-input"
          >
          Remember Me
        </label>
      </div>
      <div class="col-md-6 d-grid gap-2 d-md-flex justify-content-md-center">
        <button
          class="btn-sign-in btn text-light me-md-2"
          type="submit"
        >
          Sign In
        </button>
        <button
          class="btn-sign-up btn position-relative"
          type="button"
        >
          Sign Up
          <router-link
            class="stretched-link"
            :to="{ path: '/signup' }"
          />
        </button>
      </div>
    </form>
  </div>
  <ImageQuran class="col-md-5" />
</div>
</template>

<script>
import VerifyToken from '../../stores/Account/verifyToken';
import SignIn from '../../stores/Account/signIn';
import SignUp from '../../stores/Account/signUp';
import ImageQuran from '../Layouts/ImageQuran.vue';

export default {
  components: { ImageQuran },
  data() {
    return {
      VerifyToken: VerifyToken(),
      SignUp: SignUp(),
      SignIn: SignIn(),
      dataUser: {
        email: '',
        password: '',
      },
      rememberMe: false,
      messageError: null,
    };
  },
  created() {
    if (this.$cookies.get('dataUser')) {
      const { email } = this.$cookies.get('dataUser');
      this.dataUser.email = email;
      this.rememberMe = true;
    }
  },
  methods: {
    async signin() {
      await this.SignIn.signIn(this.dataUser);
      if (this.SignIn.msgError) {
        const { message } = this.SignIn.msgError;
        this.messageError = message;
        return;
      }

      await this.VerifyToken.verifyToken();
      if (this.VerifyToken.isAuth) {
        // set cookie for remember me
        if (this.rememberMe) {
          const dataUser = JSON.stringify({ email: this.dataUser.email });
          this.$cookies.set('dataUser', dataUser, '7d');
        }
        if (this.$cookies.get('dataUser') && !this.rememberMe) {
          this.$cookies.remove('dataUser');
        }
        this.$router.push({ path: '/' });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/custom.scss';
@import '../../../node_modules/bootstrap/scss/mixins/breakpoints';

.sign-in {
  background-image: url('../../assets/img/masjid-siluet3.png');
  background-size: 45vw 85vh;
  background-repeat: no-repeat;
  background-position: 95% bottom;
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
  width: 50%;
  height: 50px;
  @include media-breakpoint-down(md) {
    width: 100%;
  }
  border-radius: 10px;
}

.btn-sign-in {
  background: rgb(21,158,114);
  background: linear-gradient(295deg, rgba(21,158,114,1) 0%, rgba(62,175,89,1) 100%);
}

.btn-sign-in:focus {
  box-shadow: 0 0 0 0.15rem rgba(21,158,114,0.3);
}

.btn-sign-up {
  border: 1px solid #202038;
}

.btn-sign-up:hover {
  color: #fff;
  background-color: #202038;
}

.btn-sign-up:focus {
  box-shadow: 0 0 0 0.15rem rgba(0,0,0,0.3);
}
</style>
