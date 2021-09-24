<template>
  <CRow>
    <CCol sm="12">
      <form @submit="formSubmit" action="">
        <CCard>
          <CCardHeader>
            <strong>Save link</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12">
                <CInput
                  label="Title"
                  placeholder="Enter a title"
                  name="title"
                  v-model="data_link.title"
                  required
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="12">
                <CInput
                  label="Link"
                  placeholder="Enter a link"
                  name="link"
                  v-model="data_link.link"
                  required
                />
                <span class="text-danger" v-if="invalid_url">Enter a valid link format: (Example www.thelink.com)</span>
              </CCol>
            </CRow>
            <CRow class="mt-">  
                <CCol>
                    <CInputCheckbox
                      label="Open in a new tab"
                      name="new_tab"
                      inline
                      custom  
                      v-model="data_link.in_new_tab"
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
                <CIcon v-else name="cil-check-circle" />
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
  name: "SaveLink",
  components: {},
  data() {
    return {
      data_link:{
        title: "",
        link: "",
        in_new_tab: false
      },
      invalid_url:false,
      form_submitted:false,
    };
  },
  computed: {},
  methods: {
     isValidURL(string) {
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    },
    formSubmit(e){
      e.preventDefault();

        // check validation of the url
        if(this.isValidURL(this.data_link.link)){
            // SEND THE FORM
            this.form_submitted=true;
            this.invalid_url=false
        }else{
          // invalid url
          this.invalid_url=true
        }

      
    }
  }
};
</script>
