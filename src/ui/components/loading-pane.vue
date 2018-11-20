<template>
  <div class="loading-pane">
      <flower-spinner :color="'#ff1d5e'"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { FlowerSpinner } from 'epic-spinners'

  export default Vue.extend({
    components: {
      FlowerSpinner
    }
  })
</script>

<style lang="stylus" scoped>
  .loading-pane
    display flex
    flex-direction column
    align-items center
    justify-content center
    height 100%
</style>