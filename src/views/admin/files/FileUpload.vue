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
            <CRow class="mx-2">
              <strong
                >Upload file <span v-if="index_to_update">- Update</span></strong
              >
              <router-link class="ml-auto" to="/admin/file-list">
                <strong> Files list</strong></router-link
              >
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12">
                <CInput
                  label="Title"
                  placeholder="Enter a title"
                  v-model="title"
                  required
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="12">
                <CInputFile
                  label="File custom input"
                  placeholder="Choose a PDF file..."
                  accept=".pdf"
                  @change="onFileChange"
                  :required="index_to_update==null"
                />
                <small v-if="index_to_update"
                  >The new selected file will replace the old</small
                >
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CRow>
              <CButton
                type="submit"
                color="primary"
                class="ml-auto"
                :disabled="form_submitted"
              >
                <div
                  v-if="form_submitted"
                  class="spinner-border  mr-2"
                  role="status"
                >
                  <span class="sr-only">Loading...</span>
                </div>
                <CIcon v-else name="cil-check-circle" class="mr-2" />

                <span v-if="index_to_update">Update</span>
                <span v-else>Submit</span>
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
      form_submitted: false,
    };
  },
  props: ["index_to_update"],
  computed: {},
  mounted() {
    if (this.index_to_update) {
      this.title = this.$store.getters["files"][this.index_to_update].title;
    }
  },
  methods: {
    onFileChange(e) {
      this.file = e[0];
    },
    formSubmit(e) {
      e.preventDefault();

      // send the form

      this.form_submitted = true;

      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("file", this.file);

      if (this.index_to_update) {
        //in case of update
        let id = this.$store.getters["files"][this.index_to_update].id;
        this.$store.dispatch("updateFile", { id: id, formData: formData }).then(
          () => {
            this.form_submitted = false;
            this.successMsg("Update done !");
            this.$router.push("/admin/file-list");
          },
          () => {
            this.form_submitted = false;
            this.errorMsg("An error occured");
          }
        );
      } else {
        //in case of new recording
        this.$store.dispatch("postFile", formData).then(
          () => {
            this.form_submitted = false;
            this.successMsg("Saving done !");
            this.$router.push("/admin/file-list");
          },
          () => {
            this.form_submitted = false;
            this.errorMsg("An error occured");
          }
        );
      }
    },

    successMsg(msg) {
      this.$toasted.show(msg, {
        action: [
          {
            text: "X",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            },
          },
        ],
        position: "top-center",
        duration: 5000,
        theme: "toasted-primary",
        type: "success",
      });
    },
    errorMsg: function(msg) {
      this.$toasted.show(msg, {
        action: [
          {
            text: "X",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            },
          },
        ],
        position: "top-center",
        duration: 5000,
        theme: "toasted-primary",
        type: "error",
      });
    },
  },
};
</script>
