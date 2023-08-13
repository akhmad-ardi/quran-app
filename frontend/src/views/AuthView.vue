<template>
<NavbarMain />
<main class="container-fluid fw-bold">
  <LoadingSignIn v-if="VerifyToken.isLoading" />
  <router-view
    v-else
    v-slot="{ Component }"
  >
    <transition
      name="fade"
      mode="out-in"
    >
      <Component :is="Component" />
    </transition>
  </router-view>
</main>
<FooterMain />
</template>

<script>
import VerifyToken from '../stores/Account/verifyToken';
import NavbarMain from '../components/Layouts/NavbarMain.vue';
import FooterMain from '../components/Layouts/FooterMain.vue';
import LoadingSignIn from '../components/Layouts/LoadingSignIn.vue';

export default {
  components: { NavbarMain, FooterMain, LoadingSignIn },
  data() {
    return {
      VerifyToken: VerifyToken(),
    };
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

main {
  background-color: #F5F9FC;
}
</style>
