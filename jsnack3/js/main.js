'use strict';

//////////////////////////////////////////////////////////

const lunghezzaArray = 3;

//let arrayNumeri = [];
let inputUtente;
let somma = 0;

for (let i = 0; i < lunghezzaArray; i++) {

    //ACQUISIRE GLI INPUT DALL'UTENTE
    inputUtente = prompt("Inserisci un numero:");
    console.log({inputUtente});

    //TRASFORMA GLI INPUT IN NUMERO
    inputUtente = Number(inputUtente);
    console.log({inputUtente});

    /*
    //AGGIUNGI IL VALORE ALL'ARRAY
    arrayNumeri.push(inputUtente);
    console.log({arrayNumeri});
    */

    //CALCOLARE IL VALORE SOMMA
    somma = somma + inputUtente;
}


//STAMPARE IL VALORE SOMMA
console.log({somma});