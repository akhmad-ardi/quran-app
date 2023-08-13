<template>
<div class="card py-5">
  <div class="card-body w-100">
    <h1 class="text-center text-decoration-underline text-white">
      Update Password
    </h1>
    <form
      class="row flex-column align-items-center my-3"
      @submit.prevent="updatePassword"
    >
      <div
        v-if="UpdatePassword.msgError"
        class="col-md-6 py-3 alert alert-warning text-capitalize"
        role="alert"
      >
        {{ UpdatePassword.msgError }}
      </div>
      <div class="col-md-6">
        <label
          for="oldpassword"
          class="form-label mb-3 w-100 position-relative"
        >
          <span class="ms-1">Old Password</span>
          <input
            id="oldpassword"
            v-model="dataPassword.oldPassword"
            type="password"
            class="form-control mt-1 ps-5"
            placeholder="*******"
          >
          <i class="ms-3 bi bi-key-fill fs-5 position-absolute start-0 top-50" />
        </label>
      </div>
      <div class="col-md-6">
        <label
          for="newpassword"
          class="form-label mb-3 w-100 position-relative"
        >
          <span class="ms-1">New Password</span>
          <input
            id="newpassword"
            v-model="dataPassword.newPassword"
            type="password"
            class="form-control mt-1 ps-5"
            placeholder="*******"
          >
          <i class="ms-3 bi bi-key fs-5 position-absolute start-0 top-50" />
        </label>
      </div>
      <div class="col-md-6">
        <label
          for="confirmpassword"
          class="form-label mb-3 w-100 position-relative"
        >
          <span class="ms-1">Confirm Password</span>
          <input
            id="confirmpassword"
            v-model="dataPassword.verifyPassword"
            type="password"
            class="form-control mt-1 ps-5"
            placeholder="*******"
          >
          <i class="ms-3 bi bi-key fs-5 position-absolute start-0 top-50" />
        </label>
      </div>
      <div class="col-md-6">
        <button
          type="submit"
          class="btn mt-3 py-3 w-100"
        >
          Update Password
        </button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import GetUser from '../../../stores/Account/getUser';
import UpdatePassword from '../../../stores/Account/updatePassword';

export default {
  data() {
    return {
      GetUser: GetUser(),
      UpdatePassword: UpdatePassword(),
      dataPassword: {
        oldPassword: '',
        newPassword: '',
        verifyPassword: '',
      },
    };
  },
  methods: {
    async updatePassword() {
      await this.UpdatePassword.updatePassword(this.dataPassword);

      if (this.UpdatePassword.msgSuccess) {
        await this.GetUser.getUser();
        this.$router.push({ path: '/account/profile' });
      }
    },
  },
};
</script>

<style scoped lang="scss">
  .card {
    border-radius: 35px;
    background: rgb(62,175,89);
    background-image: url('../../../assets/img/masjid-siluet4.png'), linear-gradient(295deg, rgba(21,158,114,1) 0%,rgba(62,175,89,1) 100%);
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100% 100%;

    .form-label {
      color: #172542;

      .form-control {
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 8px;
        border: 1px solid #172542;
      }

      .form-control:focus {
        box-shadow: 0px 0px 3px 1px #172542;
      }

    }

    .btn {
      color: #fff;
      font-size: 20px;
      border-radius: 20px;
      box-shadow: -1px 1px 4px #172542;
      background: rgb(62,175,89);
      background: linear-gradient(180deg, rgba(62,175,89,1) 0%, rgba(21,158,114,1) 100%);
    }
  }
</style>
