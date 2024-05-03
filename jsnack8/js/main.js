'use strict';

//////////////////////////////////////////////////////////

//DEFINIRE LE VARIABILI
let somma = 0;

//ACQUISIRE LE VARIABILI
let inputValori = prompt("Inserire un numero con 4 cifre:");

//CALCOLARE LA SOMMA
for (let i = 0; i < inputValori.length; i++) {
    let valoreNumerico = parseInt(inputValori[i]);
    console.log({valoreNumerico});
    somma = somma + valoreNumerico;
}

//STAMPARE IL RISULTATO
console.log({somma});