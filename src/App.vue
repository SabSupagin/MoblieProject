<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Moblie shop</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link active" to="/">Home </router-link>
      <router-link to="/shopproduct" class="nav-item nav-link disabled" v-if="username == ''">Shop</router-link>
      <router-link to="/shopproduct" class="nav-item nav-link " v-else>Shop</router-link>
      <router-link to="/stock" class="nav-item nav-link disabled" v-if="username == ''">Stock</router-link>
      <router-link to="/stock" class="nav-item nav-link " v-else>Stock</router-link>
      <router-link to="/history" class="nav-item nav-link disabled" v-if="username == ''">history</router-link>
      <router-link to="/history" class="nav-item nav-link " v-else>history</router-link>
      <router-link to="/login" class="nav-item nav-link active" style="margin-left:1070px" @click="login" v-if="username == ''">Login</router-link>
      <router-link to="/" class="nav-item nav-link active" style="margin-left:1070px" @click="logout" v-else>Logout</router-link>
    </div>
  </div>
</nav>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

export default {
    data(){
        return{
          username: ''
        }
    },
    methods: {
        login(){
          this.username = 'user'
          console.log(this.username)
        },
        logout(){
          this.username = ''
        }
    }
}
</script>
    
  