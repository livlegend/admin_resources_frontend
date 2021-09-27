import Api from '@/api/api.js'

export default {

    /**
     * GET PDF files
     */
     _files () {
        const promise = Api().get('/files')
        return promise.then((response) => response.data)
    },
    
    /**
     * GET HTML Snippets
     */
    _htmlSnippets () {
        const promise = Api().get('/html_snippets')
        return promise.then((response) => response.data)
    },

    /**
     * GET Links
     */
     _links () {
        const promise = Api().get('/links')
        return promise.then((response) => response.data)
    },

    /**
     * Send PDF file Form
     */
    _postFile (data) {
        const promise = Api().post('/files',data)
        return promise.then((response) => response.data)
    },

    /**
     * Send HTML SNIPPETS
     */
     _postHtmlSnippets (data) {
        const promise = Api().post('/html_snippets',data)
        return promise.then((response) => response.data)
    },
    /**
     * Send Links 
     */
     _postLinks (data) {
        const promise = Api().post('/links',data)
        return promise.then((response) => response.data)
    },

    /**
     * Update PDF file Form
     */
     _updateFile (id,data) {
        const promise = Api().post('/files/'+id, data)
        return promise.then((response) => response.data)
    },
    /**
     * Update HTML Snippets
     */
     _updateHtmlSnippets (id,data) {
        const promise = Api().put('/html_snippets/'+id, data)
        return promise.then((response) => response.data)
    },
    /**
     * Update Links Form
     */
     _updateLink (id,data) {
        const promise = Api().put('/links/'+id, data)
        return promise.then((response) => response.data)
    },


     /**
     * delete PDF file 
     */
      _deleteFile (id) {
        const promise = Api().delete('/files/'+id)
        return promise.then((response) => response.data)
    },

    /**
     * delete HTML Snippets 
     */
    _deleteHtmlSnippet(id) {
        const promise = Api().delete('/html_snippets/'+id)
        return promise.then((response) => response.data)
    },

    /**
     * delete Links
     */
     _deleteLink(id) {
        const promise = Api().delete('/links/'+id)
        return promise.then((response) => response.data)
    },
    /**
     * download file
     */
    _downloadFile(url) {
        const promise = Api().get(url)
        return promise.then((response) => response.data)
    },

}