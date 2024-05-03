'use strict';

//////////////////////////////////////////////////////////

//CREARE UN ARRAY VUOTO
let arrayDispari = [];

//DEFINIRE VARIABILI
let countDispari = 0;
const lunghezzaArray = 6;

for (let i = 0; i < lunghezzaArray; i++) {

    //ACQUISIRE INPUT DALL'UTENTE
    let inputNumber = prompt("Inserisci un numero intero:");

    //RENDERE I DATI UTILIZZABILI
    inputNumber = parseInt(inputNumber);
    //console.log({inputNumber});

    //CONTROLLARE SE SONO PARI O DISPARI
    if (inputNumber % 2 !== 0) {
        arrayDispari[countDispari] = inputNumber;
        countDispari++;
    }

}

//STAMPARE I VALORI DISPARI
console.log({arrayDispari});