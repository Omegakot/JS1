//1 задание
let arr=[];
let p=1
while (p<= 100) {
    if (p== 1) {
        arr.push(1)
    } else {
        let q = 2;
        let i = 2;
        while (p % i !== 0 ){
            i++;
            q++;
            } 
        if (q == p) {
            arr.push(q);
        }
    }
    p++
}
console.log(arr)

//2. задание
//предположим известно наименование товаров и их стоиомость 

let goods=['яблоко','груша','апельсин','банан']
let price=[12,22,,22]

// 1 вариант
// function countBasketPrice(){
//     for(i=0;i<price.length;i++){
//         summa=summa+price[i]
//     }
//     return summa
// }
// console.log(`ваша корзина состоит из следующих товаров: ${goods} на общую сумму ${countBasketPrice()} рублей`)

//2 вариант

console.log("ваша корзина состоит из следующих товаров:")
 goods.forEach(el=>console.log(el))
 console.log("на общую сумму:")
 let q=price.reduce((sum,index)=>sum+index)
 console.log(`${q}р`)
 
//4 задание

for(i=0;i<=9;console.log(i++)){}

// 5 задание

i=1
let arr5=[]
while(i<=20){
arr5.push('*')
console.log(arr5.join(''))
i++
}

