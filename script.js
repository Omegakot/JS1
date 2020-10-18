
// //1. задание
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

// Number(123)

// //2 задание
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
    }
}
// Дмитрий, возник вопрос: к примеру я из class Fruit хочу наследовать только своейство name и далее в конструктор class Vegetables добавлять новые не наследованные параметры, 
//получается все наследованные свойства  будут в консоль выводится как undefined, то есть по умолчанию они не исчезают и как бы не определены и это нормально?
//

let item1 = new Fruit("Яблоко",100,13)
let item2 = new Vegetables("Капуста",12,100,1222)

console.log(item2)
console.log(this.qwerr)

let Basket=[item1,item2]
console.log(`Ваша корзина состоит из ${item1.name},${item2.name} на общую сумму ${item1.price*item1.qual+item2.price*item2.qual} рублей`)

//3 задание
// продукты разделить условно  на классы
//(овощи, фрукты, напитки ) и описать их свойствами( имя, цена, количество). 
//Далее сделать главный конструктор и от него наследовать свойства и методы + на каждый класс добавлять что то свое. 
//Возможно  я ошибаюсь, но вижу это так.


