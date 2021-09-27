<template>
  <CRow>
    <CCol sm="12">
      <h2>Links</h2>
    </CCol>
    <CCol sm="4" v-for="item in items" :key="item.id">
      <CCard>
        <CCardHeader>
          <CRow class="mx-2">
            <strong>{{ item.title }}</strong>
          </CRow>
        </CCardHeader>

        <CCardBody>
          <CRow class="text-center">
            <a
              :href="'http://' + item.link"
              class="ml-3"
              :target="
                (item.open_new_tab == true || item.open_new_tab == 1) ? '_blank' : ''
              "
              rel="noopener"
            >
              {{ item.link }}
            </a>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "ListLinksVisitor",
  data() {
    return {
      items: [],
    };
  },
  computed: {},
  mounted() {
    this.$store.dispatch("links").then((data) => {
      this.items = data;
    });
  },
  methods: {},
};
</script>
