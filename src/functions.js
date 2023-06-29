console.log("the product has been taken")

function addToChart(productName = "banana", quantity){ 
    console.log("the product has been taken : " + productName + " " + "quantity : " + quantity)
}
function addToChart(quantity, productName = "lemon"){ 
    console.log("the product has been taken : " + productName + " " + "quantity : " + quantity)
}
//addToChart()    
//addToChart("egg")   
//addToChart("apple", 20)   
addToChart(15)

let sayHello = () => {
    console.log("Hello World")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}
sayHello2()

function addToChart2(productName, quantity, unitPrice){
    console.log("product : " + productName + " " + "quantity : " + quantity + " " + "price : " + unitPrice)
}
addToChart2("pear", 5, 10)
addToChart2("banana", 7, 50)
addToChart2("apple", 15, 20)


let product1 = {productName : "Apple", quantity : 15, unitPrice : 20}

function addToChart3(product) {
    console.log("Product : " + product.productName + " " + "Quantity : " + product.quantity + " " + "UnitPrice : " + product.unitPrice)
}

addToChart3(product1)


let product2 = {productName : "apple", quantity : 5, unitPrice : 10}
let product3 = {productName : "apple", quantity : 5, unitPrice : 10}

product2 = product3
product3.productName = "WATERMELON"
console.log(product3.productName)

let number1 = 10
let number2 = 20

number1 = number2
number2 = 200
console.log(number1)

function addToChart4(proProducts){
    console.log(proProducts)
}

let products = [
        {productName : "apple", quantity : 5, unitPrice : 10},
        {productName : "pear", quantity : 15, unitPrice : 20},
        {productName : "watermelon", quantity : 25, unitPrice : 30}
]
addToChart4(products)

function add(number1, number2){
    console.log(number1 + number2)

}
add(20, 30)

function add2(...numbers){
    console.log(numbers)
    console.log("------------")
}
add2(20, 30, 50)

function add3(...numbers){ //rest 
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
         console.log(numbers[i])
    }
    console.log(total)
    console.log("-------------------")
}
add3(30, 40, 50)

function add3(something, ...numbers){ //rest 
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
         console.log(numbers[i])
    }
    console.log(total)
    console.log(something)
    console.log("----------------")
}
add3(30, 40, 50)

console.log(Math.max(200, 300, 500, 700, 1000))

let numbers = [200, 300, 500, 700, 1000] //spread
console.log(numbers)
console.log(...numbers)
console.log(Math.max(numbers))
console.log(Math.max(...numbers))
/*
let [icAnadolu, marmara, karadeniz] = ["İç Anadolu", "Marmara"]
console.log(icAnadolu)
console.log(marmara)
*/

let [icAnadolu, marmara, karadeniz, [icAnadoluCities]] = [
        {name : "İç Anadolu", population : "20m"},
        {name : "Marmara", population : "30m"},
        {name : "Karadeniz", population : "10m"},
        [
            ["Ankara", "Konya"],
            ["Istanbul", "Bursa"],
            ["Samsun", "Sinop"]
        ]
]
console.log(icAnadolu.name)
console.log(marmara.population)
console.log(icAnadoluCities)

let newProductName, newQuantity, newUnitPrice 
    ({productName : newProductName, quantity : newQuantity, unitPrice : newUnitPrice}
    =  {productName : "Apple", quantity : 5, unitPrice : 10})
console.log(newProductName)
console.log(newQuantity)
console.log(newUnitPrice)



