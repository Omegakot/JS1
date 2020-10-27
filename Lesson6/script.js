//Алгоритм корзины
class Cart {
cart = []
click=true
constructor (...items) {
this.cart.push(...items)
}
addItem (item) {
this.cart.push(item)
}
calcTotalPrice () {
return this.cart.reduce((result, curItem) => {
return result + curItem.price}, 0)
}
getname(name){
for(let i=0;i<this.cart.length; i++)
{return this.cart[i].name}
}
}

class Product {
name = ''
price = 0
volume=0
constructor (name, price){
this.name = name
this.price = price
this.volume=0

}
}
//Подсчет стоимости
const CartInstance = new Cart(new Product('Груша',99,0), new Product('Яблоко',100,0))
console.log(CartInstance)

// рендеринг
let body=document.querySelector("body")
let h3= document.querySelectorAll("h3")
let btn1=document.querySelector('#btn1')
let btn2=document.querySelector('#btn2')

let div=document.querySelector("#iter")
let span=div.querySelector("#ite1")
let h2=document.querySelector("#goodsh2")
let span1=document.querySelector('#goodsh3')

let summa=0


btn1.addEventListener("click",function(event){
event.preventDefault()
summa+=CartInstance.cart[0].price
span.innerText=`${summa} рублей`
span.style.color="blue"
div.style.backgroundColor="gray"
div.style.color="white"
h2.style.color="green"
let items=document.createElement("h3")
span1.innerText=`${CartInstance.cart[0].name} в количестве ${len} шт`
})



btn2.addEventListener("click",function(event){
event.preventDefault()
array.push(CartInstance.cart[1].name)
span.innerText=`${summa} рублей`
span.style.color="blue"
div.style.backgroundColor="gray"
div.style.color="white"
let items= document.createElement("h3")
items.innerText=`${CartInstance.cart[1].name}`
span1.innerText=`${CartInstance.cart[1].name} в количестве ${len} шт`
})






//  смена фона

function changes(){
if(!CartInstance.click){
    body.style.backgroundColor="whitesmoke"
    CartInstance.click=true
}else{
    body.style.backgroundColor="black"
    CartInstance.click=false
}}
let button=document.querySelector("button")
button.addEventListener("click",function(){
let r=document.createElement("span")
r.innerText="Смени цвет фона"})

button.addEventListener("click",changes)