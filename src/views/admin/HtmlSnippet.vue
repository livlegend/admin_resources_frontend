<template>
  <CRow>
    <CCol sm="12">
      <form action="">
        <CCard>
          <CCardHeader>
            <strong>HTML Snippet</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12">
                <CInput
                  label="Title"
                  placeholder="Enter a title"
                  name="title"
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
                    v-model="html_content"
                    @input="
                      update();
                      sync_scroll();"
                    @scroll="sync_scroll()"
                    @keydown.tab="check_tab(this, event);"
                   
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
              <CButton type="submit" color="primary" class="ml-auto"
                ><CIcon name="cil-check-circle" /> Save</CButton
              >
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
      ko: "",
      html_content:""
    };
  },
  computed: {},
  methods: {
    // listening to the "tab" key

    // updating the user editing

    update() {
      let text=this.html_content
      let result_element = document.querySelector("#highlighting-content");
      // Handle final newlines (see article)
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
      let element = this.$refs.editing_area
      /* Scroll result to scroll coords of event - sync with textarea */
      let result_element = document.querySelector("#highlighting");
      // Get and set x and y
      result_element.scrollTop = element.scrollTop;
      result_element.scrollLeft = element.scrollLeft;
    },

  },
};
</script>
