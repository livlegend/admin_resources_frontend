<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard  class="text-center py-5" body-wrapper>
				<CCardBody>	
					<router-link to="/admin" class="btn btn-primary btn-lg px-4">Enter as Admin</router-link>               
				</CCardBody>
            </CCard>
			<CCard
				color="primary"
				text-color="white"
				class="text-center py-5"
				body-wrapper>
				<CCardBody>
					<router-link
						to="/visitor"
						class="btn btn-light btn-outline btn-lg px-4">
						Enter as Visitor!
					</router-link>
				</CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
