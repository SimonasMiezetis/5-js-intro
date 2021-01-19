function division(number1, number2){
    //Validation
    if (typeof number1 !== 'number' ||
    !isFinite(number1)) {
        return 'ERROR: Pirmasis kintamasis turi buti skaiciaus tipo reiksmes'
    }
    if (typeof number2 !== 'number' ||
    !isFinite(number2)) {
        return 'ERROR: Antrasis kintamasis turi buti skaiciaus tipo reiksmes'
    }
    if (isNaN(number1)) {
        return 'ERROR: Pirmasis kintamasis negali buti NaN reiksmes'
    }
    if (isNaN(number2)) {
        return 'ERROR: Antrasis kintamasis negali buti NaN reiksmes'
    }
    if (number2 === 0) {
        return 'ERROR: Dalyba is nulio negalima'
    }

    //Logic
    result = number1 / number2;

    //Result
    return result;
}

console.log(division(Infinity, 3));
console.log(division(-Infinity, 3));
console.log(division('abc', -Infinity));
console.log(division('abc', NaN));
console.log(division('abc', {}));
console.log(division('abc', [3,4,5]));
console.log(division({}, 3));
console.log(division(['abc','def'], 3));
console.log(division('abc', Infinity));
console.log(division(NaN, 1));
console.log(division('abc', 4));
console.log(division('abc', 0));
console.log(division('abc', 'abc'));
console.log(division('', 0));
console.log(division(10, 0));

console.log('---------------------');

console.log(division(0, 2) + ' --> 0');
console.log(division(10, 2) + ' --> 5');
console.log(division(100, 4) + ' --> 25');
console.log(division(1000000, 100) + ' --> 10000');
console.log(division(10, -1) + ' --> -10');
console.log(division(1561, 2) + ' --> 780.5');
console.log(division(2, 3) + ' --> 0.6666666666666666');


console.log(division(222222, 1));
console.log(division(222222, 10));
console.log(division(222222, 100));
console.log(division(222222, 1000));
console.log(division(222222, 10000));
console.log(division(222222, 100000));
console.log(division(222222, 1000000));

console.log('---------------------');

console.log(division(2.22222, 1));
console.log(division(2.22222, 10));
console.log(division(2.22222, 100));
console.log(division(2.22222, 1000));
console.log(division(2.22222, 10000));
console.log(division(2.22222, 100000));
console.log(division(2.22222, 1000000));


