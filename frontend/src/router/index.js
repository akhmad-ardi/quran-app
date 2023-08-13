/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
import axios from 'axios';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import QuranView from '../views/QuranView.vue';
import SurahView from '../views/SurahView.vue';
import JuzView from '../views/JuzView.vue';
import AuthView from '../views/AuthView.vue';
import AccountView from '../views/AccountView.vue';

import NotFound from '../components/NotFound.vue';

// child component
import ListSurah from '../components/Quran/ListSurah.vue';
import ListJuz from '../components/Quran/ListJuz.vue';
import SignIn from '../components/Auth/SignIn.vue';
import SignUp from '../components/Auth/SignUp.vue';
import DashboardAccount from '../components/Account/DashboardAccount.vue';
import ProfileAccount from '../components/Account/ProfileAccount.vue';
import ProfileData from '../components/Account/ComponentsAccount/ProfileData.vue';
import ProfileUpdate from '../components/Account/ComponentsAccount/ProfileUpdate.vue';
import ProfilePassword from '../components/Account/ComponentsAccount/ProfilePassword.vue';
import ToDoListAccount from '../components/Account/ToDoListAccount.vue';

// auth
async function verifyToken() {
  try {
    const res = await axios.get('/api/token', { xsrfCookieName: 'TokenUser' });
    const { isAuth } = res.data;
    return isAuth;
  } catch (error) {
    return error.response.data.isAuth;
  }
}

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    component: AboutView,
  },
  {
    path: '/quran',
    component: QuranView,
    children: [
      {
        path: 'surah',
        component: ListSurah,
      },
      {
        path: 'juz',
        component: ListJuz,
      },
    ],
  },
  {
    path: '/quran/surah/:number',
    component: SurahView,
    beforeEnter: (to) => {
      const number = parseInt(to.params.number, 10);
      if (number < 1 || number > 114 || isNaN(number)) {
        return { path: '/quran/surah' };
      }
    },
  },
  {
    path: '/quran/juz/:number',
    component: JuzView,
    beforeEnter: (to) => {
      const number = parseInt(to.params.number, 10);
      if (number < 1 || number > 30 || isNaN(number)) {
        return { path: '/quran/juz' };
      }
    },
  },
  {
    path: '/auth',
    component: AuthView,
    async beforeEnter(to) {
      if (to.fullPath === '/auth') return { path: '/auth/signin' };
      if (to.fullPath === '/signin') return { path: '/auth/signin' };
      if (to.fullPath === '/signup') return { path: '/auth/signup' };

      if (await verifyToken()) {
        return { path: '/account/dashboard' };
      }
    },
    children: [
      {
        path: 'signin',
        component: SignIn,
      },
      {
        path: 'signup',
        component: SignUp,
      },
    ],
  },
  {
    path: '/account',
    component: AccountView,
    async beforeEnter(to) {
      if (to.fullPath === '/account') return { path: '/account/dashboard' };
      if (!await verifyToken()) return { path: '/auth/signin' };
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardAccount,
      },
      {
        path: 'profile',
        component: ProfileAccount,
        children: [
          {
            path: '',
            component: ProfileData,
          },
          {
            path: 'user',
            beforeEnter(to, from) {
              if (to.fullPath === '/account/profile/user' && from.fullPath === '/') return { path: '/account/profile' };
            },
            component: ProfileUpdate,
          },
          {
            path: 'password',
            beforeEnter(to, from) {
              if (to.fullPath === '/account/profile/password' && from.fullPath === '/') return { path: '/account/profile' };
            },
            component: ProfilePassword,
          },
        ],
      },
      {
        path: 'todolist',
        component: ToDoListAccount,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    beforeEnter(to) {
      if (to.fullPath === '/signin') return { path: '/auth/signin' };
      if (to.fullPath === '/signup') return { path: '/auth/signup' };
    },
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes,
});

export default router;
