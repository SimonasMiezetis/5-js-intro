function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());

console.log('---------------------');

function daugyba(a, b) {
    rez = a * b;
    return rez;
}

console.log(daugyba(2,5));
console.log(daugyba(5,9));
console.log(daugyba(2,9));

console.log('---------------------');

function intervaloSuma(from, till) {
    let sum = 0
    for ( i = from; i <= till; i++) {
        sum += i;
        console.log(i + " " + sum);
    }
    return 'Skaičių intervale tarp '+ from +' ir '+ till +', susumuotu skaiciu suma yra ' + sum;
}

console.log(intervaloSuma(0, 4));
console.log(intervaloSuma(0, 10));
console.log(intervaloSuma(-70, -30));
console.log(intervaloSuma(-50, -50));
console.log(intervaloSuma(30, 70));

console.log('---------------------');


function tekstasAtvirksciai(tekstas) {
    console.log(tekstas);
    let atbTekstas = "";
    for ( i = tekstas.lenght - 1; i >= 0; i--) {
        atbTekstas += text[i];
    }
    return atbTekstas;
}

tekstasAtvirksciai("labas");
console.log(tekstasAtvirksciai('labukas'));