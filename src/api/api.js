import axios from 'axios'


export const remote_url='http://localhost:8000'

export default () => {
   
    let base_url=remote_url+'/api'

    return axios.create({
        baseURL: base_url,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;multipart/form-data',
            'Access-Control-Allow-Origin': base_url
        }
    })
}

