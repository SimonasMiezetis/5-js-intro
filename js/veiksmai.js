const sum = gimimoMetai + gimimoMenesis + gimimoDiena;
console.log(sum);

console.log('---------------------');

const space = ', ';
const adresas = valstybe + space + miestas + space + gatve;
console.log(adresas);

console.log('---------------------');

let petriukoIndex = 0;
let petriukoSuma = 0;

petriukoSuma += petriukoPazymiai[petriukoIndex++];
petriukoSuma -= petriukoPazymiai[petriukoIndex++];
petriukoSuma += petriukoPazymiai[petriukoIndex++];
petriukoSuma -= petriukoPazymiai[petriukoIndex++];
petriukoSuma += petriukoPazymiai[petriukoIndex++];
console.log(petriukoSuma);

console.log('---------------------');

let jonukoIndex = 0;
let jonukoSuma = 0;

jonukoSuma += jonukoPazymiai[jonukoIndex++];
jonukoSuma -= jonukoPazymiai[jonukoIndex++];
jonukoSuma += jonukoPazymiai[jonukoIndex++];
jonukoSuma -= jonukoPazymiai[jonukoIndex++];
jonukoSuma += jonukoPazymiai[jonukoIndex++];
console.log(jonukoSuma);

console.log('---------------------');

let dariukoIndex = 0;
let dariukoSuma = 0;

dariukoSuma += dariukoPazymiai[dariukoIndex++];
dariukoSuma -= dariukoPazymiai[dariukoIndex++];
dariukoSuma += dariukoPazymiai[dariukoIndex++];
dariukoSuma -= dariukoPazymiai[dariukoIndex++];
dariukoSuma += dariukoPazymiai[dariukoIndex++];
console.log(dariukoSuma);

console.log('---------------------');

let petriukoPamokuSarasas = "";
let index1 = 4;

petriukoPamokuSarasas += petriukoTvarkarastis[index1--] + space;
petriukoPamokuSarasas += petriukoTvarkarastis[index1--] + space;
petriukoPamokuSarasas += petriukoTvarkarastis[index1--] + space;
petriukoPamokuSarasas += petriukoTvarkarastis[index1--] + space;
petriukoPamokuSarasas += petriukoTvarkarastis[index1--];
console.log(petriukoPamokuSarasas);

console.log('---------------------');

let jonukoPamokuSarasas = "";
let index2 = 4;

jonukoPamokuSarasas += jonukoTvarkarastis[index2--] + space;
jonukoPamokuSarasas += jonukoTvarkarastis[index2--] + space;
jonukoPamokuSarasas += jonukoTvarkarastis[index2--] + space;
jonukoPamokuSarasas += jonukoTvarkarastis[index2--] + space;
jonukoPamokuSarasas += jonukoTvarkarastis[index2--];
console.log(jonukoPamokuSarasas);

console.log('---------------------');

let dariukoPamokuSarasas = "";
let index3 = 4;

dariukoPamokuSarasas += dariukoTvarkarastis[index3--] + space;
dariukoPamokuSarasas += dariukoTvarkarastis[index3--] + space;
dariukoPamokuSarasas += dariukoTvarkarastis[index3--] + space;
dariukoPamokuSarasas += dariukoTvarkarastis[index3--] + space;
dariukoPamokuSarasas += dariukoTvarkarastis[index3--];
console.log(dariukoPamokuSarasas);

console.log('---------------------');


