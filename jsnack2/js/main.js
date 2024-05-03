'use strict';

//////////////////////////////////////////////////////////

const lunghezzaArray = 2;

let arrayParole = [];

//ACQUISIRE GLI INPUT DALL'UTENTE

for (let i = 0; i < lunghezzaArray; i++) {
    let inputUtente = prompt("Inserisci una parola:");
    console.log({inputUtente});
    arrayParole.push(inputUtente);
    console.log({arrayParole});
}

let lunghezzaParole = [];

//CALCOLARE LUNGHEZZA

for(let i = 0; i < lunghezzaArray; i++) {
    lunghezzaParole[i] = arrayParole[i].length;
}

let i = 0;

//CONFRONTARE LE DUE LUNGHEZZE E STAMPARE LE PAROLE IN ORDINE DI LUNGHEZZA ASCENDENTE

if (lunghezzaParole[i] < lunghezzaParole[i + 1]) {
    console.log(arrayParole[i] + ": " + lunghezzaParole[i]);
    console.log(arrayParole[i + 1] + ": " + lunghezzaParole[i + 1]);
} else if (lunghezzaParole[i] <= lunghezzaParole[i + 1]) {
    console.log("Le parole sono della stessa lunghezza");
    console.log(arrayParole[i] + ": " + lunghezzaParole[i]);
    console.log(arrayParole[i + 1] + ": " + lunghezzaParole[i + 1]);
} else {
    console.log(arrayParole[i + 1] + ": " + lunghezzaParole[i + 1]);
    console.log(arrayParole[i] + ": " + lunghezzaParole[i]);
}


