<template>
  <CRow>
    <CCol sm="12">
      <form action="" enctype="multipart/form-data">
        <CCard>
          <CCardHeader>
            <strong>Upload file</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12">
                <CInput label="Title" placeholder="Enter a title" />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="12">
                <CInputFile
                  label="File custom input"
                  placeholder="Choose a PDF file..."
                  accept=".pdf"
                />
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CRow>
              <CButton type="submit" color="primary" class="ml-auto"
                ><CIcon name="cil-check-circle" /> Submit</CButton
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
  name: "FileUpload",
  data() {
    return {};
  },
  computed: {},
};
</script>