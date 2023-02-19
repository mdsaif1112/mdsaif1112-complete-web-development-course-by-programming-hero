function totalCost(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        let itemTotalPrice = item.price * item.quantity
        total += itemTotalPrice
    }
    return total;
}

const shoppingCart = [
    {name: 'Shirt', price: 300, quantity: 2},
    {name: 'Pant', price: 500, quantity: 5},
    {name: 'shoe', price: 200, quantity: 6},
]

const totalShoppingCost = totalCost(shoppingCart)

console.log(totalShoppingCost);