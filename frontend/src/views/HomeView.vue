<template>
<NavbarMain
  class="fixed-top"
  :class="{ 'bg-home': changedColor }"
  style="transition: background-color 0.5s;"
/>
<main
  id="home"
  class="py-3"
>
  <section
    class="mt-2 container-fluid home"
  >
    <div class="row flex-md-row-reverse">
      <div class="col-md-5 text-md-center">
        <img
          class="mb-3 mb-md-0 mx-md-0"
          src="../assets/img/quran.png"
          alt="quran"
        >
      </div>
      <div class="col-md-7">
        <h1 class="fw-bold text-center text-md-start">
          Read Quran Everyday. Add on Your Daily Routine
        </h1>
        <p class="fw-bold my-4 lh-base text-center text-md-start">
          The Quran is the central religious text of Islam. Muslims believe the Qur’an is the book of divine guidance and direction fo mankind.
        </p>
        <div class="text-center text-md-start">
          <router-link
            class="btn btn-read-quran py-3"
            :to="{ path: '/quran' }"
          >
            Read Qur'an
          </router-link>
          <router-link
            v-if="VerifyToken.isAuth"
            class="btn btn-sign-and-about ms-md-3 mt-3 mt-md-0 py-3"
            :to="{ path: '/account/dashboard' }"
          >
            <i class="bi bi-person-circle" />
            Account
          </router-link>
          <router-link
            v-else
            class="btn btn-sign-and-about ms-md-3 mt-3 mt-md-0 py-3"
            :to="{ path: '/auth/signin' }"
          >
            Sign In
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <section
    id="about"
    class="container py-5"
  >
    <div class="row py-5">
      <div class="col-md-5 text-center">
        <img
          class="img-about"
          src="../assets/img/img-about.png"
          alt="img-about"
        >
      </div>
      <div class="col-md-7 py-3 text-center text-md-start">
        <h1 class="fw-bold">
          About Quran.app
        </h1>
        <p class="lh-base">
          The Noble Quran is the central religious text of islam. Muslims believe the Qur'an is the book of Divine guidance and direction for mankind, and consider the original Arabic text the final revelation of Allah.
        </p>
        <p class="lh-base">
          All translations of the original Arabic text are thus interpretat ions of the original meanings and should be embraced as such.
        </p>
        <router-link
          class="btn btn-sign-and-about mt-3 py-3"
          :to="{ path: '/about' }"
        >
          Read Our Story
        </router-link>
      </div>
    </div>
  </section>
</main>
<FooterMain />
</template>

<script>
import VerifyToken from '../stores/Account/verifyToken';
import NavbarMain from '../components/Layouts/NavbarMain.vue';
import FooterMain from '../components/Layouts/FooterMain.vue';

export default {
  components: { NavbarMain, FooterMain },
  data() {
    return {
      changedColor: true,
      VerifyToken: VerifyToken(),
    };
  },
  created() {
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.pageYOffset >= 200) {
        this.changedColor = false;
        return;
      }
      this.changedColor = true;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/custom.scss';
@import '../../node_modules/bootstrap/scss/mixins/breakpoints';

h1 {
    font-size: 48px;
}

.bg-home {
    background-color: #F5F9FC !important;
    transition: background-color 0.5s;
}

.home {
  padding-top: 50px;
  padding-bottom: 50px;
  // desktop
  @include media-breakpoint-up(md) {
      padding-top: 80px;
      padding-left: 200px;
      padding-right: 150px;
      background-size: 780px 580px;
      background-position: right bottom;
  }
  background-color: #F5F9FC;
  background-image: url('../assets/img/masjid-siluet1.png');
  background-size: 100% 50%;
  background-repeat: no-repeat;
  background-origin: padding-box;
  background-position: center bottom;
  p {
    color: #737780;
    font-size: 24px;
  }
}

.btn {
  width: 250px;
  font-size: 24px;
  border-radius: 10px !important;
}

.btn:focus {
  box-shadow: 0 0 0 0;
}

.btn-read-quran {
  color: #fff;
  background-image: linear-gradient(to bottom right, #159E72, #3EAF59);
}

.btn-sign-and-about {
  color: #202038;
  background-color: rgba($color: #000000, $alpha: 0);
  border: 1px solid #000;
}

.btn-sign-and-about:hover {
  color: #fff;
  background-color: #202038;
}

.container {
  p {
    font-size: 18px;
  }
}

.img-about {
    background-image: url('../assets/img/bg-image.png');
}
</style>
