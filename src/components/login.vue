<template>
    
        <h3>Login</h3>

        <div class="form-group">
           <label>Name</label>
            <input type="text" class="form-control" v-model="name" >
        </div>
        <div class="form-group">
            <label>ID</label>
             <input type="text" class="form-control" v-model="id">
         </div>

        <button class="btn btn-success btn-block">Login</button>

   
    <router-link to="/">Back</router-link>
</template>

   


