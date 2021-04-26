<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Moblie shop</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></router-link>
      <router-link to="/Login" class="nav-item nav-link">Shop</router-link>
      <router-link to="/stock" class="nav-item nav-link">Stock</router-link>
      <router-link to="/history" class="nav-item nav-link">history</router-link>
    </div>
  </div>
</nav>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
  </template>
    
  