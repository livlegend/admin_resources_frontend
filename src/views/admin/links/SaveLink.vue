<template>
  <CRow>
    <CCol sm="12">
      <form @submit="formSubmit" action="">
        <CCard>
          <CCardHeader>
            <CRow class="mx-2">
              <strong
                >Links
                <span v-if="item_to_update">- Update</span></strong
              >
              <router-link class="ml-auto" to="/admin/links/list">
                <strong> List of Links </strong></router-link
              >
            </CRow>
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
                  <label>Open in a new tab</label>
                    <input
                    
                      class="lg ml-2"
                      type="checkbox"
                      v-model="data_link.open_new_tab"
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
                <CIcon class="mr-2" v-else name="cil-check-circle" />
                <span v-if="item_to_update">Update</span>
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
  name: "SaveLink",
  components: {},
  data() {
    return {
      data_link:{
        title: "",
        link: "",
        open_new_tab: false
      },
      invalid_url:false,
      form_submitted:false,
    };
  },
  props: ["item_to_update"],
  computed: {},
   mounted() {
    if (this.item_to_update) {
      
      let code_to_update = this.item_to_update
      this.data_link.title = code_to_update.title;
      this.data_link.link = code_to_update.link;
      this.data_link.open_new_tab = code_to_update.open_new_tab;
     
    }
  },
  methods: {
     isValidURL(string) {
       /* eslint-disable no-useless-escape */
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    },
    formSubmit(e){
      e.preventDefault();
        console.log('t',this.data_link)
        // check validation of the url
        if(this.isValidURL(this.data_link.link)){
            // SEND THE FORM
            this.form_submitted=true;
            this.invalid_url=false

            // send the form

     
      if (this.item_to_update) {
        //in case of update
        console.log('data',this.code)
        this.$store
          .dispatch("updateLinks", { id: this.item_to_update.id, datas: this.data_link })
          .then(
            () => {
              this.form_submitted = false;
              this.successMsg("Update done !");
              this.$router.push("/admin/links/list");
            },
            () => {
              this.form_submitted = false;
              this.errorMsg("An error occured");
            }
          );
      } else {
        //in case of new recording
        this.$store.dispatch("postLinks", this.data_link).then(
          () => {
            this.form_submitted = false;
            this.successMsg("Saving done !");
             this.$router.push("/admin/links/list");
          },
          () => {
            this.form_submitted = false;
            this.errorMsg("An error occured");
          }
        );
      }
        }else{
          // invalid url
          this.invalid_url=true
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
  }
};
</script>
