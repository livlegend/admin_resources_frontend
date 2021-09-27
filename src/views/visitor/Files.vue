<template>
  <CRow>
    <CCol sm="12">
      <h2>PDF Files</h2>
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
              :href="remote_url + '/upload_files/' + item.file_link"
              title="Download"
              download="download"
            >
              <img
                src="../../assets/icons/pdf_logo.png"
                alt="Download"
                style="width:60%"
              />
            </a>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import { remote_url } from "@/api/api.js";
import Axios from 'axios'

export default {
  name: "FileUploadVisitor",
  data() {
    return {
      items: [],
      remote_url: remote_url,
    };
  },
  computed: {},
  mounted() {
    this.$store.dispatch("files").then((data) => {
      this.items = data;
    });
  },
  methods: {
    downloadItem ( url, label ) {
      Axios.get(url, { responseType: 'blob' })
      .then(response => {
        const blob = new Blob([response.data], { type: 'application/pdf' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = label
        link.click()
        URL.revokeObjectURL(link.href)
      }).catch(console.error)
    // @click.prevent="downloadItem(remote_url +'/upload_files/' + item.file_link,item.file_link)"
  }
  }
};
</script>
