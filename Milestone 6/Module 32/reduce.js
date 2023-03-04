const numbers = [2, 56, 7, 87, 74, 8]

const total = numbers.reduce((initial, currentElement)=> initial + currentElement, 0)

console.log(total);