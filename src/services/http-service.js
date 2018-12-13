import axios from 'axios'


    axios.defaults.baseURL='http://localhost:8000/api/'
    axios.defaults.headers.common['Accept'] = 'application/json' //da nam vrati json format

export default new axios()    
  