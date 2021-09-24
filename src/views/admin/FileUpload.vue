<template>
  <CRow>
    <CCol sm="12">
      <form
        action=""
        enctype="multipart/form-data"
        @submit="formSubmit"
        ref="form"
      >
        <CCard>
          <CCardHeader>
            <strong>Upload file</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12">
                <CInput label="Title" placeholder="Enter a title" v-model="title" required />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="12">
                <CInputFile
                  label="File custom input"
                  placeholder="Choose a PDF file..."
                  accept=".pdf"
                  @change="onFileChange"
                  required
                />
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CRow>
              <CButton type="submit" color="primary" class="ml-auto" :disabled="form_submitted">
                <div v-if="form_submitted" class="spinner-border  mr-2" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <CIcon v-else name="cil-check-circle"/>
                 Submit
              </CButton>
            </CRow>
          </CCardFooter>
        </CCard>
      </form>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "FileUpload",
  data() {
    return {
      file: "",
      title: "",
      form_submitted:false,
    };
  },
  computed: {},
  methods: {
    onFileChange(e) {
      this.file = e[0];
    },
    formSubmit(e) {
      e.preventDefault();
      
      // send the form

      this.form_submitted=true;
      
      let formData = new FormData();
      formData.append('title',this.title)
      formData.append('file',this.file)

      this.$store.dispatch('postFile',formData).then(
        ()=>{
          
        }
      )
     

      // formData.append('file', this.file);
    },
  },
};
</script>
