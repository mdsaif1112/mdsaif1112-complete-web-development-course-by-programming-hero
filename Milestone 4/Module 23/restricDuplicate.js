function restrictDuplicate(myArray) {
    let restrictedArray = [];
    for (let i = 0; i < myArray.length; i++) {
        const friendName = myArray[i];
        const isIncludesInArray = restrictedArray.includes(friendName);
        if(isIncludesInArray == false){
            restrictedArray.push(friendName);
        }
    }
    return restrictedArray;
}

let myFriends = ['a','b','c','d','e','f','a','d','c','e','f','a','b','c','e','d','f'];
const avoidDuplicate = restrictDuplicate(myFriends);
console.log(avoidDuplicate);