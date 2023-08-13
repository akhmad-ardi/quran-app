<template>
<div class="card py-5">
  <div class="card-body w-100">
    <h1 class="text-center text-decoration-underline text-white">
      Profile Update
    </h1>
    <form
      class="row flex-column align-items-center my-3"
      @submit.prevent="updateUser"
    >
      <div
        v-if="UpdateUser.msgError"
        class="col-md-6 alert alert-warning text-capitalize"
        role="alert"
      >
        {{ UpdateUser.msgError }}
      </div>
      <div class="col-md-6 mb-3 d-flex flex-column flex-md-row">
        <label
          for="firstname"
          class="form-label w-100 me-2 position-relative"
        >
          <span class="ms-1">First Name</span>
          <input
            id="firstname"
            v-model="DataUserUpdate.firstName"
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
          <span class="ms-1">Last Name</span>
          <input
            id="lastname"
            v-model="DataUserUpdate.lastName"
            type="text"
            class="form-control mt-2 ps-3"
            placeholder="Last Name"
          >
        </label>
      </div>
      <div class="col-md-6 mb-3">
        <label
          for="username"
          class="form-label w-100 position-relative"
        >
          <span class="ms-1">Username</span>
          <input
            id="username"
            v-model="DataUserUpdate.username"
            type="text"
            class="form-control ps-5 mt-2"
            placeholder="Username"
          >
          <i class="bi bi-person-fill fs-5 position-absolute start-0 top-50 ms-3" />
        </label>
      </div>
      <div class="col-md-6 mb-3">
        <label
          for="email"
          class="form-label w-100 position-relative"
        >
          <span class="ms-1">E-mail</span>
          <input
            id="email"
            v-model="DataUserUpdate.email"
            type="email"
            class="form-control ps-5 mt-2"
            placeholder="Email@example.com"
          >
          <i class="bi bi-envelope fs-5 position-absolute start-0 top-50 ms-3" />
        </label>
      </div>
      <div class="col-md-6 mb-3">
        <div class="d-grid gap-2 d-md-flex fw-bold">
          <button
            type="submit"
            class="btn py-3 w-100 me-2"
          >
            Update User
          </button>
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import GetUser from '../../../stores/Account/getUser';
import UpdateUser from '../../../stores/Account/updateUser';

export default {
  props: {
    dataUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      UpdateUser: UpdateUser(),
      GetUser: GetUser(),
      DataUserUpdate: {
        firstName: this.dataUser.firstName,
        lastName: this.dataUser.lastName,
        username: this.dataUser.username,
        email: this.dataUser.email,
      },
    };
  },
  methods: {
    async updateUser() {
      await this.UpdateUser.updateUser(this.DataUserUpdate);

      if (this.UpdateUser.msgSuccess) {
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
