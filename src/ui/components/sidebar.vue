<template>
  <div class="sidebar-template">
    <h3>Sidebar</h3>
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <router-link to="/account">Account</router-link>
    </div>
    <div>
      <button v-if="auth.loggingIn === true">...</button>
      <button v-else-if="auth.userId" v-on:click="logout()">Logout</button>
      <button v-else v-on:click="login({userId: 1, admin: true, roles: []})">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    computed: mapState({
      auth: 'auth'
    }),
    methods: mapActions({
      login: 'auth/login',
      logout: 'auth/logout'
    })
  }
</script>

<style lang="stylus" scoped>
  .sidebar-template
    padding 15px
    height 100%
    background-color #8dd3a6
</style>