<template>
  <div class="c-app">
    <CWrapper>
      <CHeader fixed with-subheader light>
        <CHeaderNav class="d-md-down-none ml-auto mr-3">
          <CHeaderNavItem class="px-3 row">
            <CHeaderNavLink to="/visitor/files">
            PDF Files 
            </CHeaderNavLink>
            <CHeaderNavLink to="/visitor/html-snippets">
            HTML Snippets 
            </CHeaderNavLink>
            <CHeaderNavLink to="/visitor/links">
            Links 
            </CHeaderNavLink>
          </CHeaderNavItem>
        </CHeaderNav>
      </CHeader>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
    </CWrapper>
  </div>
</template>

<script>
export default {
  name: "TheVisitorContainer",
  components: {},
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
