// //1 задание

// let table = document.createElement("table")
// function chess(){
// for (i = 1; i < 9; i++){
// const tr = document.createElement('tr')
// for (j = 1; j < 9; j++){
// const td = document.createElement('td')
// if (i%2 == j%2) {
// td.classList = "white"
// td.innerText="белый"
// } 
// else{
// td.classList = "black"
// td.innerText="черный"
// }
// tr.appendChild(td);
// }
// table.appendChild(tr);
// }
// document.body.appendChild(table)}
// chess()

//2 задание

let B={
name:"Яблоко",
price:300
}
console.log(B)

const Basket = [[B]]

const header = document.querySelector('header')
const div = document.createElement('div')
Basket.forEach(item => {

div.innerText = `Ваша корзина состоит из товаров ${B.name},на сумму ${B.price}р`

header.appendChild(div)
})

