const app = Vue.createApp({
    data(){
        return{
            NameShop: 'Moblie',
            Total:0,
            image: './images/2.jpg',
            cart: [],
            amount: 0,
            Tests:[
                {
                    id:1,
                    name: 'Sumsung',
                    price:100,
                    image: './images/03.png',
                    active: false,
                },
                {
                    id:2,
                    name: 'I Phone',
                    price:150,
                    image: './images/03.png',
                    active: false,
                },
                {
                    id:3,
                    name: 'Realme',
                    price:150,
                    image: './images/03.png',
                    active: false,
                } 
            ]
        }
    },

    methods: {
        logout(){
            location.href='login.html'
        },
        addtocart(Test) {
            this.amount += 1;
               if(this.name==this.name){
                this.cart.push({
                    id:Test.id,
                    name:Test.name,
                    price:Test.price,
                    image:Test.image,
                    qty:1,
                    active:Test.active,
                    total:Test.price
                })
               }
               else{
                   
               }
        }
        
    }
})

