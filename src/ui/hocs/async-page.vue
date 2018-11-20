<template>
    <div v-if="loading">
        <loading-pane/>
    </div>
    <div v-else>
      <slot/>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import LoadingPane from 'ui/components/loading-pane.vue'

  export default Vue.extend({
    props: {
      loading: Boolean
    },
    components: {
      LoadingPane
    }
  })
</script>

<style lang="stylus" scoped>

</style>