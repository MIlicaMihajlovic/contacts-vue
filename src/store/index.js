import Vue from 'vue'
import Vuex from 'vuex'

import contactStore from './contacts-store.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        contactStore
    }
})

export default store;