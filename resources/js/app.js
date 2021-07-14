require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './components/App.vue';
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import '../css/style.css';

Vue.component('pagination', require('laravel-vue-pagination'));

Vue.use(VueRouter);
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);

import Index from './components/Index.vue';


const routes = [
  {
      name: 'home',
      path: '/',
      component: Index
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');
