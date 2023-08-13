import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueCookies from 'vue-cookies';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

const pinia = createPinia();
const app = createApp(App);

app.use(VueCookies);
app.use(pinia);
app.use(router);
app.mount('#app');
