<template>
<div class="card py-5">
  <div class="card-body w-100">
    <h1 class="text-center text-decoration-underline text-white">
      Profile
    </h1>
    <form class="row flex-column align-items-center my-3">
      <div class="col-md-6 mb-3 d-flex flex-column flex-md-row">
        <label
          for="firstname"
          class="form-label w-100 me-2 position-relative"
        >
          <span class="ms-1">Name</span>
          <input
            id="firstname"
            type="text"
            class="form-control mt-2 ps-5"
            placeholder="First Name"
            :value="dataUser.firstName"
            disabled
            readonly
          >
          <i class="bi bi-person fs-5 position-absolute start-0 top-50 ms-3" />
        </label>
        <label
          for="lastname"
          class="form-label w-100"
        >
          &nbsp;
          <input
            id="lastname"
            type="text"
            class="form-control mt-2 ps-3"
            placeholder="Last Name"
            :value="dataUser.lastName"
            disabled
            readonly
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
            type="text"
            class="form-control ps-5 mt-2"
            placeholder="Username"
            :value="dataUser.username"
            disabled
            readonly
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
            type="email"
            class="form-control ps-5 mt-2"
            placeholder="Email@example.com"
            :value="dataUser.email"
            disabled
            readonly
          >
          <i class="bi bi-envelope fs-5 position-absolute start-0 top-50 ms-3" />
        </label>
      </div>
      <div class="col-md-6 mb-3">
        <div class="d-grid gap-2 d-md-flex fw-bold">
          <router-link
            class="btn py-3 w-100 me-2"
            :to="{ path: '/account/profile/user' }"
          >
            Edit User
          </router-link>
          <router-link
            class="btn py-3 w-100"
            :to="{ path: '/account/profile/password' }"
          >
            Edit Password
          </router-link>
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<script>
export default {
  props: {
    dataUser: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
  .card {
    border-radius: 35px;
    background: rgb(62,175,89);
    background-image: url('../../../assets/img/masjid-siluet4.png'), linear-gradient(295deg, rgba(62,175,89,1) 0%, rgba(21,158,114,1) 100%);
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
