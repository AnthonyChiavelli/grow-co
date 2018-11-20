<template>
  <AsyncPage id="home" :loading="loggingIn">
    Home page
  </AsyncPage>
</template>

<script lang="ts">
  import { mapGetters } from 'vuex'
  import AsyncPage from 'ui/hocs/async-page.vue'

  export default {
    computed: mapGetters('auth', {
      loggingIn: 'loggingIn'
    }),
    components: {
      AsyncPage
    }
  }
</script>

<style lang="stylus" scoped>
  #home
    background-color white
    height 100%
    padding 15px
</style>