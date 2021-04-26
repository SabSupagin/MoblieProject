<template>
<div class="container-login100">
<div class="col-md-5">
    <div class="card">
         <div class="card-body">
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
               <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
               </svg>
              <a style="margin-left: 10%">จำนวนสินค้า</a>
              <a style="margin-left: 30%; font-size: 30px">{{products.length}}</a>
         </div>
    </div>
</div>
<br>
<div class="col-md-5">
    <div class="card">
         <div class="card-body">
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
               <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
               <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
               </svg>
              <a style="margin-left: 10%">จำนวนการใช้งาน</a>
              <a style="margin-left: 22%; font-size: 30px">{{historys.length}}</a>
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
            products: [],
            historys: []
        }
    },
    created(){
        let apiURL = 'http://localhost:4000/api/show-stock';
        axios.get(apiURL).then(res => {
            this.products = res.data
        }).catch(error => {
            console.log(error)
        })

        
        let apiURL2 = 'http://localhost:4000/api/show-history';
        axios.get(apiURL2).then(res => {
            this.historys = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
    }
}
</script>