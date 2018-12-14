import Vue from 'vue'
import Vuex from 'vuex'

import contactStore from './contacts-store.js'
import authStore from './auth-store.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        contactStore,
        authStore
    }
})

export default store;