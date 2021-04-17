const app = Vue.createApp({
    data(){
        return{
            NameShop: 'Moblie',
            Total:0,
            cart: [],
            amount: 0,
            Tests:[
                {
                    id:1,
                    name: 'Sumsung',
                    price:100,
                    image: './images/2.png',
                    active: false,
                    qty:10,
                    color: ["Black","Gold","Blue"]
                },
                {
                    id:2,
                    name: 'I Phone',
                    price:150,
                    image: './images/1.png',
                    active: false,
                    qty:5,
                    color: ["Black","Gold","Blue"]
                },
                {
                    id:3,
                    name: 'Realme',
                    price:150,
                    image: './images/5.png',
                    active: false,
                    qty:9,
                    color: ["Black","Gold","Blue"]
                },
                {
                    id:3,
                    name: 'Xiaomi',
                    price:150,
                    image: './images/3.png',
                    active: false,
                    qty:20,
                    color: ["Black","Gold","Blue"]
                },
                {
                    id:3,
                    name: 'Huawei',
                    price:150,
                    image: './images/2.png',
                    active: false,
                    qty:0,
                    color: ["Black","Gold","Blue"]
                },
                
            ]
        }
    },

    methods: {
        gopay(){
            location.href='pay.html'
        },
        GoCart(){
            location.href='Cart.html'
        },
        goback(){
            location.href='index.html'
        },
        apcent(){
            if(confirm("ยืนยันการสั่งซื้อ!!")){
                location.href='index.html'
            }
        },
        addtocart(Test) {
            Test.qty -= 1
            this.amount += 1
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

        },
        
    }
})

