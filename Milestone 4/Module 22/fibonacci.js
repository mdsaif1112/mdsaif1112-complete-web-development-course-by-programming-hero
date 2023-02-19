function fibo(length) {
    let fibo = [0, 1];
    for(let i = 2; i < length; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

console.log(fibo(10));