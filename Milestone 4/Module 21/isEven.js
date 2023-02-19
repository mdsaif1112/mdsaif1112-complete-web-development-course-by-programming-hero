function isEven(numbers) {
    const oddNumbers = [];
    const evenNumbers = [];
    for(const i in numbers){
        const number = numbers[i]
        switch (number%2) {
            case 0:
                evenNumbers.push(number)
                break;
            case 1:
                oddNumbers.push(number)
                break;
            default:
                break;
        }
    }
    return `${evenNumbers} are even numbers
    ${oddNumbers} are odd Numbers`
}

const numbers = [0,8,9,4,7,6,2,3,5,1,3,];
const checkEvenNumbers = isEven(numbers)
console.log(checkEvenNumbers);