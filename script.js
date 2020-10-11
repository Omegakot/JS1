// 1. задание
var a = 1,
    b = 1,
    c, d;
c = ++a;alert(c); // 2   1+(a=a+1)=2  префикс вернет новое значение переменной a
d = b++;alert(d); // 1 постфикс, возврат старого значения
c = (2 + ++a);alert(c); // 5  2+ 2+1  возврат переменной a нового значения
d = (2 + b++); alert(d); // 4  2 +1+1 (возврат старого значения переменной b
alert(a); // 3      ++a=2 далее следующий ++a будет как 2+1
alert(b); // 3  b++ изначально вернет 1  далее при следующей операции  b++ будет как 2+1  но вернет два и при вызове alert операция будет как 2+1=3


// // 2. задание
var a = 2;
var x = 1 + (a *= 2) //  1+ (a=a*2)=5

// 3. задание

a=1
b=-4
if (a > 0 && b > 0) {
    console.log(`разность значений составит ${a-b}`)
} else if (a < 0 && b < 0) {
    console.log(`их произведение составит ${a*b}`)
} else {
    console.log(`сумма переменных составит ${a+b}`)
}


// 4. задание

let t=2
switch (t) {
    case 0:
        console.log(0)
    case 1:
        console.log(1)
    case 2:
        console.log(2)
    case 3:
        console.log(3)
    case 4:
        console.log(4)
    case 5:
        console.log(5)
    case 6:
        console.log(6)
    case 7:
        console.log(7)
    case 8:
        console.log(8)
    case 9:
        console.log(9)
    case 10:
        console.log(10)
    case 11:
        console.log(11)
    case 12:
        console.log(12)
    case 13:
        console.log(13)
    case 14:
        console.log(14)
    case 15:
        console.log(15) // проверка

}

// 5. задание

function summa(a, b) {
    return a + b
}
console.log(summa(15, 4)) // проверка

function minus(a, b) {
    return a - b
}
console.log(minus(10, 4)) // проверка

function multiply(a, b) {
    return a * b
}
console.log(multiply(10, 4)) // проверка

function div(a, b) {
    return a / b
}
console.log(div(4, 2)) // проверка

// 6. задание

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case summa:
            return summa(arg1, arg2)
        case minus:
            return minus(arg1, arg2)
        case multiply:
            return multiply(arg1, arg2)
        case div:
            return div(arg1, arg2)
    }

}
console.log(mathOperation(4, 15, minus))// проверка

//7 задание
console.log(null == 0) // false  Так как null=undifined

// 8 задание
function power(val, pow) {
    if (pow == 0) {
        return 1
    } else if (pow >= 1) {
        let summa = val * power(val, pow - 1)
        return summa
    } else
        return 'степерь имеет отрицательное значение '
}
console.log(power(2, -1))

