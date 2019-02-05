import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: { name: 'dashboard' } },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: Dashboard
    }
  ]
})
