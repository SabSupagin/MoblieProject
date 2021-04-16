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
                    qty:0
                },
                {
                    id:2,
                    name: 'I Phone',
                    price:150,
                    image: './images/03.png',
                    active: false,
                    qty:0
                },
                {
                    id:3,
                    name: 'Realme',
                    price:150,
                    image: './images/03.png',
                    active: false,
                    qty:0
                },
                {
                    id:3,
                    name: 'Realme',
                    price:150,
                    image: './images/03.png',
                    active: false,
                    qty:0
                },
                {
                    id:3,
                    name: 'Realme',
                    price:150,
                    image: './images/03.png',
                    active: false,
                    qty:0
                },
                
            ]
        }
    },

    methods: {
        logout(){
            location.href='login.html'
        },
        addtocart(Test) {

            this.amount += 1;
            this.Total += Test.price
               
                this.cart.push({
                    id:Test.id,
                    name:Test.name,
                    price:Test.price,
                    image:Test.image,
                    qty:Test.qty,
                    active:Test.active,
                })
        },
        remove(Test){
            if(confirm("คุณต้องการลบใช่ไหม!")){
                var index = this.cart.indexOf(Test)
                this.cart.splice(index, 1)
            }
        
        }
        
    }
})

