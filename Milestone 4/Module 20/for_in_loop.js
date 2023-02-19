var myComputer = {
    model: 'vt-200',
    brand: 'Xiaomi',
    processor: 'Ryzen 5 5600g',
    ram: '16gb'
}

for(var keys in myComputer){
    var values = myComputer[keys]
    console.log(`${keys}: ${values}`);
}