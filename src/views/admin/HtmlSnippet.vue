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
                  
                <pre contentEditable="true">
                    <code class="language-markup">
                        &lt;div class="hola">
                            &lt;p>Example&lt;/p>
                            &lt;p>Example&lt;/p>
                            &lt;p>Example&lt;/p>
                        &lt;/div>
                    </code>
                </pre>
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
export default {
  name: "HtmlSnippet",
  components: {},
  data() {
    return {};
  },
  computed: {},
};
</script>
