const array1 = [1, 2, 9, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => {
    console.log(accumulator, currentValue)
    return accumulator + currentValue
},
initialValue)

console.log(sumWithInitial);
// Expected output: 10