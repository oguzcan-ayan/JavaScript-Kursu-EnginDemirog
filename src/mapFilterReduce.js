let cart = [
    {id : 1, productName : "Phone", quantity : 3, unitPrice : 4000},
    {id : 2, productName : "Glass", quantity : 5, unitPrice : 10},
    {id : 3, productName : "Pencil", quantity : 4, unitPrice : 20},
    {id : 4, productName : "Phone Charge", quantity : 2, unitPrice : 100},
    {id : 5, productName : "Book", quantity : 7, unitPrice : 50},
    {id : 6, productName : "Notebook", quantity : 1, unitPrice : 40}

]
//cart.map(product => console.log(product.productName))
//cart.map(product => console.log(product))
console.log("<ul>")
cart.map(product => {
    console.log("<li>" + product.productName + " : " + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")

let quantityOver2 = cart.filter(product => product.quantity > 2)
console.log(quantityOver2)

let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)
console.log(total)
//Single Page Application(SPA) : View, React ve Angular ile geliştirdiğimiz uygulamalar

//cart.push({id : 7, productName : "Headset", quantity : 6, unitPrice : 300})


function addToCart(basket) {
    basket.push({id : 7, productName : "Headset", quantity : 6, unitPrice : 300})
}

addToCart(cart)

console.log(cart)

let number = 10

function sumOfNumbers(number1) {
    number1 += 1
}

sumOfNumbers(number)
console.log(number)
