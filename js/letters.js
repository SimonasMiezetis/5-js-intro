function letters(text, counter) {
    //Validation
    if (typeof(text) !== 'string') {
        return 'ERROR: Pirmasis kintamasis yra netinkamo tipo.' 
    }
    if (text.length === 0 ||
        text.length > 100) {
        return 'ERROR: Pirmojo kintamojo reikšmė yra netinkamo dydžio.'
    }
    if (typeof(counter) !== 'number') {
        return 'ERROR: Antrasis kintamasis yra netinkamo tipo.'
    }
    if (counter <= 0) {
        return 'ERROR: Antrasis kintamasis turi būti didesnis už nulį.'
    }
    if (counter > text.length) {
        return 'ERROR: Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
    }
    if (isNaN(counter)) {
        return 'ERROR: Antrasis kintamasis negali buti NaN'
    }

    //Logic
    let letter = '';
    for (let i = counter; i <= text.length; i = i + counter) {
        letter += text[i - 1]
    }

    //Return
    return letter;
}

console.log(letters(-Infinity, 3));
console.log(letters('abc', -Infinity));
console.log(letters('abc', NaN));
console.log(letters('abc', {}));
console.log(letters({}, 3));
console.log(letters('abc', [3,4,5]));
console.log(letters(['abc','def'], 3));
console.log(letters(Infinity, 3));
console.log(letters('abc', Infinity));
console.log(letters(NaN, 1));
console.log(letters('abc', 4));
console.log(letters('abc', 0));
console.log(letters('abc', 'abc'));
console.log(letters('', 0));
console.log(letters(1561, 2));

console.log('---------------------');

console.log(letters('abcdefg', 2), '->', 'bdf');
console.log(letters('abcdefghijkl', 3), '->', 'cfil');
console.log(letters('abc', 1), '->', 'abc');
console.log(letters('abcdef', 1), '->', 'abcdef');
console.log(letters('abcdefghijklmnprsto', 3), '->', 'cfilpt');
console.log(letters('abcdefghijklmnprsto', 5), '->', 'ejp');












