<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <h1 class="sidebar-title d-md-down-none" v-show='is_large'>ResAdmin</h1>

    <CRenderFunction flat :content-to-render="$options.nav"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'

export default {
  name: 'TheSidebar',
  nav,
  data(){
    return {
      is_large:false
    }
  },
  computed: {
    show () {
      return this.$store.state.sidebarShow 
    },
    minimize () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.is_large=!this.is_large
      return this.$store.state.sidebarMinimize 
    }
  }
}
</script>

<style scoped>

.sidebar-title{
  margin:25px;
}
</style>
