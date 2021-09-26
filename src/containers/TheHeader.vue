<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/">
          Home
        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
   
  </CHeader>
</template>

<script>

export default {
  name: 'TheHeader',
  components: {
    
  } 
}
</script>
