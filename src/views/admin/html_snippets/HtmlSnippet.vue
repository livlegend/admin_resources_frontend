<template>
  <CRow>
    <CCol sm="12">
      <form action="" @submit="formSubmit">
        <CCard>
          <CCardHeader>
            <CRow class="mx-2">
              <strong
                >HTML Snippet
                <span v-if="item_to_update">- Update</span></strong
              >
              <router-link class="ml-auto" to="/admin/htmlsnippet/list">
                <strong> List of HTML snippets </strong></router-link
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
                  v-model="code.title"
                  required
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="12">
                <CTextarea
                  label="Description"
                  placeholder="Describe the code snippet"
                  name="description"
                  col="3"
                  v-model="code.description"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="12">
                <div style="height: 200px;">
                  <textarea
                    placeholder="Enter HTML Code"
                    id="editing"
                    ref="editing_area"
                    spellcheck="false"
                    v-model="code.html_code"
                    required
                    @input="
                      update();
                      sync_scroll();
                    "
                    @scroll="sync_scroll()"
                  ></textarea>
                  <pre id="highlighting" aria-hidden="true">
                    <code class="language-html" id="highlighting-content">

                    &lt;span title=&quot;typing&quot;&gt;Start typing!&lt;/span&gt;
                    </code>
                  </pre>
                </div>
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
                ><div
                  v-if="form_submitted"
                  class="spinner-border  mr-2"
                  role="status"
                >
                  <span class="sr-only">Loading...</span>
                </div>
                <CIcon v-else name="cil-check-circle" class="mr-2" />

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
import Prism from "prismjs";

export default {
  name: "HtmlSnippet",
  components: {},
  data() {
    return {
      code: {
        title: "",
        description: "",
        html_code: "",
      },
      form_submitted: false,
    };
  },
  props: ["item_to_update"],
  computed: {},
  mounted() {
    if (this.item_to_update) {
      
      let code_to_update = this.item_to_update
      this.code.title = code_to_update.title;
      this.code.description = code_to_update.description;
      this.code.html_code = code_to_update.html_code;
      this.update();
    }
  },
  methods: {
    // listening to the "tab" key

    // updating the user editing
    update() {
      let text = this.code.html_code;
      let result_element = document.querySelector("#highlighting-content");
      // Handle final newlines 
      if (text[text.length - 1] == "\n") {
        text += " ";
      }
      // Update code
      result_element.innerHTML = text
        .replace(new RegExp("&", "g"), "&amp;")
        .replace(new RegExp("<", "g"), "&lt;"); /* Global RegExp */
      // Syntax Highlight
      Prism.highlightElement(result_element);
    },

    sync_scroll() {
      let element = this.$refs.editing_area;
      /* Scroll result to scroll coords of event - sync with textarea */
      let result_element = document.querySelector("#highlighting");
      // Get and set x and y
      result_element.scrollTop = element.scrollTop;
      result_element.scrollLeft = element.scrollLeft;
    },

    formSubmit(e) {
      e.preventDefault();

      // send the form

      this.form_submitted = true;

      if (this.item_to_update) {
        //in case of update
        console.log('data',this.code)
        this.$store
          .dispatch("updateHtmlSnippets", { id: this.item_to_update.id, datas: this.code })
          .then(
            () => {
              this.form_submitted = false;
              this.successMsg("Update done !");
              this.$router.push("/admin/htmlsnippet/list");
            },
            () => {
              this.form_submitted = false;
              this.errorMsg("An error occured");
            }
          );
      } else {
        //in case of new recording
        this.$store.dispatch("postHtmlSnippets", this.code).then(
          () => {
            this.form_submitted = false;
            this.successMsg("Saving done !");
             this.$router.push("/admin/htmlsnippet/list");
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
