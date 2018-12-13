//import axios from 'axios'

import http from './http-service'

class ContactsService {
//page nam je parametar a 1 nam je difoltna vrednost
    getContacts(page = 1) {
        return http.get('contacts', {params: { page }})  //ovde get iz http umesto axios
            .then(({ data }) => data) //raspakovali response i uzeli podatke kao i response.data {je destruktor} 
    }
}

const contactsService = new ContactsService()

export default contactsService