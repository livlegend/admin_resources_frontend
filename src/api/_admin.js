import Api from '@/api/api.js'

export default {
    /**
     * Send PDF file Form
     */
    _postFile (data) {
        const promise = Api().post('/files',data)
        return promise.then((response) => response.data)
    },

}