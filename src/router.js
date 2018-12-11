import Vue from 'vue'
import Router from 'vue-router'

import ContactList from './components/ContactList.vue'

Vue.use(Router);

const routes = [
    {path: '/', component: ContactList, name: 'contacts-list'}
]

const router = new Router({
    routes
});

export default router;