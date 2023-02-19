var myComputer = {
    model: 'vt-200',
    brand: 'Xiaomi',
    processor: 'Ryzen 5 5600g',
    ram: '16gb'
}

var objectKeys = Object.keys(myComputer);
var objectValues = Object.values(myComputer);

for (let i = 0; i < objectKeys.length; i++) {
    const keys = objectKeys[i];
    const values = myComputer[keys]
    console.log(`${keys}: ${values}`);
}