function make_avg(arr, size) {
    let sum = 0;
    for(var i in arr){
        const number = arr[i];
        if(number%2 == 1){
            sum += number
        }
    }
    return sum;
}

var arr = [56, 56, 60, 53, 51, 58];

var size = arr.length;

var avg = make_avg(arr, size);

console.log(avg);