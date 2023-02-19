function reversedStr(str) {
    let words = str.split(' ');
    let result = [];
    for (let i = words.length-1; i >= 0; i--) {
        const element = words[i];
        result.push(element)
    }
    return result.join(' ');
}

const myStr = 'My name is saif';
const reversed = reversedStr(myStr);
console.log(reversed);