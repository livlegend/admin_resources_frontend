<template>
  <CRow>
    <CCol>
      <h2>HTML Snippets</h2>
    </CCol>
    <CCol sm="12" v-for="item in items" :key="item.id">
      <CCard>
        <CCardHeader>
          <CRow class="mx-2">
           <strong>{{ item.title }}</strong> 
          </CRow>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm="12">
              <p>{{ item.description }}</p>
            </CCol>
            <hr size="1" width="70%">  
          </CRow>
          <CRow>
            <CCol sm="12">
              <pre aria-hidden="true">
                    <code class="language-html" ref="html">
                    {{item.html_code}}
                    </code>
                </pre>
            </CCol>
          </CRow>
          <CRow>
            <CButton color="primary" class="ml-auto" @click="copyToClipboard(item.html_code)">
              Copy to clipboard
            </CButton>
            
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "HtmlSnippetsVisitor",

  data() {
    return {
      items: [],
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

    copyToClipboard (code) {
  
        let textarea = document.createElement("textarea");
        textarea.textContent = code;
        textarea.style.position = "fixed"; 
        document.body.appendChild(textarea);
        textarea.select();

     
        textarea.select();
        try {
        document.execCommand('copy');
        this.successMsg('HTML code copied to the clipboard!')
        } catch (err) {
        console.log('er',err)
        this.errorMsg('Oops, unable to copy')
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
        type: "secondary",
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
