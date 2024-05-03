<!--
TRACCIA

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
Se è dispari inseriscilo nell’array.
Stampa in console l'array risultante.

-->

<!--
CREARE UN ARRAY VUOTO
-->
-Creare un array vuoto in cui si possa andare ad aggiungere i numeri dispari

<!--
ACQUISIRE INPUT DALL'UTENTE
-->
-Creare un ciclo for per leggere gli input dell'utente
    <!--nel ciclo-->
    <!--
    RENDERE I DATI UTILIZZABILI
    -->
    -Trasformare i "numeri" inseriti dall'utente in numeri
    <!--
    CONTROLLARE SE SONO PARI O DISPARI
    -->
    -Creare un controllo per i numeri inseriti
        SE numero è dispari (numero % 2 !== 0)
            -Aggiungere all'array il valore inserito in posizione countDispari (definita fuori dal ciclo e settata a 0)
            --Aumentare il valore di countDispari di 1

<!--
STAMPARE I VALORI DISPARI
-->
-Sfruttare un console.log per visualizzare i valori dispari