// //1 задание
// let arr=[];
// let p=1
// while (p<= 100) {
//     if (p== 1) {
//         arr.push(1)
//     } else {
//         let q = 2;
//         let i = 2;
//         while (p % i !== 0 ){
//             i++;
//             q++;
//             } 
//         if (q == p) {
//             arr.push(q);
//         }
//     }
//     p++
// }
// console.log(arr)

// //2. задание
// //предположим известно наименование товаров и их стоиомость 

// let goods=['яблоко','груша','апельсин','банан']
// let price=[12,22,,22]

// // 1 вариант
// // function countBasketPrice(){
// //     for(i=0;i<price.length;i++){
// //         summa=summa+price[i]
// //     }
// //     return summa
// // }
// // console.log(`ваша корзина состоит из следующих товаров: ${goods} на общую сумму ${countBasketPrice()} рублей`)

// //2 вариант

// console.log("ваша корзина состоит из следующих товаров:")
//  goods.forEach(el=>console.log(el))
//  console.log("на общую сумму:")
//  let q=price.reduce((sum,index)=>sum+index)
//  console.log(`${q}р`)
 
// //4 задание

// for(i=0;i<=9;console.log(i++)){}

// // 5 задание

// i=1
// let arr5=[]
// while(i<=20){
// arr5.push('*')
// console.log(arr5.join(''))
// i++
// }

// function Number(N){
//     let d=N%100
//         let q={
//             сотни:0,
//             десятки:0,
//             еденицы:0,
//             summa(){ 
//                 let s=Math.floor(N/100)
//                 this.сотни=s
//                 this.десятки=Math.floor(d/10)
//                 this.еденицы=d-this.десятки*10
//             }}
//             if (N>=0 && N<=999){
//                 q.summa()
//                 console.log(q)
//             }else if (N>=1000){
//                 N=N%1000
//                 this.сотни=
//                 q.summa()
//                 console.log(q)
//             }
//             else{
//                 delete q.сотни
//                 delete q.десятки
//                 delete q.еденицы
//                 console.log(q)
//             }
//     }    

// Number(156034563456)

// class Fruit{
//     price=12
// }
// class Vegetables{
//     price=14
// }



// let Fruits=["Яблоко","Банан","Груша"]
// let qual=[2,3,4]
// let price=[98,56,100]


// let Basket={
//  goods:{
//  [Fruits[0]]:price[0],
//  [Fruits[1]]:price[1],
//  [Fruits[2]]:price[2]
//  },
//  summa(){
//      this.summa=(this.goods[Fruits[0]]*qual[0]+this.goods[Fruits[1]]*qual[1]+this.goods[Fruits[2]]*qual[2])
//  }
// }
// Basket.summa()
// console.log(`стоимость вашй корзины состоящей из: ${Fruits[0]}-(${qual[0]})шт., ${Fruits[1]}-(${qual[1]})шт., ${Fruits[2]}-(${qual[2]})шт. составит: ${Basket.summa} рублей`)


class Fruit{
    name=''
    price=0
    qual=0
    constructor(name,price,qual){
        this.name=name
        this.price=price
        this.qual=qual
    }
}
class Vegetables extends Fruit{
    constructor(name,price,qual){
        super(name,price,qual)
            this.name=name
            this.price=price
            this.qual=qual
    }
}
let item1 = new Fruit("Яблоко",12,13)
let item2 = new Vegetables("Капуста",10,10)

let Basket=[item1,item2]
console.log(`Ваша корзина состоит из ${item1.name},${item2.name} на общую сумму ${item1.price*item1.qual+item2.price*item2.qual} рублей`)


