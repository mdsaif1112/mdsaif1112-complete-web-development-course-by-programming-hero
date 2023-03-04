const products = [
    {name: 'xiaomi', price: 23000},
    {name: 'realme', price: 20000},
    {name: 'Iphone 14', price: 170000},
    {name: 'Iphone', price: 140000},
]

// const highest = products.filter(product => product.price > 22000);
const {name} = products.find(n => n.price > 23000)
console.log(name);