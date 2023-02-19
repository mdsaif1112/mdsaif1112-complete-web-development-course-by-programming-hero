// function factorial(length) {
//     let factorial = 1;
//     for (let i = length; i >= 1; i--) {
//         const number = [i];
//         factorial *= number;
//     }
//     return factorial;
// }

// const factorialLength = 5;
// const myFactorial = factorial(factorialLength);
// console.log(`Factorial of ${factorialLength}: ${myFactorial}`);

function factorial(length) {
    let factorial = 1;

    let i = length;
    while (i >= 1) {
        const number = [i];
        factorial *= number;
        i--;
    }
    return factorial;
}
const factorialLength = 7;
const myFactorial = factorial(factorialLength);
console.log(`Factorial of ${factorialLength}: ${myFactorial}`);