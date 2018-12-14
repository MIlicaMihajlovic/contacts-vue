<template>
  <div id="app">
      <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <router-link class="navbar-brand" :to="{name: 'home'}">  
         Contacts
        </router-link>
         <!-- <router-link class="navbar-brand" :to="{name: 'login'}">  
         Sign in
        </router-link> nije nam potreban jer nas odmah baca na login stranicu-->
        <a class="nav-link" @click="onLogoutClick" v-if="user">  
         Logout
        </a>
        
      </nav>
    </header>
    <main class="container">
      <router-view />
    </main>
    <footer class="footer">
      <div class="container">
        Contacts 2018.
      </div>
    </footer>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',

  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },

  methods: {
    ...mapActions([ 'logout' ]),
    onLogoutClick() {
      this.logout()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
}

main {
  margin-top: 100px;
}

.nav-link {
  color: #fff !important;
}
</style>
