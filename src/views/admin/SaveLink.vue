<template>
  <CRow>
    <CCol sm="12">
      <form action="">
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
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="12">
                <CInput
                  label="Link"
                  placeholder="Enter a link"
                  name="link"
                />
              </CCol>
            </CRow>
            <CRow>
                <CCol>
                    <CInputCheckbox
                      label="Open in a new tab"
                      name="new_tab"
                      inline
                      custom
                    />
                </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CRow>
              <CButton type="submit" color="primary" class="ml-auto"
                ><CIcon name="cil-check-circle" />Submit</CButton>
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
    return {};
  },
  computed: {},
};
</script>
