<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
<footer class="container-fluid px-md-5 py-5 border-top">
  <div class="row">
    <div class="col-md-4">
      <ul class="list-unstyled ms-md-5">
        <li>
          <a
            class="quran-app text-decoration-none fw-bold"
            href=""
          >Quran<span>.app</span></a>
        </li>
        <li>
          <p style="color: #737780;">
            The Quran is the central religious text of Islam.
          </p>
        </li>
        <li>
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
              <a
                href="#"
                class="px-2 py-1 social-media"
              >
                <i class="bi bi-facebook" />
              </a>
            </li>
            <li class="list-inline-item mx-4">
              <a
                class="mt-2 px-2 py-1 social-media"
                href="#"
              >
                <i class="bi bi-instagram" />
              </a>
            </li>
            <li class="list-inline-item ms-2">
              <a
                href="#"
                class="px-2 py-1 social-media"
              >
                <i class="bi bi-globe2" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-md-8 px-md-5 pt-3">
      <div class="row px-md-5">
        <div class="col-md-4">
          <ul class="list-unstyled ms-md-5">
            <li class="mb-3">
              <a class="title-menu text-decoration-none">About Quran</a>
            </li>
            <li class="my-2">
              <a
                class="list-menu text-decoration-none"
                href="#"
              >Our Members</a>
            </li>
            <li class="my-2">
              <a
                class="list-menu text-decoration-none"
                href="#"
              >FAQ</a>
            </li>
            <li class="my-2">
              <a
                class="list-menu text-decoration-none"
                href="#"
              >Blogs</a>
            </li>
            <li class="my-2">
              <a
                class="list-menu text-decoration-none"
                href="#"
              >Privicy Police</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="list-unstyled ms-md-5">
            <li class="mb-3">
              <a class="title-menu text-decoration-none">Important Links</a>
            </li>
            <li class="my-2">
              <a
                class="list-menu text-decoration-none"
                href="#"
              >Sunnah</a>
            </li>
            <li class="my-2">
              <a
                class="list-menu text-decoration-none"
                href="#"
              >Salah</a>
            </li>
            <li class="my-2">
              <a
                class="list-menu text-decoration-none"
                href="#"
              >Quran Reflect</a>
            </li>
            <li class="my-2">
              <a
                class="list-menu text-decoration-none"
                href="#"
              >Home</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="list-unstyled ms-md-5">
            <li class="mb-3">
              <a class="title-menu text-decoration-none">Other Links</a>
            </li>
            <li class="my-2">
              <a
                class="list-menu text-decoration-none"
                href="#"
              >Sitemap</a>
            </li>
            <li class="my-2">
              <a
                class="list-menu text-decoration-none"
                href="#"
              >Surah Yaseen</a>
            </li>
            <li class="my-2">
              <a
                class="list-menu text-decoration-none"
                href="#"
              >Ayat Al-Kursi</a>
            </li>
            <li class="my-2">
              <a
                class="list-menu text-decoration-none"
                href="#"
              >Surah Al-Kahf</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>

<style scoped lang="scss">
footer {
  background-color: #202038;
  color: #fff;
}
.quran-app {
  color: #31AA60 !important;
   font-size: 38px;
   span {
    font-size: 12px;
    color: #fff;
   }
}

.social-media {
  font-size: 28px;
  color: #fff;
}
.social-media:hover {
  border-radius: 100%;
  background-color: #fff;
  color: #202038;
}

.title-menu {
  color: #fff;
  font-size: 20px;
}

.list-menu {
  font-size: 18px;
  color: #737780;
}
.list-menu:hover {
  font-size: 18px;
  color: #fff;
}
</style>
