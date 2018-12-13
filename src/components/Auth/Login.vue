<template>
    <form 
        class="form-signin"
        @submit.prevent="login"    
    >
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

      <label for="inputEmail" class="sr-only">Email address</label>
      <input 
      type="text" 
      id="inputEmail" 
      class="form-control" 
      placeholder="Email address" 
      required="" 
      autofocus=""
      v-model="email">

      <label for="inputPassword" class="sr-only">Password</label>
      <input 
      type="password" id="inputPassword" class="form-control" placeholder="Password" required=""
      v-model="password">

      <button 
      class="btn btn-lg btn-primary btn-block" 
      type="submit">
      Sign in
      </button>
    </form>
</template>

<script>
export default {
    name: 'Login',

    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        login() {
            // console.log({ email: this.email, password: this.password })
        }
    }
}
</script>
