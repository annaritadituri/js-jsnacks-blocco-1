'use strict';

//////////////////////////////////////////////////////////

//DEFINIRE LE VARIABILI
let somma = 0;
const lunghezzaArray = 10;
let i;

//ACQUISIRE LE VARIABILI
for (i = 0; i < lunghezzaArray; i++) {

    //ACQUISIRE LE VARIABILI
    let inputNumber = prompt("Inserisci un numero:");

    //VERIFICARE I VALORI
    inputNumber = Number(inputNumber);
    inputNumber.toFixed(2);
    inputNumber = Number(inputNumber);
    console.log({inputNumber});

    //CALCOLARE IL VALORE DI SOMMA
    somma = somma + inputNumber;
    //console.log({somma});

}

//STAMPARE I VALORI
console.log(somma.toFixed(2));
let media = somma / i;
console.log(media.toFixed(2));