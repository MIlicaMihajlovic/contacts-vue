import http from './http-service'

class AuthService {
    login(email, password) {
        return http.post('/auth/login', {  //ruta
            email,
            password  //ovaj objekat email i password nam je body
        })
    }
}

const authService = new AuthService()
export default authService