import axios from 'axios'

class ContactsService {
    constructor() {
        axios.defaults.baseURL='http://localhost:8000/api/'
        axios.defaults.headers.common['Accept'] = 'application/json' //da nam vrati json format
    }
//page nam je parametar a 1 nam je difoltna vrednost
    getContacts(page = 1) {
        return axios.get('contacts', {params: { page }})
            .then(({ data }) => data) //raspakovali response i uzeli podatke kao i response.data {je destruktor} 
    }
}

const contactsService = new ContactsService()

export default contactsService