const products = {
    name: 'xiaomi',
    price: 23000,
    variants: {
        '4/64': 18000,
        '3/32': 16000,
        '2/16': 15000
    }
}

const variant = '4/64'

console.log(products.variants[variant]);

