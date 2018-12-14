import http from './http-service'

class AuthService {
    login(email, password) {
        return http.post('/auth/login', {  //ruta
            email,
            password  //ovaj objekat email i password nam je body
        }).then(({ data }) => data);  //raspakovali response da nam u storu ne bi morali da ga raspakujemo
    }

    setAuthHeaders(token) {
        if(!token) {
           delete http.defaults.headers.common['Authorization'] //ako nema tokena izbrisi ga iz headera
           return
        }
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`  //setovali token na axios u samom headeru
    }
}

const checkForInitialToken = (authService) => { //kada relodujemo stranicu da nam salje token
    const token = localStorage.getItem('token')  //kada je metoda van klase moramo je asignovati u konsta
    if(token) {
        authService.setAuthHeaders(token)
    }
}

const authService = new AuthService()
checkForInitialToken(authService) //da nam svaki put kada se reloduje
export default authService