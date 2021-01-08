/*
Suskaiciuok nuo 1 iki 5.
Atvaizdavimas:
console.log(skaicius);
*/

const menesiai = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis'];

// console.log(menesiai[0]);
// console.log(menesiai[1]);
// console.log(menesiai[2]);
// console.log(menesiai[3]);

for (let i = 0; i < menesiai.length; i++) {
    console.log(menesiai[i]);
}



const pazymiai = [10, 2, 8, 4, 7];     // 6

let suma = 0;
const skaiciuKiekis = pazymiai.length;

// susumuojame visus pazymiu saraso narius (skaicius)
for (let i = 0; i < skaiciuKiekis; i++) {
    suma += pazymiai[i];
}

const vidurkis = suma / skaiciuKiekis;

console.log(suma, '/', skaiciuKiekis, '=', vidurkis);
console.log('Pazymiu vidurkis:', vidurkis);

// [0-4]
console.log('---------------------');

let loopSuma1 = 0;

for (let i = 0; i <= 4; i++) {
    loopSuma1 += i;
    console.log('Pridedamas skaicius: ' + i + ' loop suma: ' + loopSuma1);
}

// [0-100]
console.log('---------------------');

let loopSuma2 = 0;

for (let i = 0; i <= 100; i++) {
    loopSuma2 += i;
    console.log('Pridedamas skaicius: ' + i + ' loop suma: ' + loopSuma2);
}

// [574-815]
console.log('---------------------');

let loopSuma3 = 0;

for (let i = 574; i <= 815; i++) {
    loopSuma3 += i;
    console.log('Pridedamas skaicius: ' + i + ' loop suma: ' + loopSuma3);
}

// [-70-30]
console.log('---------------------');

let loopSuma4 = 0;

for (let i = -70; i <= 30; i++) {
    loopSuma4 += i;
    console.log('Pridedamas skaicius: ' + i + ' loop suma: ' + loopSuma4);
}

console.log('---------------------');

const pradinisTekstas = 'Labukas';
let atbulasTekstas = '';

for (let i=pradinisTekstas.length - 1; i >= 0; i--) {
    atbulasTekstas += pradinisTekstas[i];
}

console.log('Pradinis tekstas: ' + pradinisTekstas + ' --> ' + atbulasTekstas);

// [0-11]
console.log('---------------------');

const daliklis1 = 3;
let beLiekanos1 = 0;

for (let i = 0; i <= 11; i++) {
    let dalybosVeiksmas1 = i%daliklis1 
    if (dalybosVeiksmas1 === 0) {
        beLiekanos1++;
    }
}

console.log('Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš ' + daliklis1 + ' yra ' + beLiekanos1 + ' vienetai');

// [8-31]
console.log('---------------------');

const daliklis2 = 5;
let beLiekanos2 = 0;

for (let i = 8; i <= 31; i++) {
    let dalybosVeiksmas2 = i%daliklis2 
    if (dalybosVeiksmas2 === 0) {
        beLiekanos2++;
    }
}

console.log('Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš ' + daliklis2 + ' yra ' + beLiekanos2 + ' vienetai');

// [-18-18]
console.log('---------------------');

const daliklis3 = 7;
let beLiekanos3 = 0;

for (let i = -18; i <= 18; i++) {
    let dalybosVeiksmas3 = i%daliklis2 
    if (dalybosVeiksmas3 === 0) {
        beLiekanos3++;
    }
}

console.log('Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš ' + daliklis3 + ' yra ' + beLiekanos3 + ' vienetai');