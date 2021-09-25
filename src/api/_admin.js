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
     * Send PDF file Form
     */
    _postFile (data) {
        const promise = Api().post('/files',data)
        return promise.then((response) => response.data)
    },

    /**
     * Send PDF file Form
     */
     _updateFile (id,data) {
        const promise = Api().post('/files/'+id, data)
        return promise.then((response) => response.data)
    },


     /**
     * delete PDF file 
     */
      _deleteFile (id) {
        const promise = Api().delete('/files/'+id)
        return promise.then((response) => response.data)
    },

}