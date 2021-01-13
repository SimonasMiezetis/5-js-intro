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
console.log(daugyba(2,'-'));

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
    let atbTekstas = "";
    for ( i = tekstas.length - 1; i >= 0; i--) {
        atbTekstas += tekstas[i];
    }
    return 'Pradinis tekstas :' + tekstas + ' ---> Atvirkscias tekstas: ' + atbTekstas;
}

console.log(tekstasAtvirksciai('labukas'));
console.log(tekstasAtvirksciai('labas krabas'));

console.log('---------------------');

function beLiekanos(from, till, divider) {
    let liekana = 0;
    for (let i = from; i <= till; i++) {
        let dalybosVeiksmas = i % divider;
        if (dalybosVeiksmas === 0) {
            liekana++
        }
    }
    return 'Skaičių intervale tarp '+ from +' ir '+ till +', besidalijančių be liekanos iš '+ divider +' yra '+ liekana +' vienetai.';
}

console.log(beLiekanos(0,11,3));
console.log(beLiekanos(8,31,5));
console.log(beLiekanos(-18,18,7));

console.log('---------------------');

function skaitmenuKiekisSkaiciuje(number) {
    if (typeof number !== 'number') {
        return 'ERROR: reikia skaiciaus tipo reiksmes';
    }
    if (isNaN(number) ||
        !isFinite(number)) {
        return 'ERROR: reikai normalaus/tikro skaicias';
    }


    let skaitmenuKiekis = number.toString().length 
    if (number % 1 !== 0) {
        skaitmenuKiekis--;
    }
    if (number < 0) {
        skaitmenuKiekis--;
    }
    return "Skaitmenu kiekis skaiciuje: " + skaitmenuKiekis;
}

console.log(skaitmenuKiekisSkaiciuje(-33));
console.log(skaitmenuKiekisSkaiciuje(3.5));
console.log(skaitmenuKiekisSkaiciuje(33333333333333));



