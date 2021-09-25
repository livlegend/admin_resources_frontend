<template>
  <CRow>
    <CCol sm="12">
      <CCard>
        <CCardHeader>
          <strong>Files list</strong>
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
                <template #title="{item}">
                  <a :href="remote_url + '/upload_files/' + item.file_link" target="_blank" > <strong>{{
                    item.title
                  }}</strong></a>
                </template>

                <template #actions="{item, index}">
                  <td class="py-2">
                    <CButton
                      color="primary"
                      class="btn"
                      variant="outline"
                      square
                      size="sm"
                      @click='passToUpdate(index)'
                      
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
  </CRow>
</template>

<script>
import { CDataTable } from "@coreui/vue/src";
import { remote_url } from "@/api/api.js";

export default {
  name: "FileUpload",
  components: { CDataTable },
  data() {
    return {
      items: [],
      remote_url: remote_url,
      danger_modal: false,
      selected_item: {
        index: null,
        item: {},
      },
      fields: [
        "title",
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
    this.$store.dispatch("files").then((data) => {
      this.items = data;
    });
  },
  methods: {
    onFileChange(e) {
      this.file = e[0];
    },

    selectItem(item, index) {
      this.danger_modal = true;
      this.selected_item.index = index;
      this.selected_item.item = item;
      console.log(this.selected_item);
    },

    deleteItem() {
      this.danger_modal = false;
      this.$store.dispatch("deleteFile", this.selected_item.item.id).then(
        () => {
          this.successMsg("Deleted !");
          this.items.splice(this.selected_item.index, 1);
        },
        () => {
          this.errorMsg("An error occured");
        }
      );
    },

    passToUpdate(index){
      this.$router.push({ name: 'File Update', params: { index_to_update: index}})
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
