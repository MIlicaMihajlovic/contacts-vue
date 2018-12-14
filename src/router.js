import Vue from 'vue'
import Router from 'vue-router'

import ContactList from './components/ContactList.vue'
import Login from './components/Auth/Login.vue'

Vue.use(Router);

const routes = [
    {path: '/', component: ContactList, name: 'home'},
    {path: '/login', component: Login, name: 'login',
        meta: {
            guest: true
        }   
    },
    {path: '*', name: 'not-found', component: ContactList}  //ako se promasi ruta i korisnik ode na neki nepostojeci endpoint
]

const router = new Router({  //ovde globalni navigacioni gardovi
    routes,
    mode: 'history'
});

router.beforeEach((to,from,next) => {
    const isAuthenticated = !!localStorage.getItem('token')
    if(isAuthenticated && to.meta.guest) {  //jer ako meta nije definisan onda ce racunati da je false a ovako je lakse da ne bismo  sto puta pisali za svaku rutu
        return next({name: 'home'})  //ako aute vrati ga na ovu rutu
    }
    if(!isAuthenticated && !to.meta.guest) {
        return next({name: 'login'})  //ako nije aute vrati ga na ovu rutu
    }
    return next()
})

export default router;