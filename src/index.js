import 'normalize.css/normalize.css'
import './assets/stylesheets/main.scss'

import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';

//document.body.appendChild(new Vue(App).$mount().$el)

Vue.use(VueResource);

new Vue({
  el: '#vitrine-digital',
  render: h => h(App)
})