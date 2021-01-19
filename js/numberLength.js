function numberLength(number) {
    //Validation

    //Logic

    //1 variantas
    if (number < 0) {
        number = number * -1;
    } 

    let length = 0;
    for(i = number; i > 1; ++i){
        ++length;
        i = Math.floor(i/10);
    }

    //2 variantas
    // if(number < 0) {
    //     number = number * -1;
    // }
    // const length = Math.ceil(Math.log(number + 1) / Math.LN10);

    //Result
    return length
}

console.log(numberLength(1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000));
console.log(numberLength(-100));

 



