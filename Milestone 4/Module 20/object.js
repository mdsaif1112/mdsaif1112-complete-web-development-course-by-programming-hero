var myMobile = {
    model: 'Redmi Note 5 Pro',
    brand: 'Xiaomi',
    processor: 'SD 636',
    ram: '4gb'
}

var myComputer = {
    model: 'vt-200',
    brand: 'Xiaomi',
    processor: 'Ryzen 5 5600g',
    ram: '16gb'
}

/* Get object keys */
// console.log(Object.keys(myComputer));

/* Get object values */
// console.log(Object.values(myComputer));




/* Get particular value from object */

// System 1
// console.log(myComputer.model);

// System 2
// console.log(myComputer['brand']);

// System 3
// var propertyKey = 'processor';
// var propertyValue = myComputer[propertyKey];
// console.log(propertyValue);



/* Set particular value for object */

// System 1
// myComputer.model = 'new value';
// console.log(myComputer);

// System 2
// myComputer['brand'] = 'new value';
// console.log(myComputer);

// System 3
// var propertyKey = 'processor';
// myComputer[propertyKey] = 'new value';
// console.log(myComputer);