import Vue from 'vue'
import Router from 'vue-router'

import ContactList from './components/ContactList.vue'
import Login from './components/Auth/Login.vue'

Vue.use(Router);

const routes = [
    {path: '/', component: ContactList, name: 'contacts-list'},
    {path: '/login', component: Login}
]

const router = new Router({
    routes,
    mode: 'history'
});

export default router;