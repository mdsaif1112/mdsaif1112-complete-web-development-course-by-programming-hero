function  prime() {
    for(let i = 0; i <= 50; i++){
        let number = i;
        if((number%3 == 0) && (number%5 == 0)){
            console.log('foobar');
        } else if(number%3 == 0){
            console.log('foo');
        } else if (number%5 == 0){
            console.log('bar');
        } else{
            console.log(number);
        }
    }
}

prime();