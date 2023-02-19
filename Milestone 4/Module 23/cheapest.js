function  cheapestPhone(phones) {
    let cheapest = phones[0]
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone
        }
    }
    return cheapest.brand;
}

const phones = [
    {brand: 'Xiaomi', price: 45000},
    {brand: 'Samsung', price: 55000},
    {brand: 'Appple', price: 35000}
]

const cheapest = cheapestPhone(phones);
console.log(cheapest);