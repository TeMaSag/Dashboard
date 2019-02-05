import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

