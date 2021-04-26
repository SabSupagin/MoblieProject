<template>
<div class="container">
    <center>
        <h1>สินค้า</h1>
    </center>
    <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product._id">
            <div class="card" style="width: 18rem;">
                <center>
                <img src="../images/01.png" style="width: 50%">
                </center>
            <div class="card-body">
                <center>
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">$ {{ product.price }}</p>
                </center>
            </div>
            <div class="card-footer">
                <center>
                <button class="btn btn-primary">Buy</button>
                <router-link to="/shopproduct" class="nav-item nav-link">detail</router-link>
                </center>
            </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return{
            products: []
        }
    },
    created(){
        let apiURL = 'http://localhost:4000/api/show-stock';
        axios.get(apiURL).then(res => {
            this.products = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
      
    }
}
</script>