<template>
  <div id="app-template">
    <div class="sidebar-container">
      <Sidebar></Sidebar>
    </div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import Sidebar from 'ui/components/sidebar.vue'

  export default {
    name: 'app',
    props: [
      'showSidebar',
      'sidebar'
    ],
    components: {
      Sidebar
    }
  }
</script>

<style lang="stylus" scoped>
  #app-template
    display flex
    flex-direction row
    height 100vh
    flex-grow 1

    .sidebar-container
      flex 5

    .main-content
      /*padding 15px*/
      flex 30
</style>

<style lang="stylus">
  body
    margin 0
</style>