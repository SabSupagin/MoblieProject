<template>
    <div class="container">
        <center>
        <h1>สต็อกสินค้า</h1>
        </center>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">รูป</th>
                <th scope="col">ชื่อสินค้า</th>
                <th scope="col">ราคาสินค้า</th>
                <th scope="col">จำนวนสินค้า</th>
                <th scope="col">จัดการสินค้า</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product._id">
                <td>{{  product.name  }}</td>
                <td>{{  product.detail  }}</td>
                <td>{{  product.type  }}</td>
                <td>{{  product.price  }}</td>
                <td>
                <router-link to="/editproduct"><button style="margin-right: 10%" class="btn btn-warning">Edit</button></router-link>
                <button class="btn btn-danger" @click.prevent="deleteProduct(product._id)">Delete</button>
                </td>
                </tr>
            </tbody>
        </table>
        <center>
        <router-link to="/createorder"><button class="btn btn-secondary">Add order</button></router-link>
        </center>
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
        let apiURL = 'http://localhost:4000/api';
        axios.get(apiURL).then(res => {
            this.products = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        deleteProduct(id){
            let apiURL = `http://localhost:4000/api/delete-product/${id}`;
            let indexOfArrayItem = this.products.findIndex(i => i._id === id);

            if(window.confirm('ต้องการลบข้อมูลใช่ไหม')) {
                axios.delete(apiURL).then(() => {
                    this.products.splice(indexOfArrayItem, 1)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>