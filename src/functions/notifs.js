export const successMsg ={
    doSuccessMsg(msg) {
        this.$toasted.show(msg, {
            action: [{
                text: 'X',
                onClick: (e, toastObject) => {
                    toastObject.goAway(0);
                }
            }],
            position: 'top-center',
            duration: 5000,
            theme: 'toasted-primary',
            type: 'success'
        })
    },
}   
export const errorMsg ={ 
    doErrorMsg: function(msg) {
        this.$toasted.show(msg, {
            action: [{
                text: 'X',
                onClick: (e, toastObject) => {
                    toastObject.goAway(0);
                }
            }],
            position: 'top-center',
            duration: 5000,
            theme: 'toasted-primary',
            type: 'error'
        })
    },

}