import Vue from 'vue'
import Router from 'vue-router'
import Home from 'ui/pages/home.vue'
import Account from 'ui/pages/account.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home

    },
    {
      path: '/account',
      name: 'account',
      component: Account
    }
  ]
})