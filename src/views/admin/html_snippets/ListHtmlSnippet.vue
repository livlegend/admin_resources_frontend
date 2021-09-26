<template>
  <CRow>
    <CCol sm="12">
      <CCard>
        <CCardHeader>
          <CRow class="mx-2">
            <strong>HTML Snippets list </strong>

            <router-link class="ml-auto" to="/admin/html-snippet">
              <strong> Back to creating new </strong>
            </router-link>
          </CRow>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="12">
              <CDataTable
                :items="items"
                :fields="fields"
                table-filter
                items-per-page-select
                :items-per-page="5"
                hover
                sorter
                pagination
              >
                <!-- <template #title="{item}">
                  <a :href="remote_url + '/upload_files/' + item.file_link" target="_blank" > <strong>{{
                    item.title
                  }}</strong></a>
                </template> -->

                <template #html_code="{item}">
                    <td class="py-2">
                        <CButton
                      color="secondary"
                      class="btn"
                      variant="outline"
                      square
                      size="sm"
                      @click="displayCode(item.html_code)"
                    >Read...</CButton>
                    </td>
                    
                </template>

                <template #actions="{item, index}">
                  <td class="py-2">
                    <CButton
                      color="primary"
                      class="btn"
                      variant="outline"
                      square
                      size="sm"
                      @click="passToUpdate(item)"
                    >
                      Edit
                    </CButton>
                    <CButton
                      color="danger"
                      variant="outline"
                      square
                      size="sm"
                      @click="selectItem(item, index)"
                    >
                      Delete
                    </CButton>
                  </td>
                </template>
              </CDataTable>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
    <!-- modal for deleting confirmation -->
    <CModal
      title="Confirm suppression"
      color="danger"
      :show.sync="danger_modal"
    >
      Do you really want to delete this item ?
      <template #footer>
        <CButton @click="danger_modal = false" color="secondary"
          >Cancel</CButton
        >
        <CButton @click="deleteItem" color="danger">Accept</CButton>
      </template>
    </CModal>

    <!-- modal for code displaying -->
    <CModal
      :show.sync="primary_modal"
      color="primary"
      title="HTML code"
    >
    <div>
        <pre aria-hidden="true">
            <code>
                {{code_to_display}}
            </code>
         </pre>
    </div>
        
         <template #footer>
        <CButton @click="primary_modal = false" color="secondary"
          >Close</CButton
        >
      </template>
    </CModal>
  </CRow>
</template>

<script>
import { CDataTable } from "@coreui/vue/src";

export default {
  name: "ListHtmlSnippets",
  components: { CDataTable },
  data() {
    return {
      items: [],
      danger_modal: false,
      primary_modal:false,
      selected_item: {
        index: null,
        item: {},
      },
      code_to_display:"",
      fields: [
        "title",
        "description",
        "html_code",
        {
          key: "actions",
          label: "",
          sorter: false,
          filter: false,
        },
      ],
      form_submitted: false,
    };
  },
  computed: {},
  mounted() {
    this.getSnippets();
  },
  methods: {
    getSnippets() {
      this.$store.dispatch("htmlSnippets").then((data) => {
        this.items = data;
      });
    },
    selectItem(item, index) {
      this.danger_modal = true;
      this.selected_item.index = index;
      this.selected_item.item = item;
    },

    deleteItem() {
      this.danger_modal = false;
      this.$store
        .dispatch("deleteHtmlSnippet", this.selected_item.item.id)
        .then(
          () => {
            this.successMsg("Deleted !");
        
            this.items.splice(this.selected_item.index, 1);
          },
          () => {
            this.errorMsg("An error occured");
          }
        );
    },
    displayCode(data){
        this.code_to_display=data
        
        this.primary_modal=true;
    },

    passToUpdate(item) {
      this.$router.push({
        name: "HTML Snippet",
        params: { item_to_update: item },
      });
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
